const {Router} = require("express");
const router = Router();

const empresaController = require("../controllers/empresaController");

// get

router.get("/empresas", (req, res)=>{
    const resposta = empresaController.buscar();
    res.send(resposta);
})

router.post("/adicionarEmpresas", (req,res)=>{
    const resposta = empresaController.criarEmpresa();
    res.send(resposta);
});

router.put("/atualizandoEmpresas/:id", (req,res)=>{
    const {id} = req.params;
    const resposta = empresaController.atualizaEmpresa(id);
    res.send(resposta);
});

router.delete("/deletandoEmpresas/:id", (req,res)=>{
    const {id} = req.params;
    const resposta = empresaController.deletaEmpresa(id);
    res.send(resposta);
});

module.exports = router;

