const mongoose = require('mongoose');

const transitionsModel = new mongoose.Schema({

    initialBalance: { 
        type: Number,
        required: true
    },
    fareToAmount: {
        type: Number,
        required: true
    },
    fareToLocation: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    newBalance: {
        type: Number,
        required: true
    },
    transitionDate: {
        type: Date,
        required: true
    },
    transitionStatus: {
        type: String,
        required: true
    }

}, { timestamps: true })

const Transitions = mongoose.model('Message', transitionsModel);

exports.Transitions = Transitions;