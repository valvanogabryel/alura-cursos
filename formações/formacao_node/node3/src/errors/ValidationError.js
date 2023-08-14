import RequestError from "./RequestError.js";

class ValidationError extends RequestError {
  constructor(error) {
    const errorMessages = Object.values(error.errors)
      .map((errorValue) => errorValue.message)
      .join(" || ");

    super(
      `O(s) seguinte(s) erro(s) está(ão) acontecendo: ${errorMessages}`,
      400
    );
  }
}

export default ValidationError;
