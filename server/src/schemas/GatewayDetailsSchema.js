"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const gatewayDetailsSchema = new mongoose_1.Schema({
    _id: mongoose_1.default.Types.ObjectId,
    gateway_name: { type: String, required: false },
    alternative_channels: { type: String, required: false },
    escalation_path: { type: String, required: false },
    gw_requirements: { type: String, required: false },
    required_fields_examples: { type: String, required: false },
    phone_number: { type: String, required: false },
    region: { type: String, required: false },
    notes: { type: String, required: false },
    network: { type: String, required: false },
});
exports.default = mongoose_1.default.model('GatewayDetails', gatewayDetailsSchema);
//# sourceMappingURL=GatewayDetailsSchema.js.map