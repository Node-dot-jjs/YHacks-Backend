const express = require('express');

const user = function User(db) {
    const router = express.Router();

    router.get('/', (req, res) => {
        db.any('SELECT * FROM client').then(data => {
            res.send({'success': true, 'clients': data});
        });
    });

    router.get('/:id', (req, res) => {
        db.one('SELECT * FROM client WHERE id=${id}', {id: req.params.id}).then(client => {
            res.send({'success': true, 'client': client});
        })
    });

    router.get('/:id/devices', (req, res) => {
        db.any('SELECT id, client_id, threshold, gps_lat, gps_long FROM device WHERE client_id=${id}', {id: req.params.id}).then(devices => {
            res.send({'success': true, 'devices': devices});
        })
    });

    return router;
};

module.exports = user;