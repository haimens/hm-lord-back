const express = require('express');
const router = express.Router();

const func = require('od-utility');

const VNFlightAction = require('../../actions/flight.action');

router.post('/search', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNFlightAction.searchFlightWithInfo(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);

    } catch (e) {
        next(e);
    }
});


module.exports = router;