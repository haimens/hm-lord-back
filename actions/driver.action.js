const func = require('od-utility');

const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');


class VNDriverAction extends VNAction {

    static async registerDriverDetail(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'POST',
                ['driver', 'detail', realm_token],
                {}, {}, body
            )
        } catch (e) {
            throw e;
        }
    }

    static async findDriverDetailList(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['driver', 'all', 'detail', 'realm', realm_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async findDriverLocationList(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['driver', 'all', 'location', 'realm', realm_token]
            )
        } catch (e) {
            throw e;
        }
    }

    static async modifyDriverLocation(params, body, query, auth) {
        try {

            const {driver_token} = params;
            if (!driver_token) func.throwErrorWithMissingParam('driver_token');
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'PATCH',
                ['driver', 'detail', realm_token, driver_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

}

module.exports = VNDriverAction;