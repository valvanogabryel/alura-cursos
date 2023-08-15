import RequestError from "../errors/RequestError.js";

export default async function paginate(req, res, next) {
  let { limit = 5, page = 1, ordination = "id:-1" } = req.query;

  let [key, value] = ordination.split(":");

  limit = parseInt(limit);
  page = parseInt(page);
  value = parseInt(value);

  const result = req.result;

  if (limit > 0 && page > 0) {
    const paginatedBooks = await result
      .find()
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ [key]: value })
      .exec();

    res.status(200).json(paginatedBooks);
  } else {
    next(new RequestError());
  }
}
