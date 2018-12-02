const express = require('express');

const device = function Device(db) {
    const router = express.Router();

    router.get('/', (req, res) => {
        db.any('SELECT id, client_id, threshold, gps_lat, gps_long FROM device').then(data => {
            res.send({'success': true, 'devices': data});
        });
    });

    router.get('/:id/lastscan', (req, res) => {
       db.one('SELECT * FROM scan WHERE device = ${id} ORDER BY id DESC LIMIT 1', {id: req.params.id}).then(scan => {
           res.send({success: true, scan: scan});
       }).catch(err => {
           res.send({success: false, message: 'No recent scans'});
       })
    });


    return router;
};

module.exports = device;