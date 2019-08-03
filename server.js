const express = require('express');
const server = express();
const actionRouter = require('./actionRouter');
const projectRouter = require('./projectRouter')

server.use(express.json());
server.use('/api/actions', actionRouter)
server.use('api/package', projectRouter)

server.get('/', (req, res) => {
    res.send(`<h2> What We Getting Into?!<h2>`)
})

module.exports = server;