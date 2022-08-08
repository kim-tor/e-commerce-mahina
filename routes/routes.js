const express = require('express');
const router = express.Router();
const Model = require('../model/model');

// POST METHOD
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});


// GET ALL METHOD POST
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// GET BY ID METHOD 
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// UPDATE BY ID METHOD
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(id, updatedData, options)

        res.send(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

// DELETE BY ID METHOD
router.delete('/delete/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send(`Document with ${data.name} has been deleted`);
    }    
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

module.exports = router;