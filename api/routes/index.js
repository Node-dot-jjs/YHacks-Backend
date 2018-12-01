const express = require('express');
//const userRoutes = require('./user');

const routes = function Routes(db) {
    const router = express.Router();

    // router.use('/users', userRoutes(db));

    router.get('/', (req, res) => {
        res.send({'success': true, 'message': 'API'});
    });

    return router;
};

module.exports = routes;