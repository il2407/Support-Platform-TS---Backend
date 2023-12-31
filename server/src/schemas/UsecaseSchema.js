"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const useCaseSchema = new mongoose_1.Schema({
    _id: mongoose_1.default.Types.ObjectId,
    subject: { type: String, required: true },
    description: [{ type: String, required: true }],
    action: { type: String, required: true },
    salesforce_action: { type: String, required: true },
    notes: { type: String, required: false },
});
exports.default = mongoose_1.default.model('UseCase', useCaseSchema);
//# sourceMappingURL=UsecaseSchema.js.map