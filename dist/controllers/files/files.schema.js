"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filesSchema = void 0;
const zod_1 = require("zod");
exports.filesSchema = zod_1.z.object({
    id_user: zod_1.z.string().nonempty(),
    category: zod_1.z.string().nonempty(),
    subcategory: zod_1.z.string().nonempty(),
    name: zod_1.z.string().nonempty(),
});
//# sourceMappingURL=files.schema.js.map