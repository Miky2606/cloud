"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verified = void 0;
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
//# sourceMappingURL=verified.js.map