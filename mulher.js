const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(resquest, response) {
 response.json({
    nome: 'Simara Conceição',
    imagem: 'https://pbs.twimg.com/profile_images/1287404050674323458/E5fhaYoM_400x400.jpg',
    minibio: 'Desenvolvedora e instrutora'
  })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)