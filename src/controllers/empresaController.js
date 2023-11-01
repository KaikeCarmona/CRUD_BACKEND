class empresaController {
  buscar() {
    return "Buscando empresas";
  }
  criarEmpresa() {
    return "Criando empresa";
  }
  atualizaEmpresa(id) {
    return "Alterando dados da empresa " + id + "...";
  }
  deletaEmpresa(id) {
    return "A empresa " + id + "...";
  }
}

module.exports = new empresaController();
