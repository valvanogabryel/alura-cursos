import BaseError from "./BaseError.js";

class NotFound extends BaseError {
  constructor() {
    super("Página não encontrada", 404);
  }
}

export default NotFound;
