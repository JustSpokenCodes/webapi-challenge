const express = require('express');
const router = express.Router();
const dbaction = require('./data/helpers/actionModel');

router.use(express.json());

router.get('/', (req, res) => {
    dbaction.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch( error => {
        res.status(500).json({error:'What are you trying to get?! Not the right thing, thats for sure'})
    })
})

router.post('/', (req, res) => {
    const newAction = req.body

    dbaction.insert(newAction)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error => {
        res.status(500).json({error: "What are you trying to post?! Not the right thing, thats for sure"})
    })
})

router.put('/:id', (req,res) => {
    const updateAction = req.body
    const id = req.params.id

    dbaction.update(id, updateAction)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json({error: err, message: "You are not updating anything...yet"})
    })

})

router.delete('/:id', (req, res) => {
    const actionid = req.params.id

    dbaction.remove(actionid)
    .then(action => {
        if(action) {
            dbaction.remove(actionid).then(
                removeaction => {
                    res.status(201).json(removeaction)
                }
            )
        }else {
            res.status(404).json({error: err, message: "That user doesnt exist"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "That user hasnt been removed"})
    })
})

module.exports = router