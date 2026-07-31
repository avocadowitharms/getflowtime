param(
  [int]$Port = 5500,
  [string]$Root = (Split-Path -Parent $PSScriptRoot)
)

$rootPath = [System.IO.Path]::GetFullPath($Root).TrimEnd('\') + '\'
$mimeTypes = @{
  '.css' = 'text/css; charset=utf-8'
  '.html' = 'text/html; charset=utf-8'
  '.js' = 'text/javascript; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'
  '.png' = 'image/png'
  '.svg' = 'image/svg+xml'
}

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)
Write-Host "Starting Flowtime preview..."

try {
  $listener.Start()
  Write-Host "Flowtime preview ready at http://localhost:$Port/"

  while ($true) {
    $client = $null
    try {
      $client = $listener.AcceptTcpClient()
      $stream = $client.GetStream()
      $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::UTF8, $false, 1024, $true)
      $requestLine = $reader.ReadLine()

      $requestHeaders = @{}
      while ($true) {
        $line = $reader.ReadLine()
        if ([string]::IsNullOrEmpty($line)) {
          break
        }
        if ($line -match '^([^:]+):\s*(.*)$') {
          $requestHeaders[$Matches[1].ToLowerInvariant()] = $Matches[2]
        }
      }

      $method = if ($requestLine -match '^([A-Z]+)\s+') { $Matches[1] } else { 'GET' }
      $target = if ($requestLine -match '^[A-Z]+\s+([^\s]+)') { $Matches[1] } else { '/' }
      $pathOnly = ([System.Uri]::UnescapeDataString(($target -split '\?')[0])).TrimStart('/')

      if ($method -eq 'POST' -and $pathOnly -eq 'api/update-notes') {
        $contentLength = 0
        if ($requestHeaders.ContainsKey('content-length')) {
          [void][int]::TryParse($requestHeaders['content-length'], [ref]$contentLength)
        }

        $body = ''
        if ($contentLength -gt 0) {
          $buffer = New-Object char[] $contentLength
          $charsRead = 0
          while ($charsRead -lt $contentLength) {
            $count = $reader.Read($buffer, $charsRead, $contentLength - $charsRead)
            if ($count -le 0) {
              break
            }
            $charsRead += $count
          }
          if ($charsRead -gt 0) {
            $body = -join $buffer[0..($charsRead - 1)]
          }
        }

        $jsonPath = Join-Path $rootPath 'update-notes.json'
        $utf8NoBom = [System.Text.UTF8Encoding]::new($false)

        try {
          [void](ConvertFrom-Json -InputObject $body)
          $json = $body.Trim()
          [System.IO.File]::WriteAllText($jsonPath, $json + "`n", $utf8NoBom)

          $contentType = 'application/json; charset=utf-8'
          $payload = [System.Text.Encoding]::UTF8.GetBytes('{"ok":true}')
          $status = '200 OK'
        } catch {
          $contentType = 'application/json; charset=utf-8'
          $payload = [System.Text.Encoding]::UTF8.GetBytes('{"ok":false,"error":"Invalid update notes payload"}')
          $status = '400 Bad Request'
        }

        $headers = [System.Text.Encoding]::ASCII.GetBytes(
          "HTTP/1.1 $status`r`nContent-Type: $contentType`r`nContent-Length: $($payload.Length)`r`nConnection: close`r`n`r`n"
        )
        $stream.Write($headers, 0, $headers.Length)
        $stream.Write($payload, 0, $payload.Length)
        $stream.Flush()
        $reader.Dispose()
        $stream.Dispose()
        $client.Dispose()
        continue
      }

      if ($method -eq 'POST' -and $pathOnly -eq 'api/social-updates') {
        $contentLength = 0
        if ($requestHeaders.ContainsKey('content-length')) {
          [void][int]::TryParse($requestHeaders['content-length'], [ref]$contentLength)
        }

        $body = ''
        if ($contentLength -gt 0) {
          $buffer = New-Object char[] $contentLength
          $charsRead = 0
          while ($charsRead -lt $contentLength) {
            $count = $reader.Read($buffer, $charsRead, $contentLength - $charsRead)
            if ($count -le 0) {
              break
            }
            $charsRead += $count
          }
          if ($charsRead -gt 0) {
            $body = -join $buffer[0..($charsRead - 1)]
          }
        }

        $dataDir = Join-Path $rootPath 'data'
        $jsonPath = Join-Path $dataDir 'social-updates.json'
        $jsPath = Join-Path $dataDir 'social-updates.js'
        $utf8NoBom = [System.Text.UTF8Encoding]::new($false)

        try {
          if (!(Test-Path -LiteralPath $dataDir -PathType Container)) {
            New-Item -ItemType Directory -Path $dataDir | Out-Null
          }
          [void](ConvertFrom-Json -InputObject $body)
          $json = $body.Trim()
          if (!$json.TrimStart().StartsWith('[')) {
            throw 'Expected a JSON array of updates.'
          }
          [System.IO.File]::WriteAllText($jsonPath, $json + "`n", $utf8NoBom)
          [System.IO.File]::WriteAllText($jsPath, "window.FlowtimeUpdatesData = $json;`n", $utf8NoBom)

          $contentType = 'application/json; charset=utf-8'
          $payload = [System.Text.Encoding]::UTF8.GetBytes('{"ok":true}')
          $status = '200 OK'
        } catch {
          $contentType = 'application/json; charset=utf-8'
          $payload = [System.Text.Encoding]::UTF8.GetBytes('{"ok":false,"error":"Invalid update payload"}')
          $status = '400 Bad Request'
        }

        $headers = [System.Text.Encoding]::ASCII.GetBytes(
          "HTTP/1.1 $status`r`nContent-Type: $contentType`r`nContent-Length: $($payload.Length)`r`nConnection: close`r`n`r`n"
        )
        $stream.Write($headers, 0, $headers.Length)
        $stream.Write($payload, 0, $payload.Length)
        $stream.Flush()
        $reader.Dispose()
        $stream.Dispose()
        $client.Dispose()
        continue
      }

      if ([string]::IsNullOrWhiteSpace($pathOnly)) {
        $pathOnly = 'index.html'
      }

      $filePath = [System.IO.Path]::GetFullPath((Join-Path $rootPath $pathOnly.Replace('/', '\')))
      $validPath = $filePath.StartsWith($rootPath, [System.StringComparison]::OrdinalIgnoreCase)

      if ($validPath -and (Test-Path -LiteralPath $filePath -PathType Leaf)) {
        $extension = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
        $contentType = if ($mimeTypes.ContainsKey($extension)) { $mimeTypes[$extension] } else { 'application/octet-stream' }
        $payload = [System.IO.File]::ReadAllBytes($filePath)
        $status = '200 OK'
      } else {
        $contentType = 'text/plain; charset=utf-8'
        $payload = [System.Text.Encoding]::UTF8.GetBytes('Not found')
        $status = '404 Not Found'
      }

      $headers = [System.Text.Encoding]::ASCII.GetBytes(
        "HTTP/1.1 $status`r`nContent-Type: $contentType`r`nContent-Length: $($payload.Length)`r`nConnection: close`r`n`r`n"
      )
      $stream.Write($headers, 0, $headers.Length)
      $stream.Write($payload, 0, $payload.Length)
      $stream.Flush()
      $reader.Dispose()
      $stream.Dispose()
      $client.Dispose()
    } catch {
      Write-Host "Request handling error: $_"
      if ($null -ne $client) {
        $client.Dispose()
      }
    }
  }
} finally {
  $listener.Stop()
}
