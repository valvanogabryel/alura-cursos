import mongoose from "mongoose";

export default function errorHandler(error, _req, res, _next) {
  console.log(error);

  if (error instanceof mongoose.Error.CastError) {
    return res
      .status(400)
      .send({ message: "Um ou mais dados fornecidos estão incorretos" });
  } else if (error instanceof mongoose.Error.ValidationError) {
    const errorMessages = Object.values(error.errors)
      .map((errValue) => errValue.message)
      .join("; ");

    res.status(400).send({
      message: `Os seguintes erros estão acontecendo: ${errorMessages}`,
    });
  } else {
    res.status(500).send({
      message: "Erro interno do servidor",
    });
  }
}
