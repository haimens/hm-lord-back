const func = require('od-utility');
const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');


class VNTributeAction extends VNAction {

    static async findTributeListWithRealm(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);
            return await coreConn.coreRequest(
                'GET',
                ['tribute', 'all', 'detail', 'realm', realm_token]
                , query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }
}

module.exports = VNTributeAction;