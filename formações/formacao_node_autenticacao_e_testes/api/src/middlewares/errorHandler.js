export default function errorHandler(error, req, res, next) {
  if (error === "Campos com informações faltando.") {
    res.status(400).json(error);
  }
}
