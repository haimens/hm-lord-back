const express = require('express');
const router = express.Router();

const func = require('od-utility');

const VNRealmAction = require('../../actions/realm.action');



router.get('/detail', async (req, res, next) => {

    try {
        const resBody = func.configSuccess(
            await VNRealmAction.findRealmDetail(req.params, req.body, req.query)
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }

});


//@POST
//body:{twilio_account_id, twilio_auth_token, twilio_from_num}

router.post('/message', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNRealmAction.registerMessageResource(
                req.params, req.body, req.query
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }

});


//@POST
//body:{}
router.post('/email', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNRealmAction.registerEmailResource(
                req.params, req.body, req.query
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }

});

router.post('/payment', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNRealmAction.registerPaymentResource(
                req.params, req.body, req.query
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }

});


router.patch('/detail', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNRealmAction.modifyRealmDetail(req.params, req.body, req.query),
            'REALM BASIC INFO UPDATED'
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.patch('/resource', async (req, res, next) => {

    try {
        const resBody = func.configSuccess(
            await VNRealmAction.modifyRealmResource(req.params, req.body, req.query),
            'REALM PRIMARY RESOURCE INFO UPDATED'
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }

});

router.patch('/email/:email_resource_token', async (req, res, next) => {

    try {

        const resBody = func.configSuccess(
            await VNRealmAction.modifyEmailResource(req.params, req.body, req.query),
            'REALM EMAIL RESOURCE INFO UPDATED'
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }

});

router.patch('/message/:message_resource_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNRealmAction.modifyMessageResource(req.params, req.body, req.query),
            'REALM MESSAGE RESOURCE INFO UPDATED'
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }

});

router.patch('/payment/:payment_resource_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNRealmAction.modifyPaymentResource(req.params, req.body, req.query),
            'REALM PAYMENT RESOURCE INFO UPDATED'
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }

});


//10
router.get('/all/email', async (req, res, next) => {

    try {
        const resBody = func.configSuccess(
            await VNRealmAction.findEmailResourceList(req.params, req.body, req.query)
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }

});

//11
router.get('/all/message', async (req, res, next) => {

    try {
        const resBody = func.configSuccess(
            await VNRealmAction.findMessageResourceList(req.params, req.body, req.query)
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }

});


//12
router.get('/all/payment', async (req, res, next) => {

    try {
        const resBody = func.configSuccess(
            await VNRealmAction.findPaymentResourceList(
                req.params, req.body, req.query
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;