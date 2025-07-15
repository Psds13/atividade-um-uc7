const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

// Rota de teste
router.get("/", (req, res) => {
  res.send("Servidor funcionando");
  console.log("Rota inicial acessada");
});

// Rotas CRUD para usuários
router.route("/")
  .get(usuarioController.listarUsuarios)       // GET /usuarios
  .post(usuarioController.criarUsuario);       // POST /usuarios

router.route("/:id")
  .get(usuarioController.listarUsuarioPeloId)  // GET /usuarios/:id
  .put(usuarioController.atualizarUsuario)     // PUT /usuarios/:id
  .delete(usuarioController.removerUsuario);   // DELETE /usuarios/:id

module.exports = router;