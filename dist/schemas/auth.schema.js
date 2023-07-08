"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authSchema = void 0;
const zod_1 = require("zod");
exports.authSchema = zod_1.z.object({
    email: zod_1.z.string().email().nonempty(),
    user: zod_1.z.string().nonempty(),
    password: zod_1.z.string().nonempty(),
});
//# sourceMappingURL=auth.schema.js.map