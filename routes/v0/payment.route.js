const express = require('express');
const router = express.Router();

const func = require('od-utility');
const VNPaymentAction = require('../../actions/payment.action');

router.post('/web/:order_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNPaymentAction.makePaymentForOrder(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;