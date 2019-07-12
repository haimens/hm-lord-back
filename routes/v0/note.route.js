const express = require('express');
const router = express.Router();

const VNNoteAction = require('../../actions/note.action');
const func = require('od-utility');


router.get('/all/detail/order/:order_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNNoteAction.findNoteListWithOrder(req.params, req.body, req.query, req.lord.verify_info)
        );
        res.json(resBody);

    } catch (e) {
        next(e);
    }
});


router.get('/all/detail/customer/:customer_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNNoteAction.findNoteListWithCustomer(req.params, req.body, req.query, req.lord.verify_info)
        );
        res.json(resBody);

    } catch (e) {
        next(e);
    }
});

router.get('/all/detail/trip/:trip_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNNoteAction.findNoteListWithTrip(req.params, req.body, req.query, req.lord.verify_info)
        );
        res.json(resBody);

    } catch (e) {
        next(e);
    }
});

router.post('/detail/customer/:customer_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNNoteAction.registerNoteWithCustomer(req.params, req.body, req.query, req.lord.verify_info)
        );
        res.json(resBody);

    } catch (e) {
        next(e);
    }
});

router.post('/detail/trip/:trip_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNNoteAction.registerNoteWithTrip(req.params, req.body, req.query, req.lord.verify_info)
        );
        res.json(resBody);

    } catch (e) {
        next(e);
    }
});

router.post('/detail/order/:order_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNNoteAction.registerNoteWithOrder(req.params, req.body, req.query, req.lord.verify_info)
        );
        res.json(resBody);

    } catch (e) {
        next(e);
    }
});

router.patch('/detail/:order_note_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNNoteAction.modifyNoteDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


module.exports = router;