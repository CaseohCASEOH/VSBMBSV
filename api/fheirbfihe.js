export default function handler(req, res) {
  const key = req.query.key;
  const realKey = "secret-key";

  if (key !== realKey) {
    res.setHeader("Content-Type", "text/plain");
    return res.status(403).send("-- unauthorized");
  }

  const lua = `
print("success")
  `.trim();

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(lua);
}
