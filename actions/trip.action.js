const func = require('od-utility');

const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');


class VNTripAction extends VNAction {


    static async findTripListWithDriver(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            const {driver_token} = params;

            if (!driver_token) func.throwErrorWithMissingParam('driver_token');

            return await coreConn.coreRequest(
                'GET',
                ['trip', 'all', 'detail', 'driver', realm_token, driver_token],
                query, {}, {}
            );

        } catch (e) {
            throw e;
        }
    }

}

module.exports = VNTripAction;