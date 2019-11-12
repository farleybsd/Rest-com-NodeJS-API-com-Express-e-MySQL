module.exports = app => {

    app.get('/atendimentos',(req,res)=>{

        res.send('Olá você está na rota de atendimento')
    
    })

}