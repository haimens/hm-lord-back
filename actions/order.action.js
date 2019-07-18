const func = require('od-utility');

const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');


class VNOrderAction extends VNAction {

    static async findOrderListInRealm(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['order', 'all', 'detail', 'realm', realm_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async findOrderListWithCustomer(params, body, query, auth) {
        try {
            const {customer_token} = params;
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['order', 'all', 'detail', 'customer', realm_token, customer_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async findOrderDetail(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            const {order_token} = params;
            if (!order_token) func.throwErrorWithMissingParam('order_token');

            return await coreConn.coreRequest(
                'GET',
                ['order', 'detail', realm_token, order_token],
                {}, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async modifyOrderDetail(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);
            const {order_token} = params;
            if (!order_token) func.throwErrorWithMissingParam('order_token');


            return await coreConn.coreRequest(
                'PATCH',
                ['order', 'detail', realm_token, order_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

    static async registerOrder(params, body, query, auth) {
        try {
            const {realm_token, lord_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'POST',
                ['order', 'detail', realm_token], {lord_token}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

    static async registerOrderDiscount(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);
            const {order_token} = params;
            if (!order_token) func.throwErrorWithMissingParam('order_token');
            return await coreConn.coreRequest(
                'POST',
                ['order', 'discount', realm_token, order_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

    static async modifyOrderDiscount(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            const {order_token, order_discount_token} = params;

            return await coreConn.coreRequest(
                'PATCH',
                ['order', 'discount', realm_token, order_token, order_discount_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

    static async modifyOrderToFinalize(params, body, query, auth) {
        try {
            const {realm_token, lord_token} = this.checkRealmToken(auth);

            const {order_token} = params;

            return await coreConn.coreRequest(
                'PATCH',
                ['order', 'finalize', realm_token, order_token],
                {lord_token}, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }


    static async modifyOrderToCancel(params, body, query, auth) {
        try {
            const {realm_token, lord_token} = this.checkRealmToken(auth);

            const {order_token} = params;

            return await coreConn.coreRequest(
                'PATCH',
                ['order', 'cancel', realm_token, order_token],
                {lord_token}, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async modifyOrderToConfirm(params, body, query, auth) {
        try {
            const {realm_token, lord_token} = this.checkRealmToken(auth);

            const {order_token} = params;

            return await coreConn.coreRequest(
                'PATCH',
                ['order', 'confirm', realm_token, order_token],
                {lord_token}, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }


}

module.exports = VNOrderAction;