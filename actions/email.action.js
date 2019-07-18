const func = require('od-utility');
const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');

class VNEmailAction extends VNAction {
    static async sendEmailWithCustomer(params, body, query, auth) {
        try {
            const {customer_token} = params;
            const {realm_token, lord_token} = auth;

            if (!customer_token) func.throwErrorWithMissingParam('customer_token');
            return await coreConn.coreRequest(
                'POST',
                ['email', 'send', 'customer', realm_token, customer_token],
                {lord_token}, {}, {...body, type: 1}
            );
        } catch (e) {
            throw e;
        }
    }
}

module.exports = VNEmailAction;