"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adapterLogin = exports.adapterSignin = void 0;
const adapterSignin = (data) => {
    var _a, _b, _c;
    return {
        user: (_a = data.user) !== null && _a !== void 0 ? _a : "",
        email: (_b = data.email) !== null && _b !== void 0 ? _b : "",
        password: (_c = data.password) !== null && _c !== void 0 ? _c : "",
    };
};
exports.adapterSignin = adapterSignin;
const adapterLogin = (data) => {
    var _a, _b;
    return {
        email: (_a = data.email) !== null && _a !== void 0 ? _a : "",
        password: (_b = data.password) !== null && _b !== void 0 ? _b : "",
    };
};
exports.adapterLogin = adapterLogin;
//# sourceMappingURL=auth.adapter.js.map