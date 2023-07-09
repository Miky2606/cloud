"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileAdapter = void 0;
const fileAdapter = (data, id_file) => {
    var _a, _b, _c, _d;
    return {
        id_user: (_a = data.id_user) !== null && _a !== void 0 ? _a : "",
        name: (_b = data.name) !== null && _b !== void 0 ? _b : "",
        category: (_c = data.category) !== null && _c !== void 0 ? _c : "",
        subcategory: (_d = data.subcategory) !== null && _d !== void 0 ? _d : "",
        id_file: id_file !== null && id_file !== void 0 ? id_file : "",
    };
};
exports.fileAdapter = fileAdapter;
//# sourceMappingURL=file.dapter.js.map