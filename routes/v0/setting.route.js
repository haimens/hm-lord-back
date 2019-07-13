const express = require('express');
const router = express.Router();

const func = require('od-utility');

router.post('/detail', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNSettingAction.registerSetting(
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
            await VNSettingAction.findSettingList(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});
router.patch('/detail/:setting_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNSettingAction.modifySettingDetail(
                req.params, req.body, req.query, req.lord.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});
module.exports = router;