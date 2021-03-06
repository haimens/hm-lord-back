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
                {}, {}, body
            )
        } catch (e) {
            throw e;
        }
    }

    static async findSettingWithKey(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);


            const {setting_key} = query;
            //@contact_cell for dispatch center number call
            //@contact_email for dispatch center email
            if (!setting_key) func.throwErrorWithMissingParam('setting_key');

            return await coreConn.coreRequest(
                'GET',
                ['setting', 'detail', 'key', realm_token],
                {setting_key}, {}, {}
            );

        } catch (e) {
            throw e;
        }
    }
}

module.exports = VNSettingAction;