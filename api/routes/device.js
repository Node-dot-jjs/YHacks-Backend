const express = require('express');

const device = function Device(db) {
    const router = express.Router();

    router.get('/', (req, res) => {
        db.any('SELECT id, client_id, threshold, gps_lat, gps_long FROM device').then(data => {
            res.send({'success': true, 'devices': data});
        });
    });

    router.get('/lastscan', (req, res) => {
       db.one('SELECT * FROM scan ORDER BY id DESC LIMIT 1').then(scan => {
           res.send({success: true, scan: scan});
       }).catch(err => {
           res.send({success: false, message: 'No recent scans'});
       })
    });


    return router;
};

module.exports = device;