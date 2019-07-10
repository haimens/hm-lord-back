const coreConn = require('../services/core.conn');


class VNAddressAction {

    static async registerAddress(params, body, query) {
        try {

            return await coreConn.coreRequest(
                'POST',
                ['address', 'detail'],
                {}, {}, body
            );

        } catch (e) {
            throw e;
        }
    }
}


module.exports = VNAddressAction;