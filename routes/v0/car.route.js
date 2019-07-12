const express = require('express');
const router = express.Router();
const func = require('od-utility');

const VNCarAction = require('../../actions/car.action');

router.get('/all/detail/realm', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNCarAction.findCarList(
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
            await VNCarAction.registerCarDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

router.patch('/detail/:car_token', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNCarAction.modifyCarDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.patch('/driver/:driver_car_token', async (req, res, next) => {

    try {

        const resBody = func.configSuccess(
            await VNCarAction.modifyDriverCar(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e)
    }
});

router.post('/driver/:car_token', async (req, res, next) => {

    try {

        const resBody = func.configSuccess(
            await VNCarAction.registerDriverCar(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e)
    }
});


router.get('/all/driver/:car_token', async (req, res, next) => {

    try {

        const resBody = func.configSuccess(
            await VNCarAction.findDriverCarListWithCar(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e)
    }
});


router.get('/detail/:car_token', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNCarAction.findCarDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.post('/type', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNCarAction.registerCarType(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

router.get('/all/type', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNCarAction.findAllCarType(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);


    } catch (e) {
        next(e);
    }

});


router.patch('/type/:car_type_token', async (req, res, next) => {

    try {

        const resBody = func.configSuccess(
            await VNCarAction.modifyCarType(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;