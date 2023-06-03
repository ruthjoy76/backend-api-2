export default function unknownEndpoint(_req, res) {
  res.status(404).send(unknownEndpoint(_req));
}
