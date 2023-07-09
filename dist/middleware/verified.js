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
exports.verifiedFile = exports.verified = void 0;
const connect_db_1 = require("../db/connect.db");
const auth_schema_db_1 = __importDefault(require("../controllers/auth/auth.schema.db"));
const mongoose_1 = __importDefault(require("mongoose"));
const files_schema_db_1 = __importDefault(require("../controllers/files/files.schema.db"));
const verified = (schema, cb) => (req, res) => {
    const verified = schema.safeParse(req.body);
    if (!verified.success) {
        let message = [];
        verified.error.issues.map((e) => {
            message.push(`${e.path[0]}: ${e.message}`);
        });
        return res.status(400).json({ message: message });
    }
    else {
        return cb(req, res);
    }
};
exports.verified = verified;
const verifiedFile = (schema, cb) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    (0, connect_db_1.connect)();
    const verified = schema.safeParse(req.headers);
    if (!verified.success) {
        let message = [];
        verified.error.issues.map((e) => {
            message.push(`${e.path[0]}: ${e.message}`);
        });
        return res.status(400).json({ message: message });
    }
    else {
        try {
            const find_user = yield auth_schema_db_1.default.findById(req.headers.id_user);
            const find_file = yield files_schema_db_1.default.findOne({ name: req.headers.name });
            if (find_user === null)
                return res.status(404).json({
                    message: "User not Exist",
                });
            if (find_file !== null)
                return res.status(400).json({
                    message: "Another File has this Name",
                });
            return cb(req, res, next);
        }
        catch (error) {
            if (error instanceof mongoose_1.default.Error) {
                return res.status(500).json({
                    message: "Error in the Database. The problem can be a error id",
                });
            }
            return res.status(500).json({
                message: "Error in the Network",
            });
        }
    }
});
exports.verifiedFile = verifiedFile;
//# sourceMappingURL=verified.js.map