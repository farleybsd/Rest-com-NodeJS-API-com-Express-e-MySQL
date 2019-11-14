const moment = require('moment')
const conexao = require('../infraestrutura/conexao')


class Atendimento{

    adiciona(atendimento,res){

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data,'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentocomdata ={... atendimento,dataCriacao,data}
        const sql= 'Insert Into atendimentos set ?'


        conexao.query(sql,atendimentocomdata,(erro,resultados)=>{
            if(erro){
               res.status(400).json(erro)
            }
            else{
                res.status(201).json(resultados)
            }

        })
            
    }

}

module.exports = new Atendimento