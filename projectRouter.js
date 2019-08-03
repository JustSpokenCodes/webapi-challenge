const express = require('express');
const router = express.Router();
const dbproject = require('./data/helpers/projectModel')

router.use(express.json())

router.get('/', (req, res) => {
    dbproject.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        res.status(500).json({error:'This is wrong! Go back and dont collect $200.'})
    })
})

