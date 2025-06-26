export default function handler(req, res) {
  const key = req.headers['x-api-key'] || req.query.key;

  const allowedKey = 'my-secret-key';

  if (key !== allowedKey) {
    res.status(403).send('-- unauthorized');
    return;
  }

  const script = `
    print("success")
  `;

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(script);
}
