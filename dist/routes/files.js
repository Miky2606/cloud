"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const files_schema_1 = require("../controllers/files/files.schema");
const verified_1 = require("../middleware/verified");
const files_controller_1 = require("../controllers/files/files.controller");
const multer_1 = __importDefault(require("multer"));
const multer_gridfs_storage_1 = require("multer-gridfs-storage");
const storage = new multer_gridfs_storage_1.GridFsStorage({
    url: (_a = process.env.DB) !== null && _a !== void 0 ? _a : "",
});
const upload = (0, multer_1.default)({
    storage: storage,
});
const route = (0, express_1.Router)();
route.post("/upload-file", (0, verified_1.verifiedFile)(files_schema_1.filesSchema, upload.single("file")), files_controller_1.uploadFiles);
exports.default = route;
//# sourceMappingURL=files.js.map