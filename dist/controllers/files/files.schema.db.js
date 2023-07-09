"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const fileSchemaDb = new mongoose_1.Schema({
    id_user: { type: "string", required: true },
    name: { type: "string", required: true },
    category: { type: "string", required: true },
    subcategory: { type: "string", required: true },
    report: { type: "number", default: 3 },
    id_file: { type: "string", required: true },
});
const FileSchema = (0, mongoose_1.model)("File", fileSchemaDb);
exports.default = FileSchema;
//# sourceMappingURL=files.schema.db.js.map