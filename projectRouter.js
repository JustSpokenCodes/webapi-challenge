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

router.get("/:id", (req, res) =>{
    const id = req.params.id 
    dbproject.getProjectActions(id)
    .then( projectactions => {
        res.status(200).json(projectactions)
    })
    .catch( error => {
        res.status(500).json({error: "You cant get this data"})
    })
})

router.post('/', (req, res) => {
    const newProject = req.body

    dbaction.insert(newProject)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error => {
        res.status(500).json({error: "What are you trying to post?! Not the right thing, thats for sure"})
    })
})

router.put('/:id', (req,res) => {
    const updateProject = req.body
    const id = req.params.id

    dbaction.update(id, updateProject)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({error: err, message: "You are not updating anything...yet"})
    })

})

router.delete('/:id', (req, res) => {
    const projectid = req.params.id

    dbaction.remove(projectid)
    .then(project => {
        if(project) {
            dbaction.remove(project).then(
                removeproject => {
                    res.status(201).json(removeproject)
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