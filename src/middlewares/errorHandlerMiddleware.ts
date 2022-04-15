export default function errorHandlerMiddleware(error, req, res, next) {
  if (error.type === "not_found") {
    return res.sendStatus(404);
  }

  return res.sendStatus(500);
}
