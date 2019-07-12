const func = require('od-utility');

const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');

class VNNoteAction extends VNAction {

    static async registerNoteWithCustomer(params, body, query, auth) {

        try {
            const {realm_token} = this.checkRealmToken(auth);
            const {customer_token} = params;


            return await coreConn.coreRequest(
                'POST',
                ['note', 'detail', 'customer', realm_token, customer_token],
                {}, {}, body
            )
        } catch (e) {
            throw e;
        }
    }

    static async registerNoteWithOrder(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);
            const {order_token} = params;


            return await coreConn.coreRequest(
                'POST',
                ['note', 'detail', 'order', realm_token, order_token],
                {}, {}, body
            )
        } catch (e) {
            throw e;
        }
    }

    static async registerNoteWithTrip(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);
            const {trip_token} = params;


            return await coreConn.coreRequest(
                'POST',
                ['note', 'detail', 'trip', realm_token, trip_token],
                {}, {}, body
            )
        } catch (e) {
            throw e;
        }
    }

    static async findNoteListWithCustomer(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);
            const {customer_token} = params;


            return await coreConn.coreRequest(
                'GET',
                ['note', 'all', 'detail', 'customer', realm_token, customer_token],
                query, {}, {}
            )
        } catch (e) {
            throw e;
        }
    }

    static async findNoteListWithOrder(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);
            const {order_token} = params;


            return await coreConn.coreRequest(
                'GET',
                ['note', 'all', 'detail', 'order', realm_token, order_token],
                query, {}, {}
            )
        } catch (e) {
            throw e;
        }
    }

    static async findNoteListWithTrip(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);
            const {trip_token} = params;

            return await coreConn.coreRequest(
                'GET',
                ['note', 'all', 'detail', 'trip', realm_token, trip_token],
                query, {}, {}
            )
        } catch (e) {
            throw e;
        }
    }

    static async modifyNoteDetail(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);
            const {order_note_token} = params;


            return await coreConn.coreRequest(
                'PATCH',
                ['note', 'detail', realm_token, order_note_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }
}

module.exports = VNNoteAction;