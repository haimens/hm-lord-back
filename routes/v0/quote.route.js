const express = require('express');
const router = express.Router();
const func = require('od-utility');

const VNQuoteAction = require('../../actions/quote.action');

router.post('/detail', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNQuoteAction.registerQuoteRecordWithAddress(req.params, req.body, req.query, req.lord.verify_info),
            'QUOTE SUCCESS', req.user_info
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


module.exports = router;