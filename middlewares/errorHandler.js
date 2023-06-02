export default function errorHandler(err, _req, res, next) {
  console.error(err);
  res.status(500).send(err);
}
