class tabelas{

    init(conexao){

        this.conexao = conexao
        this.criarAtendimentos()
    }

    criarAtendimentos(){

        const sql = `
        create table IF NOT EXISTS Atendimentos (id int not null Auto_Increment,
        cliente varchar(50) not null,
        pet varchar(20),
        servico varchar(20) not null,
        status varchar(20) not null,
        observacoes text,
        Primary Key(id))
        `
            
        this.conexao.query(sql,(erro)=>{

            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela Atendimento Criado Com Sucesso')
            }

        })
    }
}

module.exports = new tabelas