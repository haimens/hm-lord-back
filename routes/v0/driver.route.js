const express = require('express');
const router = express.Router();
const func = require('od-utility');

const VNDriverAction = require('../../actions/driver.action');

router.get('/all/detail/realm', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNDriverAction.findDriverDetailList(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.post('/detail', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNDriverAction.registerDriverDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.patch('/detail/:driver_token', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNDriverAction.modifyDriverDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.get('/all/location/realm', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNDriverAction.findDriverLocationList(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.post('/car/:driver_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNDriverAction.registerDriverCar(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

router.get('/all/car/:driver_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNDriverAction.findDriverCarList(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.patch('/car/:driver_car_token', async (req, res, next) => {

    try {
        const resBody = func.configSuccess(
            await VNDriverAction.modifyDriverCar(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

router.get('/detail/:driver_token', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNDriverAction.findDriverDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});
module.exports = router;