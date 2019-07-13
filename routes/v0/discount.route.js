const express = require('express');
const router = express.Router();
const func = require('od-utility');


router.get('/all/detail/realm/:realm_token', async (req, res, next) => {
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


router.post('/detail/:realm_token', async (req, res, next) => {
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

router.patch('/detail/:realm_token/:discount_token', async (req, res, next) => {
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