const express = require('express');
const router = express.Router();
const func = require('od-utility');

const VNDiscountAction = require('../../actions/discount.action');


router.get('/all/detail/realm', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNDiscountAction.findDiscountListInRealm(
                req.params, req.body, req.query, req.lord.verify_info)
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.post('/detail', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNDiscountAction.registerDiscountDetail(
                req.params, req.body, req.query, req.lord.verify_info)
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

router.patch('/detail/:discount_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNDiscountAction.modifyDiscountDetail(
                req.params, req.body, req.query, req.lord.verify_info)
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;