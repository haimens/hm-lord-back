const express = require('express');
const router = express.Router();
const func = require('od-utility');

const VNOrderAction = require('../../actions/order.action');
router.get('/all/detail/realm', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNOrderAction.findOrderListInRealm(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

router.get('/detail/:order_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNOrderAction.findOrderDetail(
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
            await VNOrderAction.registerOrder(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

router.patch('/detail/:order_token', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNOrderAction.modifyOrderDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.patch('/discount/:order_token/:order_discount_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNOrderAction.modifyOrderDiscount(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;