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

    static async modifyDriverDetail(params, body, query, auth) {
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

    static async registerDriverCar(params, body, query, auth) {
        try {
            const {driver_token} = params;
            if (!driver_token) func.throwErrorWithMissingParam('driver_token');
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'POST',
                ['driver', 'car', realm_token, driver_token],
                {}, {}, body
            )
        } catch (e) {
            throw e;
        }
    }

    static async findDriverCarList(params, body, query, auth) {
        try {
            const {driver_token} = params;
            if (!driver_token) func.throwErrorWithMissingParam('driver_token');
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['driver', 'all', 'car', realm_token, driver_token],
                query, {}, {}
            );

        } catch (e) {
            throw e;
        }
    }

    static async modifyDriverCar(params, body, query, auth) {
        try {
            const {driver_car_token} = params;
            if (!driver_car_token) func.throwErrorWithMissingParam('driver_car_token');
            const {realm_token} = this.checkRealmToken(auth);


            return await coreConn.coreRequest(
                'PATCH',
                ['driver', 'car', realm_token, driver_car_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

    static async findDriverDetail(params, body, query, auth) {
        try {

            const {driver_token} = params;
            if (!driver_token) func.throwErrorWithMissingParam('driver_token');
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['driver', 'detail', realm_token, driver_token],
                {}, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async sendDriverSharingRequest(params, body, query, auth) {
        try {
            const {driver_token} = params;

            if (!driver_token) func.throwErrorWithMissingParam('driver_token');

            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'PATCH',
                ['driver', 'share', realm_token, driver_token],
                {}, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async findAllDriverPayableInfo(params, body, query, auth) {
        try {

            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['driver', 'all', 'payable', 'realm', realm_token],
                query, {}, {}
            );

        } catch (e) {
            throw e;
        }
    }


}

module.exports = VNDriverAction;