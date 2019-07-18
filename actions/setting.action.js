const func = require('od-utility');
const coreConn = require('../services/core.conn');

const VNAction = require('./action.model');


class VNSettingAction extends VNAction {
    static async registerSetting(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'POST',
                ['setting', 'detail', realm_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }

    }

    static async findSettingList(params, body, query, auth) {

        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['setting', 'all', 'detail', 'realm', realm_token],
                query, {}, {}
            )
        } catch (e) {
            throw e;
        }
    }

    static async modifySettingDetail(params, body, query, auth) {

        try {
            const {realm_token} = this.checkRealmToken(auth);

            const {setting_token} = params;

            return await coreConn.coreRequest(
                'PATCH',
                ['setting', 'detail', realm_token, setting_token],
                {}, {}, {}
            )
        } catch (e) {
            throw e;
        }
    }
}

module.exports = VNSettingAction;