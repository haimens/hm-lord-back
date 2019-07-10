const express = require('express');
const router = express.Router();
const func = require('od-utility');

const VNTripAction = require('../../actions/trip.action');

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


router.get('/all/detail/driver/:driver_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTripAction.findTripListWithDriver(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.get('/all/active/driver/:driver_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTripAction.findActiveTripListWithDriver(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;