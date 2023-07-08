"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/", (req, res) => {
    console.log(req.body);
});
exports.default = route;
//# sourceMappingURL=app.js.map