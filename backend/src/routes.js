const express = require('express');

const routes = express.Router();

routes.put('/users/:id', (req, res) => {
    return res.json({ id: req.params.id  });
});

module.exports = routes;
