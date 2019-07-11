const express = require('express');
const router = express.Router();

const func = require('od-utility');

const VNSalaryAction = require('../../actions/salary.action');

router.post('/detail/:realm_token/:driver_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNSalaryAction.registerSalary(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }

});

router.get('/all/detail/realm', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNSalaryAction.findSalaryListInRealm(
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
            await VNSalaryAction.findSalarySumInRealm(
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
            await VNSalaryAction.findSalaryListWithDriver(
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
            await VNSalaryAction.findSalarySumWithDriver(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;