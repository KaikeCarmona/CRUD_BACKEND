class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarTabelaEmpresas();
  }

  criarTabelaEmpresas() {
    const sql = `
        create table if not exists empresa(
            nome_cliente varchar(50) not null,
            senha varchar(15) not null,
            nome_empresa varchar(50) not null,
            cnpj char(14) not null,
            cep char(8) not null,
            endereco varchar(50) not null,
            numero varchar(3) not null,
            telefone varchar(9) not null,
            email varchar(50) not null
        )
         `;
         this.conexao.query(sql, (error) =>{
            if(error){
                console.log("Deu erro na criação da tabela empresa")
                console.log(error.message)
                return;
            }
            console.log("Tabela empresa criada com sucesso")
         })
  }
}

module.exports = new Tabelas();