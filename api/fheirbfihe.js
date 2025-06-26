export default function handler(req, res) {
  const ua = req.headers['user-agent']?.toLowerCase() || "";

  const isBrowser =
    ua.includes("mozilla") ||
    ua.includes("chrome") ||
    ua.includes("safari") ||
    ua.includes("firefox") ||
    ua.includes("edg") ||
    ua.includes("windows") ||
    ua.includes("linux") ||
    ua.includes("android") ||
    ua.includes("iphone");

  if (isBrowser) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Unauthorized</title>
  <style>
    body {
      background: #0f0f0f;
      color: #ff4444;
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    h1 {
      font-size: 3em;
      margin-bottom: 0.2em;
    }
    p {
      color: #999;
      font-size: 1.1em;
    }
  </style>
  <script>
    setTimeout(() => window.close(), 5000);
  </script>
</head>
<body>
  <h1>🚫 Unauthorized</h1>
  <p>This tab will close in 5 seconds.</p>
</body>
</html>
    `.trim();

    res.setHeader("Content-Type", "text/html");
    return res.status(403).send(html);
  }

  const lua = `print("success")`;

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(lua);
}
