const func = require('od-utility');
const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');

class VNInvoiceAction extends VNAction {

    static async findInvoiceList(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['invoice', 'all', 'detail', 'realm', realm_token],
                query, {}, {}
            );


        } catch (e) {
            throw e;
        }
    }

    static async modifyInvoiceDetail(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);
            const {invoice_token} = params;
            return await coreConn.coreRequest(
                'PATCH',
                ['invoice', 'detail', realm_token, invoice_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }
}


module.exports = VNInvoiceAction;