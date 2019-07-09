const func = require('od-utility');
const coreConn = require('../services/core.conn');

const VNAction = require('./action.model');

class VNQuoteAction extends VNAction {

    static async registerQuoteRecordWithAddress(params, body, query, auth) {
        try {

            const {realm_token} = this.checkRealmToken(auth);
            const record = await coreConn.coreRequest(
                'POST',
                ['quote', 'detail', realm_token],
                {}, {}, body
            );

            return record;

        } catch (e) {
            throw e;
        }
    }

}

module.exports = VNQuoteAction;