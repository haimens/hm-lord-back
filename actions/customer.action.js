const func = require('od-utility');

const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');


class VNCustomerAction extends VNAction {

    static async registerCustomerDetail(params, body, query, auth) {
        try {

            const {realm_token, lord_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'POST',
                ['customer', 'detail', realm_token], {lord_token}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

    static async findCustomerList(params, body, query, auth) {
        try {

            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['customer', 'all', 'detail', 'realm', realm_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async modifyCustomerDetail(params, body, query, auth) {
        try {

            const {customer_token} = params;

            if (!customer_token) func.throwErrorWithMissingParam('customer_token');
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'PATCH',
                ['customer', 'detail', realm_token, customer_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

    static async modifyCustomerInfo(params, body, query, auth) {
        try {

            const {customer_token} = params;

            if (!customer_token) func.throwErrorWithMissingParam('customer_token');
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'PATCH',
                ['customer', 'info', realm_token, customer_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

}

module.exports = VNCustomerAction;