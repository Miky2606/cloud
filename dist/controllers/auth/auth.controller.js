"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authLogin = void 0;
const auth_adapter_1 = require("./auth.adapter");
const authLogin = (req, res) => {
    const request = (0, auth_adapter_1.adapterLogin)(req.body);
    res.json({ user: request });
};
exports.authLogin = authLogin;
//# sourceMappingURL=auth.controller.js.map