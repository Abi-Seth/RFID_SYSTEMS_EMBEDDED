const _ = require('lodash');
const { Transitions } = require('../models/transitions.model');
const { validateTransition } = require('../validators/transitions.validators');

exports.addTransition = async (req, res) => {
    try {
        let transitionData = [];
        req.body.map(data => {
            transitionData.push(JSON.stringify(data).replace(/[{}]/g,'').replace(/[""]/g,''));
        });

        const transition = {}

        transition.initialBalance = parseInt(transitionData[3].split(':')[2].trim());
        transition.fareToAmount = parseInt(transitionData[4].split(':')[2].trim());
        transition.fareToLocation = transitionData[4].split(':')[2].split('to')[0].trim();
        transition.newBalance = parseInt(transitionData[5].split(':')[2].trim());
        transition.transitionDate = transitionData[6].split(':')[2].trim();
        transition.transitionStatus = transitionData[8].split(':')[2].trim();

        // console the data
        console.log(transition);

        const validTransitionInput = await validateTransition(_.pick(transition, [
            'initialBalance', 'fareTo', 'newBalance', 'transitionDate', 'transitionStatus', 'fareToLocation'
        ]));

        if (validTransitionInput.error) {
            return res.send(validTransitionInput.error.details[0].message);
        }
        const newTransition = new Transitions(transition);

        await newTransition.save();
        res.status(201).send({
            success: true,
            status: 201,
            message: 'Transition saved successfully.',
            data: transition
        })

        console.log('\n\nTransition saved successfully.');

    } catch(err) {
        res.status(400).send({
            success: false,
            status: 400,
            message: err.message,
        })
    }
    
}