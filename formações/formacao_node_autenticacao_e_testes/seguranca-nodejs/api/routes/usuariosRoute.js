const { Router } = require("express");

const router = Router();
const UsuarioController = require("../controllers/usuarioController");

router
  .get("/usuarios")
  .post("/usuarios", UsuarioController.register)
  .get("/usuarios/:id")
  .put("/usuarios/:id")
  .delete("/usuarios/:id");

module.exports = router;
