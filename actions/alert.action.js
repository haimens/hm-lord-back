const func = require('od-utility');

const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');


class VNAlertAction extends VNAction {

    static async modifyAlertDetail(params, body, query, auth) {
        try {
            const {alert_token} = params;

            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'PATCH',
                ['alert', 'detail', realm_token, alert_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

}

module.exports = VNAlertAction;