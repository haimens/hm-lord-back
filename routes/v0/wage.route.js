const express = require('express');
const router = express.Router();

const func = require('od-utility');

const VNWageAction = require('../../actions/wage.action');


router.get('/all/detail/realm', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNWageAction.findWageListInRealm(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);

    } catch (e) {
        next(e);
    }
});

router.get('/sum/driver/:driver_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNWageAction.findWageSum(
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
            await VNWageAction.findWageList(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);

    } catch (e) {
        next(e);
    }
});

router.get('/sum/driver/:driver_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNWageAction.findWageSum(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.get('/sum/realm', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNWageAction.findWageSumInRealm(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;