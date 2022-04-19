"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
const HttpError = (res, message = 'Error algo sucedio', code = 403) => {
    res.status(code);
    res.send({ error: message });
};
exports.HttpError = HttpError;
module.exports = { HttpError: exports.HttpError };
