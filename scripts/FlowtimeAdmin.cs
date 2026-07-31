using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading;
using System.Diagnostics;

namespace FlowtimeAdminLauncher
{
    class Program
    {
        private static string rootDir;
        private static int activePort = 5500;

        static void Main(string[] args)
        {
            Console.Title = "Flowtime Admin Hub Server";
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("==================================================");
            Console.WriteLine("        FLOWTIME ADMIN HUB SERVER (v1.0)          ");
            Console.WriteLine("==================================================");
            Console.ResetColor();

            rootDir = AppDomain.CurrentDomain.BaseDirectory;
            if (!File.Exists(Path.Combine(rootDir, "update-notes.json")))
            {
                DirectoryInfo parent = Directory.GetParent(rootDir);
                if (parent != null && File.Exists(Path.Combine(parent.FullName, "update-notes.json")))
                {
                    rootDir = parent.FullName;
                }
            }

            Console.WriteLine(string.Format("[INFO] Root Directory: {0}", rootDir));

            HttpListener listener = null;
            int[] tryPorts = new int[] { 5500, 5501, 5502, 5550, 8080 };

            foreach (int port in tryPorts)
            {
                try
                {
                    listener = new HttpListener();
                    listener.Prefixes.Add(string.Format("http://localhost:{0}/", port));
                    listener.Prefixes.Add(string.Format("http://127.0.0.1:{0}/", port));
                    listener.Start();
                    activePort = port;
                    break;
                }
                catch
                {
                    if (listener != null)
                    {
                        try { listener.Close(); } catch { }
                        listener = null;
                    }
                }
            }

            if (listener == null || !listener.IsListening)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("[ERROR] Could not start server on any available port (5500, 5501, 5502...).");
                Console.ResetColor();
                return;
            }

            string hubUrl = string.Format("http://localhost:{0}/admin/index.html", activePort);
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine(string.Format("[SUCCESS] Server running on http://localhost:{0}/", activePort));
            Console.WriteLine(string.Format("[SUCCESS] Opening Admin Hub: {0}", hubUrl));
            Console.ResetColor();

            try
            {
                Process.Start(new ProcessStartInfo(hubUrl) { UseShellExecute = true });
            }
            catch (Exception ex)
            {
                Console.WriteLine(string.Format("[WARN] Please open your browser at: {0} ({1})", hubUrl, ex.Message));
            }

            Console.WriteLine("\n[LOGS] Listening for API & HTTP requests...\n");

            while (listener.IsListening)
            {
                try
                {
                    HttpListenerContext context = listener.GetContext();
                    ThreadPool.QueueUserWorkItem(new WaitCallback((o) => ProcessRequest(context)));
                }
                catch
                {
                    break;
                }
            }
        }

        private static void ProcessRequest(HttpListenerContext context)
        {
            HttpListenerRequest request = context.Request;
            HttpListenerResponse response = context.Response;

            string path = request.Url.AbsolutePath;

            if (request.HttpMethod.Equals("OPTIONS", StringComparison.OrdinalIgnoreCase))
            {
                response.Headers.Add("Access-Control-Allow-Origin", "*");
                response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
                response.Headers.Add("Access-Control-Allow-Headers", "Content-Type");
                response.StatusCode = 200;
                response.Close();
                return;
            }

            if (request.HttpMethod.Equals("POST", StringComparison.OrdinalIgnoreCase) && path.Equals("/api/update-notes", StringComparison.OrdinalIgnoreCase))
            {
                HandlePostFile(request, response, "update-notes.json");
                return;
            }

            if (request.HttpMethod.Equals("POST", StringComparison.OrdinalIgnoreCase) && path.Equals("/api/social-updates", StringComparison.OrdinalIgnoreCase))
            {
                HandlePostFile(request, response, Path.Combine("data", "social-updates.json"));
                return;
            }

            if (path == "/")
            {
                path = "/admin/index.html";
            }

            string relPath = path.TrimStart('/').Replace('/', Path.DirectorySeparatorChar);
            string filePath = Path.Combine(rootDir, relPath);

            if (File.Exists(filePath))
            {
                ServeFile(response, filePath);
            }
            else
            {
                Console.ForegroundColor = ConsoleColor.Yellow;
                Console.WriteLine(string.Format("[404] {0} {1}", request.HttpMethod, path));
                Console.ResetColor();
                response.StatusCode = 404;
                byte[] notFound = Encoding.UTF8.GetBytes("404 Not Found");
                response.OutputStream.Write(notFound, 0, notFound.Length);
                response.Close();
            }
        }

        private static void HandlePostFile(HttpListenerRequest request, HttpListenerResponse response, string targetRelativePath)
        {
            try
            {
                using (StreamReader reader = new StreamReader(request.InputStream, request.ContentEncoding))
                {
                    string body = reader.ReadToEnd();
                    string targetPath = Path.Combine(rootDir, targetRelativePath);

                    string dir = Path.GetDirectoryName(targetPath);
                    if (!Directory.Exists(dir))
                    {
                        Directory.CreateDirectory(dir);
                    }

                    File.WriteAllText(targetPath, body, new UTF8Encoding(false));

                    Console.ForegroundColor = ConsoleColor.Green;
                    Console.WriteLine(string.Format("[POST] Successfully updated {0} ({1} bytes)", targetRelativePath, body.Length));
                    Console.ResetColor();

                    byte[] okMsg = Encoding.UTF8.GetBytes("{\"success\":true}");
                    response.ContentType = "application/json";
                    response.Headers.Add("Access-Control-Allow-Origin", "*");
                    response.StatusCode = 200;
                    response.OutputStream.Write(okMsg, 0, okMsg.Length);
                }
            }
            catch (Exception ex)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine(string.Format("[ERROR] Failed handling POST to {0}: {1}", targetRelativePath, ex.Message));
                Console.ResetColor();
                response.StatusCode = 500;
                byte[] err = Encoding.UTF8.GetBytes("{\"error\":\"" + ex.Message + "\"}");
                response.OutputStream.Write(err, 0, err.Length);
            }
            finally
            {
                response.Close();
            }
        }

        private static void ServeFile(HttpListenerResponse response, string filePath)
        {
            try
            {
                byte[] bytes = File.ReadAllBytes(filePath);
                response.ContentType = GetContentType(filePath);
                response.Headers.Add("Access-Control-Allow-Origin", "*");
                response.ContentLength64 = bytes.Length;
                response.StatusCode = 200;
                response.OutputStream.Write(bytes, 0, bytes.Length);
            }
            catch (Exception ex)
            {
                response.StatusCode = 500;
                Console.WriteLine(string.Format("[ERROR] Serving file {0}: {1}", filePath, ex.Message));
            }
            finally
            {
                response.Close();
            }
        }

        private static string GetContentType(string filePath)
        {
            string ext = Path.GetExtension(filePath).ToLower();
            switch (ext)
            {
                case ".html": return "text/html; charset=utf-8";
                case ".css": return "text/css; charset=utf-8";
                case ".js": return "application/javascript; charset=utf-8";
                case ".json": return "application/json; charset=utf-8";
                case ".png": return "image/png";
                case ".jpg":
                case ".jpeg": return "image/jpeg";
                case ".svg": return "image/svg+xml";
                case ".ico": return "image/x-icon";
                default: return "application/octet-stream";
            }
        }
    }
}
