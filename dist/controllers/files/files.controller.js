"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFiles = void 0;
const connect_db_1 = require("../../db/connect.db");
const mongoose_1 = __importDefault(require("mongoose"));
const files_schema_db_1 = __importDefault(require("./files.schema.db"));
const file_dapter_1 = require("./file.dapter");
const uploadFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    (0, connect_db_1.connect)();
    try {
        const id = req.file;
        const data = (0, file_dapter_1.fileAdapter)(req.headers, (_a = id.id) !== null && _a !== void 0 ? _a : "");
        const save = new files_schema_db_1.default(data);
        save.save();
        res.status(200).json({
            message: "File saved",
        });
    }
    catch (error) {
        if (error instanceof mongoose_1.default.Error)
            return res.status(500).json({
                message: "Error with the Database",
            });
        return res.status(500).json({
            message: "Error in the Network",
        });
    }
});
exports.uploadFiles = uploadFiles;
//# sourceMappingURL=files.controller.js.map