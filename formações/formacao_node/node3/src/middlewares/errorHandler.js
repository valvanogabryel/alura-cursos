import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import RequestError from "../errors/RequestError.js";
import ValidationError from "../errors/ValidationError.js";
import NotFound from "../errors/NotFound.js";

export default function errorHandler(error, _req, res, _next) {
  if (error instanceof mongoose.Error.CastError) {
    new RequestError().sendMessage(res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ValidationError(error).sendMessage(res);
  } else if (error instanceof NotFound) {
    error.sendMessage(res);
  } else {
    new BaseError().sendMessage(res);
  }
}
