const express = require("express")
const router = express.Router()

const app = express ()
const porta = 3333

const mulheres = [
        {
            nome: 'Simara Conceição',
            imagem: 'https://pbs.twimg.com/profile_images/1287404050674323458/E5fhaYoM_400x400.jpg',
            minibio: 'Desenvolvedora e Instrutora'
        },
    {
        nome: 'Iana Chan',
        imagem: 'https://pbs.twimg.com/profile_images/1420905428452524037/DURvAmKN_400x400.jpg',
        minibio: 'Fundadora da Programaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://doispontos.vteximg.com.br/arquivos/ids/174662-1000-1000/image-1.jpg?v=637699229122030000',
        minibio: 'Hacker antirrasista'
    }
]

function mostraMulheres(request, response) {
     response.json(mulheres)
 
}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)