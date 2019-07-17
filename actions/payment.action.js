const func = require('od-utility');

const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');

const VNPaymentFunc = require('../models/payment.func');


class VNPaymentAction extends VNAction {


    static async makePaymentForOrder(params, body, query, auth) {
        try {

            const {realm_token} = this.checkRealmToken(auth);

            const {order_token} = params;
            const {payment_resource_info} = await coreConn.coreRequest(
                'GET',
                ['realm', 'detail', realm_token],
                {}, {}, {}
            );


            const {card_nonce} = body;

            const {basic_info} = await coreConn.coreRequest(
                'GET',
                ['order', 'detail', realm_token, order_token],
                {}, {}, {}
            );

            const {amount} = basic_info;

            const response = await VNPaymentFunc.chargeWithCardNonce(amount, card_nonce, order_token, payment_resource_info);
            const {id: square_transaction_id} = response.transaction;

            await coreConn.coreRequest(
                'PATCH',
                ['order', 'pay', realm_token, order_token],
                {}, {}, {receipt: square_transaction_id, type: 1}
            );
        } catch (e) {
            throw e;
        }
    }
}

module.exports = VNPaymentAction;