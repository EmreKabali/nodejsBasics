const express = require("express");
const router = express.Router();

router.get('/', (req, resp, next) => {

    resp.status(200).json({
        message: 'Order were fetched'
    });
});


router.post('/', (req, resp, next) => {

    resp.status(201).json({
        message: 'Order was created'
    });
});


router.get('/:orderId', (req, resp, next) => {

    resp.status(200).json({
        message: 'Order details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, resp, next) => {

    resp.status(200).json({
        message: 'Order deleted',
        orderId: req.params.orderId
    });
});

module.exports = router;