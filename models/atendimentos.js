const moment = require('moment')
const conexao = require('../infraestrutura/conexao')


class Atendimento{

    adiciona(atendimento){

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data,'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentocomdata ={... atendimento,dataCriacao,data}
        const sql= 'Insert Into atendimentos set ?'


        conexao.query(sql,atendimentocomdata,(erro,resultados)=>{
            if(erro){
               console.log(erro)
            }
            else{
                console.log(resultados)
            }

        })
            
    }

}

module.exports = new Atendimento