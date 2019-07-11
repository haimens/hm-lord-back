const express = require('express');
const router = express.Router();
const func = require('od-utility');

const VNAlertAction = require('../../actions/alert.action');

router.patch('/detail/:realm_token/:alert_token', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNAlertAction.modifyAlertDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        throw e;
    }
});


module.exports = router;