const express = require('express');
const imageToUri = require('image-to-uri');
const fs = require('fs');

const Pizzas = require('../models/pizzas.js');
const createError = require('../utils/errors/create-error.js');
const isAuthJWT = require('../utils/authentication/jsonwebtoken.js');
const upload = require('../utils/middleware/file.middleware.js');

const pizzasRouter = express.Router();

pizzasRouter.get('/', (req, res) => {
    res.send('Esta es la lista de pizzas');
});

module.exports = pizzasRouter;