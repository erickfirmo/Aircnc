const express = require('express');

const routes = express.Router();


routes.post('/users', (req, res) => {
    return res.json(req.body);
});


modules.exports =  routes;