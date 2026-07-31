#!/usr/bin/env python3
"""
Zero-dependency Python local dev server for Flowtime & Update Notes Editor.
Serves static files and handles POST requests to /api/update-notes.
"""

import http.server
import json
import os
import socketserver

PORT = 5500
ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

class FlowtimeServerHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT_DIR, **kwargs)

    def do_POST(self):
        if self.path.strip('/') == 'api/update-notes':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length).decode('utf-8')
            try:
                data = json.loads(body)
                target_path = os.path.join(ROOT_DIR, 'update-notes.json')
                with open(target_path, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
                    f.write('\n')
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(b'{"ok":true}')
            except Exception as e:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"ok": False, "error": str(e)}).encode('utf-8'))
        else:
            self.send_error(404, "Not Found")

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("127.0.0.1", PORT), FlowtimeServerHandler) as httpd:
        print(f"Flowtime preview server running at http://localhost:{PORT}/")
        print(f"Update Notes Creator at http://localhost:{PORT}/admin/update-notes/index.html")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
