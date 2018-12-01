const express = require('express');

const user = function User(db) {
    const router = express.Router();

    router.get('/', (req, res) => {
        db.any('SELECT * from client').then(data => {
            res.send({'success': true, 'clients': data});
        });
    });

    return router;
};

module.exports = user;