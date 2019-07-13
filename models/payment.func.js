const func = require('od-utility');

const squareConn = require('square-connect');

class ANPaymentFunc {

    static async chargeWithCardNonce(amount, card_nonce, payment_record_token, payment_resource = {}) {
        try {
            if (!amount) func.throwErrorWithMissingParam('amount');
            if (!card_nonce) func.throwErrorWithMissingParam('card_nonce');
            const {square_access_token, square_location_id} = payment_resource;

            if (!square_access_token) func.throwErrorWithMissingParam('square_access_token');
            if (!square_location_id) func.throwErrorWithMissingParam('square_location_id');

            const request_body = {
                card_nonce,
                amount_money: {
                    amount,
                    currency: 'USD'
                },
                idempotency_key: payment_record_token,
                product: "ATHENA ORDER"
            };
            const chargeAPI = this.initChargeApi(square_access_token);
            return await chargeAPI.charge(square_location_id, request_body);

        } catch (e) {
            throw e;
        }
    }

    static initChargeApi(access_token) {
        try {
            const defaultClient = squareConn.ApiClient.instance;
            const oauth2 = defaultClient.authentications['oauth2'];
            oauth2.accessToken = access_token;
            // this.location_id = location_id
            return new squareConn.TransactionsApi();

        } catch (e) {
            throw e;
        }
    }
}

module.exports = ANPaymentFunc;