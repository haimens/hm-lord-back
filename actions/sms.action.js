const func = require('od-utility');
const coreConn = require('../services/core.conn');


class VNSMSAction {


    static async findCustomerSMSList(params, body, query, auth) {
        try {
            const {customer_token} = params;
            const {realm_token} = auth;
            if (!customer_token) func.throwErrorWithMissingParam('customer_token');
            if (!realm_token) func.throwErrorWithMissingParam('realm_token');
            return coreConn.coreRequest(
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
            return coreConn.coreRequest(
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
            const {} = params;
            const {realm_token} = auth;
        } catch (e) {
            throw e;
        }
    }
}


module.exports = VNSMSAction;