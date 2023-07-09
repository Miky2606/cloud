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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = (_a = process.env.SECRET) !== null && _a !== void 0 ? _a : "";
const createToken = (data, time) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield jsonwebtoken_1.default.sign({ id: data }, secret, {
        expiresIn: time,
    });
    return token;
});
exports.createToken = createToken;
const verifyToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (yield jsonwebtoken_1.default.decode(token));
    return id;
});
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.js.map