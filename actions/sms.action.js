const func = require('od-utility');
const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');


class VNSMSAction extends VNAction {


    static async findCustomerSMSList(params, body, query, auth) {
        try {
            const {customer_token} = params;
            const {realm_token} = auth;
            if (!customer_token) func.throwErrorWithMissingParam('customer_token');
            if (!realm_token) func.throwErrorWithMissingParam('realm_token');
            return await coreConn.coreRequest(
                'GET',
                ['message', 'all', 'detail', 'customer', realm_token, customer_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }

    }

    static async sendSMSWithCustomer(params, body, query, auth) {
        try {
            const {customer_token} = params;
            const {realm_token} = auth;

            if (!customer_token) func.throwErrorWithMissingParam('customer_token');
            return await coreConn.coreRequest(
                'POST',
                ['message', 'send', 'customer', realm_token, customer_token],
                {}, {...body, type: 1}
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
                ['sms', 'detail', realm_token, sms_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }
}


module.exports = VNSMSAction;