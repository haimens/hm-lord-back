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

    static async sendEmailWithDriver(params, body, query, auth) {
        try {
            const {driver_token} = params;
            const {realm_token, lord_token} = auth;

            if (!driver_token) func.throwErrorWithMissingParam('driver_token');
            return await coreConn.coreRequest(
                'POST',
                ['email', 'send', 'driver', realm_token, driver_token],
                {lord_token}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }
}

module.exports = VNEmailAction;