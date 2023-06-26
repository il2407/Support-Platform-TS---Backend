"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var onGoingSchema = new mongoose_1.Schema({
    _id: mongoose_1.default.Types.ObjectId,
    reporter: { type: String, required: false },
    case: [{ type: String, required: false }],
    date_reported: { type: String, required: false },
    eta: { type: String, required: false },
    subject: { type: String, required: false },
    task: { type: String, required: false },
    required_actions: { type: String, required: false },
    contact: { type: String, required: false },
    ongoing_type: { type: String, required: false },
});
exports.default = mongoose_1.default.model('OnGoing', onGoingSchema);
