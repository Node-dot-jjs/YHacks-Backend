const express = require('express');

const scan = function Scan(db) {
    const router = express.Router();

    router.post('/', (req, res) => {
        db.one('SELECT * FROM device WHERE id=${id}', {id: req.body.device_id}).then(device => {
            if (device.api_key === req.body.api_key) {
                db.one('INSERT INTO scan (device, data) VALUES (${device}, ${data}) RETURNING (id, timestamp)', {
                    device: req.body.device_id,
                    data: req.body.data
                }).then(rtn => {
                    res.send({success: true, message: 'Scan written'});
                })
            } else {
                res.send({success: false, message: 'Invalid API KEY'});
            }
        }).catch(err => {
            res.send({success: false, message: err});
        });
    });

    return router;
};

module.exports = scan;