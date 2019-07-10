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

    static async findActiveTripListWithDriver(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            const {driver_token} = params;

            if (!driver_token) func.throwErrorWithMissingParam('driver_token');

            return await coreConn.coreRequest(
                'GET',
                ['trip', 'all', 'active', 'driver', realm_token, driver_token],
                query, {}, {}
            );

        } catch (e) {
            throw e;
        }
    }

    static async findTripListInRealm(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['trip', 'all', 'detail', 'realm', realm_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async findActiveTripListInRealm(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['trip', 'all', 'active', 'realm', realm_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }


    static async modifyTripDetail(params, body, query, auth) {
        try {

            const {realm_token} = this.checkRealmToken(auth);
            const {trip_token} = params;
            return await coreConn.coreRequest(
                'PATCH',
                ['trip', 'detail', realm_token, trip_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }

    }

    static async modifyTripOperation(params, body, query, auth) {

        try {

            const {realm_token} = this.checkRealmToken(auth);
            const {trip_token} = params;
            return await coreConn.coreRequest(
                'PATCH',
                ['trip', 'operation', realm_token, trip_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

    static async findTripCountInRealm(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['trip', 'count', 'realm', realm_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async findTripDetail(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            const {trip_token} = params;
            if (!trip_token) func.throwErrorWithMissingParam('trip_token');
            return await coreConn.coreRequest(
                'GET',
                ['trip', 'detail', realm_token, trip_token],
                {}, {}, {}
            );


        } catch (e) {
            throw e;
        }
    }

    static async registerTripAddon(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            const {trip_token, order_token} = params;

            if (!trip_token) func.throwErrorWithMissingParam('trip_token');
            if (!order_token) func.throwErrorWithMissingParam('order_token');

            return await coreConn.coreRequest(
                'POST',
                ['trip', 'addon', realm_token, order_token, trip_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

    static async modifyTripAddon(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            const {trip_token, order_token, addon_token} = params;
            return await coreConn.coreRequest(
                'PATCH',
                ['trip', 'addon', realm_token, order_token, trip_token, addon_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

    static async registerTripAlerts(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            const {trip_token,} = params;
            return await coreConn.coreRequest(
                'POST',
                ['trip', 'alerts', realm_token, trip_token],
                {}, {}, body
            );

        } catch (e) {
            throw e;
        }
    }


}

module.exports = VNTripAction;