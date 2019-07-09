const func = require("od-utility");

class STAction {
    static checkRealmToken(auth = {}) {
        const {realm_token, lord_token} = auth;
        if (!realm_token) func.throwErrorWithMissingParam("realm_token");

        if (!lord_token) func.throwErrorWithMissingParam('lord_token');
        return {realm_token, lord_token};
    }
}

module.exports = STAction;
