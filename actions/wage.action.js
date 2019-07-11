const func = require('od-utility');
const coreConn = require('../services/core.conn');

const VNAction = require('./action.model');


class VNWageAction extends VNAction {

    static async registerWage(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            const {driver_token} = params;
            if (!driver_token) func.throwErrorWithMissingParam('driver_token');

            return await coreConn.coreRequest(
                'POST',
                ['wage', 'detail', realm_token, driver_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

    static async findWageListInRealm(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['wage', 'all', 'detail', 'realm', realm_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async findWageList(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            const {driver_token} = params;
            if (!driver_token) func.throwErrorWithMissingParam('driver_token');

            return await coreConn.coreRequest(
                'GET',
                ['wage', 'all', 'detail', 'driver', realm_token, driver_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async findWageSum(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            const {driver_token} = params;
            if (!driver_token) func.throwErrorWithMissingParam('driver_token');

            return await coreConn.coreRequest(
                'GET',
                ['wage', 'sum', 'driver', realm_token, driver_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async findWageSumInRealm(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['wage', 'sum', 'realm', realm_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async modifyWageDetail(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);
            const {wage_token} = params;
            if (!wage_token) func.throwErrorWithMissingParam('wage_token');

            return await coreConn.coreRequest(
                'PATCH',
                ['wage', 'detail', realm_token, wage_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

}


module.exports = VNWageAction;