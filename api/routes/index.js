const express = require('express');
const clientRoutes = require('./client');

const routes = function Routes(db) {
    const router = express.Router();

    router.use('/clients', clientRoutes(db));

    router.get('/', (req, res) => {
        res.send({'success': true, 'message': 'API'});
    });

    return router;
};

module.exports = routes;