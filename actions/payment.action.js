const func = require('od-utility');

const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');

const VNPaymentFunc = require('../models/payment.func');


class VNPaymentAction extends VNAction {


    static async makePaymentForOrder(params, body, query, auth) {
        try {

            const {realm_token, lord_token} = this.checkRealmToken(auth);

            const {order_token} = params;

            const {payment_resource_info} = await coreConn.coreRequest(
                'GET',
                ['realm', 'detail', realm_token],
                {}, {}, {}
            );


            const {card_nonce, type} = body;

            if (type === 1) {
                const {order_info} = await coreConn.coreRequest(
                    'GET',
                    ['order', 'detail', realm_token, order_token],
                    {}, {}, {}
                );


                const {amount, status} = order_info;

                if (status < 2 || !amount) func.throwError('ORDER IS NOT FINALIZED');


                const response = await VNPaymentFunc.chargeWithCardNonce(amount, card_nonce, order_token, payment_resource_info);
                const {id: square_transaction_id} = response.transaction;

                await coreConn.coreRequest(
                    'PATCH',
                    ['order', 'pay', realm_token, order_token],
                    {lord_token}, {}, {receipt: square_transaction_id, type: 1}
                );
            }

            if (type === 2 || type === 3 || type === 4) {
                await coreConn.coreRequest(
                    'PATCH',
                    ['order', 'pay', realm_token, order_token],
                    {lord_token}, {}, {type, receipt: 'NONE PREPAY'}
                );
            }

            return {order_token};

        } catch (e) {
            throw e;
        }
    }
}

module.exports = VNPaymentAction;