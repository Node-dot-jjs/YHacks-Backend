const express = require('express');
const clientRoutes = require('./client');
const scanRoutes = require('./scan');
const deviceRoutes = require('./device');

const routes = function Routes(db) {
    const router = express.Router();

    router.use('/clients', clientRoutes(db));
    router.use('/scans', scanRoutes(db));
    router.use('/devices', deviceRoutes(db));

    router.get('/', (req, res) => {
        res.send({'success': true, 'message': 'API'});
    });

    return router;
};

module.exports = routes;