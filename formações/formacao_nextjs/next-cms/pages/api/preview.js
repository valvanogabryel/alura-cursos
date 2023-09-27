export default async function handler(req, res) {
  const previousPage = req.headers.referer;

  const password = "SENHA";
  if (req.query.password !== password) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }

  if (req.preview) {
    res.clearPreviewData();
    res.redirect(previousPage);
    return res.end();
  }

  res.setPreviewData({});
  res.redirect(previousPage);
  return res.end();
}
