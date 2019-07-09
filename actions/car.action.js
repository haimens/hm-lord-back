const func = require('od-utility');

const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');


class VNCarAction extends VNAction {

    static async registerCarDetail(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'POST',
                ['car', 'detail', realm_token], {}, {}, body
            );
        } catch (e) {
            throw e;
        }

    }

    static async findCarList(params, body, query, auth) {
        try {

            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['car', 'all', 'detail', 'realm', realm_token],
                query, {}, {}
            )
        } catch (e) {
            throw e;
        }
    }

    static async modifyCarDetail(params, body, query, auth) {
        try {
            const {car_token} = params;
            if (!car_token) func.throwErrorWithMissingParam('car_token');
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'PATCH',
                ['car', 'detail', realm_token, car_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

}

module.exports = VNCarAction;