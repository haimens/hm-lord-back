const express = require('express');
const router = express.Router();
const func = require('od-utility');

const VNCustomerAction = require('../../actions/customer.action');

router.get('/all/detail/realm', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNCustomerAction.findCustomerList(
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
            await VNCustomerAction.registerCustomerDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);

    } catch (e) {
        next(e);
    }
});


router.patch('/detail/:customer_token', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNCustomerAction.modifyCustomerDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);

    } catch (e) {
        next(e);
    }
});


router.patch('/info/:customer_token', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNCustomerAction.modifyCustomerInfo(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);

    } catch (e) {
        next(e);
    }
});


router.get('/detail/:customer_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNCustomerAction.findCustomerDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;