const express = require('express');
const server = express();
const actionRouter = require('./actionRouter');
const packageRouter = require('./packageRouter')

server.use(express.json());
server.use('/api/actions', actionRouter)
server.use('api/package', packageRouter)

server.get('/', (req, res) => {
    res.send(`<h2> What We Getting Into?!<h2>`)
})

module.exports = server;