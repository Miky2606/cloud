"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchemaDb = new mongoose_1.Schema({
    user: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});
const User = (0, mongoose_1.model)("User", userSchemaDb);
exports.default = User;
//# sourceMappingURL=auth.schema.db.js.map