const { Router } = require('express');
const transitionsRouter = Router();

const { addTransition } = require('../controllers/transitions.controller');

/**
 * @description To create a new transition
 * @api /api/v1/transitions/upload
 * @access Public
 * @type POST
 */

transitionsRouter.post('/upload', addTransition);

exports.transitionsRouter = transitionsRouter;