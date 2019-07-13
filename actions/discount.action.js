const func = require('od-utility');

const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');


class VNDiscountAction extends VNAction {


    static async registerDiscountDetail(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'POST',
                ['discount', 'detail', realm_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }

    }

    static async findDiscountListInRealm(params, body, query, auth) {
        try {

            const {realm_token} = this.checkRealmToken(auth);
            return await coreConn.coreRequest(
                'GET',
                ['discount', 'all', 'detail', 'realm', realm_token],
                query, {}, {}
            )
        } catch (e) {
            throw e;
        }
    }

    static async modifyDiscountDetail(params, body, query, auth) {

        try {

            const {realm_token} = this.checkRealmToken(auth);
            const {discount_token} = params;

            return await coreConn.coreRequest(
                'PATCH',
                ['discount', 'detail', realm_token, discount_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }
}

module.exports = VNDiscountAction;