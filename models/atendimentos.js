const conexao = require('../infraestrutura/conexao')


class Atendimento{

    adiciona(atendimento){

        const sql= 'Insert Into atendimentos set ?'
        conexao.query(sql,atendimento,(erro,resultados)=>{
            if(erro){
              Console.log(erro)
            }
            else{
                console.log(resultados)
            }

        })
            
    }

}

module.exports = new Atendimento