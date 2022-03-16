const express = require("express");
const router = express.Router();
router.get('/', (req, resp, next) => {
    resp.status(200).json({
        message: 'Handling GET request to /products'
    })

});

router.post('/', (req, resp, next) => {
    resp.status(200).json({
        message: 'Handling POST request to /products'
    })

});
router.get('/:productId', (req, resp, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        resp.status(200).json({
            message: "Message",
            id: id
        });

    } else {
        resp.status(200).json({
            message: ""
        });
    }
});

router.patch('/:productId', (req, resp, next) => {
    resp.status(200).json({
        message: 'Updated product'
    });
});

router.delete('/:productId', (req, resp, next) => {
    resp.status(200).json({
        message: 'Deleted product'
    });
});

module.exports = router;