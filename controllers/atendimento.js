module.exports = app => {

    app.get('/atendimentos',(req,res)=>{

        res.send('Olá você está na rota de atendimento')
    
    })

    app.post('/atendimentos',(req,res)=>{

        console.log(req.body)

        res.send({"mensagem":"Voçê está na rota de atendimento realizando um post"})

    })

}