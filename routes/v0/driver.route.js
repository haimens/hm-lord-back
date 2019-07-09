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
            await VNDriverAction.modifyDriverLocation(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


module.exports = router;