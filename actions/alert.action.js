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

    static async findAlertListInRealm(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['alert', 'all', 'detail', 'realm',realm_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

}

module.exports = VNAlertAction;