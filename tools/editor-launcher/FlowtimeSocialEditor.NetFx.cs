using System;
using System.Diagnostics;
using System.IO;
using System.Net.Sockets;
using System.Threading;
using System.Windows.Forms;

internal static class FlowtimeSocialEditorLauncher
{
  private const int Port = 5500;
  private const string EditorPath = "/admin/social-library/index.html";
  private const string FallbackRepoRoot = @"C:\Users\Ava\Documents\GitHub\getflowtime";

  [STAThread]
  private static void Main()
  {
    string repoRoot = FindRepoRoot(AppDomain.CurrentDomain.BaseDirectory) ?? FallbackRepoRoot;
    string serveScript = Path.Combine(repoRoot, "scripts", "serve.ps1");

    if (!File.Exists(serveScript))
    {
      MessageBox.Show(
        "Could not find the Flowtime preview server script:\n" + serveScript,
        "Flowtime Social Editor",
        MessageBoxButtons.OK,
        MessageBoxIcon.Error);
      return;
    }

    if (!IsPortOpen(Port))
    {
      StartPreviewServer(repoRoot, serveScript);
      WaitForServer(Port, TimeSpan.FromSeconds(8));
    }

    Process.Start("http://localhost:" + Port + EditorPath);
  }

  private static string FindRepoRoot(string startPath)
  {
    DirectoryInfo current = new DirectoryInfo(startPath);
    while (current != null)
    {
      if (File.Exists(Path.Combine(current.FullName, "index.html")) &&
          File.Exists(Path.Combine(current.FullName, "scripts", "serve.ps1")) &&
          Directory.Exists(Path.Combine(current.FullName, "admin", "social-library")))
      {
        return current.FullName;
      }

      current = current.Parent;
    }

    return null;
  }

  private static bool IsPortOpen(int port)
  {
    try
    {
      using (TcpClient client = new TcpClient())
      {
        IAsyncResult result = client.BeginConnect("127.0.0.1", port, null, null);
        bool connected = result.AsyncWaitHandle.WaitOne(TimeSpan.FromMilliseconds(250));
        if (!connected) return false;
        client.EndConnect(result);
        return true;
      }
    }
    catch
    {
      return false;
    }
  }

  private static void StartPreviewServer(string repoRoot, string serveScript)
  {
    ProcessStartInfo startInfo = new ProcessStartInfo();
    startInfo.FileName = "powershell.exe";
    startInfo.Arguments = "-NoProfile -ExecutionPolicy Bypass -File \"" + serveScript + "\" -Port " + Port;
    startInfo.WorkingDirectory = repoRoot;
    startInfo.UseShellExecute = false;
    startInfo.CreateNoWindow = true;
    startInfo.WindowStyle = ProcessWindowStyle.Hidden;
    Process.Start(startInfo);
  }

  private static void WaitForServer(int port, TimeSpan timeout)
  {
    DateTime deadline = DateTime.UtcNow + timeout;
    while (DateTime.UtcNow < deadline)
    {
      if (IsPortOpen(port)) return;
      Thread.Sleep(200);
    }
  }
}
