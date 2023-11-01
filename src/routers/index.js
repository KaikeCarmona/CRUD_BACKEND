
const routerEmpresas = require("./empresasRoute")
module.exports = (app) =>{
    app.use(routerEmpresas)
}