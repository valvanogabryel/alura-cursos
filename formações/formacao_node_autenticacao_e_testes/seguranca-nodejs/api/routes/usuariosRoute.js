const { Router } = require("express");

const router = Router();
const UsuarioController = require("../controllers/usuarioController");
const 

router
  .get("/usuarios")
  .post("/usuarios", UsuarioController.)
  .get("/usuarios/:id")
  .put("/usuarios/:id")
  .delete("/usuarios/:id");

module.exports = router;
