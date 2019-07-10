const express = require('express');
const router = express.Router();
const func = require('od-utility');


router.get('/all/detail/realm', async (req, res, next) => {
    try {

    } catch (e) {
        next(e);
    }
});

router.get('/detail/:order_token', async (req, res, next) => {
    try {
    } catch (e) {
        next(e);
    }
});


router.post('/detail', async (req, res, next) => {
    try {
    } catch (e) {
        next(e);
    }
});

router.patch('/detail/:order_token', async (req, res, next) => {
    try {
    } catch (e) {
        next(e);
    }
});

module.exports = router;