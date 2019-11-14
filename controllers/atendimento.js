const Atendimento = require('../models/atendimentos')

module.exports = app => {

    app.get('/atendimentos',(req,res)=>{

        res.send('Olá você está na rota de atendimento')
    
    })

    app.post('/atendimentos',(req,res)=>{

        const atendimento = req.body
        Atendimento.adiciona(atendimento,res)
        

    })

}