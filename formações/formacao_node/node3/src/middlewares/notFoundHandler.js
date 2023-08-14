import NotFound from "../errors/NotFound.js";

export default function notFoundHandler(_req, _res, next) {
  const error404 = new NotFound();

  next(error404);
}
