const restify = require('restify')

const server = restify.createServer()


server.get('/', (req, res) => {
    res.send('Ae! Servidor criado veio com resposta para o path /.')
})

server.listen(8080, () => {
    console.log('Servidor de pé em http://localhost:8080')
    console.log('Para derrubar o servidor: ctrl + c')
})