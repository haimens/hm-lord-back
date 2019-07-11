const func = require('od-utility');
const coreConn = require('../services/core.conn');

const VNAction = require('../actions/action.model');

class VNRealmAction extends VNAction {

    static async findRealmDetail(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);
            return await coreConn.coreRequest(
                'GET',
                ['realm', 'detail', realm_token],
                {}, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }


    static async modifyRealmDetail(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'PATCH',
                ['realm', 'detail', realm_token],
                {}, {}, body
            );

        } catch (e) {
            throw e;
        }
    }

    static async modifyRealmResource(params, body, query, auth) {
        try {

            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'PATCH',
                ['realm', 'resource', realm_token],
                {}, {}, body
            );

        } catch (e) {
            throw e;
        }
    }

    static async modifyEmailResource(params, body, query, auth) {
        try {
            const {realm_token, email_resource_token} = params;
            return await coreConn.coreRequest(
                'PATCH',
                ['realm', 'email', realm_token, email_resource_token],
                {}, {}, body
            );

        } catch (e) {
            throw e;
        }
    }

    static async modifyMessageResource(params, body, query, auth) {
        try {
            const {realm_token, message_resource_token} = params;
            return await coreConn.coreRequest(
                'PATCH',
                ['realm', 'message', realm_token, message_resource_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

    static async modifyPaymentResource(params, body, query, auth) {
        try {
            const {realm_token, payment_resource_token} = params;
            return await coreConn.coreRequest(
                'PATCH',
                ['realm', 'payment', realm_token, payment_resource_token],
                {}, {}, body
            );

        } catch (e) {
            throw e;
        }
    }

    static async findMessageResourceList(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['realm', 'all', 'message', realm_token],
                query, auth, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async findEmailResourceList(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);
            return await coreConn.coreRequest(
                'GET',
                ['realm', 'all', 'email', realm_token],
                query, auth, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async findPaymentResourceList(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['realm', 'all', 'payment', realm_token],
                query, auth, {}, {}
            );


        } catch (e) {
            throw e;
        }
    }

    static async registerMessageResource(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'POST',
                ['realm', 'message', realm_token],
                {}, {}, body
            );

        } catch (e) {
            throw e;
        }
    }

    static async registerEmailResource(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);
            return await coreConn.coreRequest(
                'POST',
                ['realm', 'email', realm_token],
                {}, {}, body
            )
        } catch (e) {
            throw e;
        }

    }

    static async registerPaymentResource(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);
            return await coreConn.coreRequest(
                'POST',
                ['realm', 'payment', realm_token],
                {}, {}, body
            )
        } catch (e) {
            throw e;
        }

    }
}

module.exports = VNRealmAction;