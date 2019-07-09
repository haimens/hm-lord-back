const express = require('express');
const router = express.Router();
const func = require('od-utility');


router.get('/all/detail/realm', async (req, res, next) => {
    try {
    } catch (e) {
        next(e);
    }
});

router.post('/detail/:realm_token', async (req, res, next) => {
    try {
    } catch (e) {
        next(e);
    }
});

router.patch('/detail/:customer_token', async (req, res, next) => {
    try {
    } catch (e) {
        next(e);
    }
});

router.get('/all/detail/customer/:customer_token', async (req, res, next) => {
    try {
    } catch (e) {
        next(e);
    }
});

module.exports = router;