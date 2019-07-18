const func = require('od-utility');
const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');


class VNSMSAction extends VNAction {


    static async findCustomerSMSList(params, body, query, auth) {
        try {
            const {customer_token} = params;
            if (!customer_token) func.throwErrorWithMissingParam('customer_token');

            return await coreConn.coreRequest(
                'GET',
                ['message', 'all', 'detail', 'customer', customer_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }

    }

    static async findSMSListInRealm(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['message', 'all', 'detail', 'realm', realm_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async sendSMSWithCustomer(params, body, query, auth) {
        try {
            const {customer_token} = params;
            const {realm_token, lord_token} = auth;

            if (!customer_token) func.throwErrorWithMissingParam('customer_token');
            return await coreConn.coreRequest(
                'POST',
                ['message', 'send', 'customer', realm_token, customer_token],
                {lord_token}, {}, {...body, type: 1}
            );
        } catch (e) {
            throw e;
        }
    }

    static async modifySMSDetail(params, body, query, auth) {
        try {
            const {sms_token} = params;
            const {realm_token} = this.checkRealmToken(auth);


            return await coreConn.coreRequest(
                'PATCH',
                ['message', 'detail', realm_token, sms_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }
}


module.exports = VNSMSAction;