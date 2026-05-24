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
    $client = $listener.AcceptTcpClient()
    $stream = $client.GetStream()
    $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
    $requestLine = $reader.ReadLine()

    while ($reader.ReadLine()) {
      # Consume request headers.
    }

    $target = if ($requestLine -match '^GET\s+([^\s]+)') { $Matches[1] } else { '/' }
    $pathOnly = ([System.Uri]::UnescapeDataString(($target -split '\?')[0])).TrimStart('/')
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
  }
} finally {
  $listener.Stop()
}
