const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema(
    {
    name: {
       type: String,
       required: true
     },
    description: {
        required: true,
        type: String
    },
    cost: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema);