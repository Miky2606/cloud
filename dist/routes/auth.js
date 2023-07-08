"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verified_1 = require("../middleware/verified");
const auth_schema_1 = require("../controllers/auth/auth.schema");
const auth_controller_1 = require("../controllers/auth/auth.controller");
const route = (0, express_1.Router)();
route.post("/hola", (0, verified_1.verified)(auth_schema_1.authSchema, auth_controller_1.authLogin));
exports.default = route;
//# sourceMappingURL=auth.js.map