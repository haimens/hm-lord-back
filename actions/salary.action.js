const func = require('od-utility');
const coreConn = require('../services/core.conn');

const VNAction = require('./action.model');


class VNSalaryAction extends VNAction {

    static async registerSalary(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            const {driver_token} = params;
            if (!driver_token) func.throwErrorWithMissingParam('driver_token');

            return await coreConn.coreRequest(
                'POST',
                ['salary', 'detail', realm_token, driver_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }


    static async findSalaryListWithDriver(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            const {driver_token} = params;
            if (!driver_token) func.throwErrorWithMissingParam('driver_token');

            return await coreConn.coreRequest(
                'GET',
                ['salary', 'all', 'detail', 'driver', realm_token, driver_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }



    static async findSalarySumWithDriver(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            const {driver_token} = params;
            if (!driver_token) func.throwErrorWithMissingParam('driver_token');

            return await coreConn.coreRequest(
                'GET',
                ['salary', 'sum', 'driver', realm_token, driver_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async modifySalaryDetail(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);
            const {salary_token} = params;
            if (!salary_token) func.throwErrorWithMissingParam('salary_token');

            return await coreConn.coreRequest(
                'PATCH',
                ['salary', 'detail', realm_token, salary_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

    static async findSalarySumInRealm(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            const {driver_token} = params;
            if (!driver_token) func.throwErrorWithMissingParam('driver_token');

            return await coreConn.coreRequest(
                'GET',
                ['salary', 'sum', 'realm', realm_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }


    static async findSalaryListInRealm(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);


            return await coreConn.coreRequest(
                'GET',
                ['salary', 'all', 'detail', 'realm', realm_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

}


module.exports = VNSalaryAction;