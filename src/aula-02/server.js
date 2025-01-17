const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('<h1>Home</h1>')
})

server.post('/contato', (req, res) => {
    res.send('<h1>Precisamos aprender a pegar os valores que o usuário digitou!</h1>')
})

server.get('/contato', (req, res) => {
    res.send(`
    <h1>Contato</h1>

    <form action="/contato" method="post">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email"/>
        <label for="mensagem">Mensagem:</label>
        <textarea name="mensagem" id="mensagem"></textarea>
        <input type="submit" value="Enviar"/>
    </form>
    `)
})

server.listen(3000, () => {
    console.log('Servido d pé em http://localhost:3000')
    console.log('Para desligar o nosso servidor ctlr + c')
})