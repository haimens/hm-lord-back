const express = require('express');
const router = express.Router();
const func = require('od-utility');

const VNTripAction = require('../../actions/trip.action');

router.get('/all/detail/realm', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNTripAction.findTripListInRealm(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.get('/all/active/realm', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTripAction.findActiveTripListInRealm(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.get('/detail/:trip_token', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNTripAction.findTripDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);

    } catch (e) {
        next(e);
    }
});

// router.get('/all/detail/customer/:customer_token', async (req, res, next) => {
//     try {
//     } catch (e) {
//         next(e);
//     }
// });


router.patch('/detail/:trip_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTripAction.modifyTripDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

router.patch('/operation/:trip_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTripAction.modifyTripOperation(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
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


router.post('/addon/:order_token/:trip_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTripAction.registerTripAddon(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.patch('/addon/:order_token/:trip_token/:addon_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTripAction.modifyTripAddon(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.post('/alerts/:trip_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTripAction.registerTripAlerts(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.get('/count/realm', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTripAction.findTripCountInRealm(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});
module.exports = router;