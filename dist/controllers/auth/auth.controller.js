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
exports.userGet = exports.authLogin = exports.authSignin = void 0;
const auth_adapter_1 = require("./auth.adapter");
const connect_db_1 = require("../../db/connect.db");
const auth_schema_db_1 = __importDefault(require("./auth.schema.db"));
const jwt_1 = require("../../jwt/jwt");
const encrypt_pwd_1 = require("./encrypt.pwd");
const authSignin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_db_1.connect)();
        const request = (0, auth_adapter_1.adapterSignin)(req.body);
        const findUser = yield auth_schema_db_1.default.find({
            $or: [{ email: request.email }, { user: request.user }],
        });
        if (findUser.length > 0)
            return res.status(401).json({
                message: "User Exist",
            });
        request.password = yield (0, encrypt_pwd_1.hash)(request.password);
        const create_user = new auth_schema_db_1.default(request);
        const created = yield create_user.save();
        const token = yield (0, jwt_1.createToken)(created.id, "1w");
        res.json({ message: "User Created", token: token });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.authSignin = authSignin;
const authLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, connect_db_1.connect)();
        const request = (0, auth_adapter_1.adapterLogin)(req.body);
        const find_user = yield auth_schema_db_1.default.find({ email: request.email });
        if (find_user.length === 0)
            return res.status(404).json({
                message: "User not exist",
            });
        const comparePassword = yield (0, encrypt_pwd_1.compare)(request.password, find_user[0].password);
        if (comparePassword === false)
            return res.status(401).json({ message: "Password incorrect" });
        const token = yield (0, jwt_1.createToken)(find_user[0].id, "1w");
        res.status(200).json({ message: "Access Success", token: token });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.authLogin = authLogin;
const userGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, connect_db_1.connect)();
        if (req.headers.bearer === undefined)
            return res.status(400).json({
                message: "Token undefined",
            });
        const verified = yield (0, jwt_1.verifyToken)(req.headers.bearer);
        if (verified === null)
            return res.status(404).json({
                message: "Error with the Token",
            });
        const user_find = yield auth_schema_db_1.default.findById(verified.id, { password: 0 });
        res.status(200).json({
            message: user_find,
        });
    }
    catch (error) {
        res.status(500).json({
            error,
        });
    }
});
exports.userGet = userGet;
//# sourceMappingURL=auth.controller.js.map