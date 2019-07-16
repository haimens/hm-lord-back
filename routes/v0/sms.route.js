const express = require('express');
const router = express.Router();

const func = require('od-utility');

const VNSMSAction = require('../../actions/sms.action');


router.get('/all/detail/customer/:customer_token', async (req, res, next) => {

    try {
        const resBody = func.configSuccess(
            await VNSMSAction.findCustomerSMSList(
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
            await VNSMSAction.findSMSListInRealm(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.post('/send/customer/:customer_token', async (req, res, next) => {

    try {

        const resBody = func.configSuccess(
            await VNSMSAction.sendSMSWithCustomer(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

router.patch('/detail/:sms_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNSMSAction.modifySMSDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


module.exports = router;