"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var useCaseSchema = new mongoose_1.Schema({
    _id: mongoose_1.default.Types.ObjectId,
    subject: { type: String, required: true },
    description: [{ type: String, required: false }],
    action: { type: String, required: false },
    salesforce_action: { type: String, required: false },
    notes: { type: String, required: false },
});
exports.default = mongoose_1.default.model('UseCase', useCaseSchema);
