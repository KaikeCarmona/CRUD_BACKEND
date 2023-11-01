const express = require("express");
const app = express();
const port = 3000;
 
const router = require("./routers/index")
const conexao = require("./conexao/conexao")
const tabelas = require("./conexao/tabelas")


tabelas.init(conexao);

router(app)
app.listen(port, (error)=>{
    if(error){
        console.log('Error: ', error);
    }
    console.log("Servidor Rodando!!!")
})