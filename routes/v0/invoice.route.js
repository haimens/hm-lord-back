const express = require('express');
const router = express.Router();

const func = require('od-utility');

const VNInvoiceAction = require('../../actions/invoice.action');


router.get('/all/detail/realm', async (req, res, next) => {

    try {
        const resBody = func.configSuccess(
            await VNInvoiceAction.findInvoiceList(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.patch('/detail/:invoice_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNInvoiceAction.modifyInvoiceDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


module.exports = router;