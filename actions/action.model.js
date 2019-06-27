const func = require("od-utility");

class STAction {
    static checkRealmToken(auth = {}) {
        const {realm_token} = auth;
        if (!realm_token) func.throwErrorWithMissingParam("realm_token");

        return {realm_token};
    }
}

module.exports = STAction;
