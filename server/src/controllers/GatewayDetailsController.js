"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gatewayDetailsController = void 0;
const GatewayDetailsSchema_1 = require("../schemas/GatewayDetailsSchema");
const mongoose_1 = require("mongoose");
const GatewayDetailsService_1 = require("../services/GatewayDetailsService");
const GatewayDetailsService = new GatewayDetailsService_1.gatewayDetailsService();
class gatewayDetailsController {
    constructor() {
        this.GatewayDetailsService = new GatewayDetailsService_1.gatewayDetailsService();
    }
    async GatewayDetails_get_all(req, res) {
        try {
            console.log("test");
            const GatewayDetails = await GatewayDetailsService.GatewayDetails_get_all();
            res.json(GatewayDetails);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async GatewayDetails_add_new_GatewayDetails(req, res) {
        const GatewayDetailsData = new GatewayDetailsSchema_1.default(); // Create an instance
        GatewayDetailsData._id = new mongoose_1.default.Types.ObjectId();
        GatewayDetailsData.gateway_name = req.body.gateway_name,
            GatewayDetailsData.alternative_channels = req.body.alternative_channels,
            GatewayDetailsData.escalation_path = req.body.escalation_path,
            GatewayDetailsData.gw_requirements = req.body.gw_requirements,
            GatewayDetailsData.required_fields_examples = req.body.required_fields_examples,
            GatewayDetailsData.phone_number = req.body.phone_number,
            GatewayDetailsData.region = req.body.region,
            GatewayDetailsData.notes = req.body.notes;
        GatewayDetailsData.network = req.body.network;
        try {
            const newGatewayDetails = await GatewayDetailsService.GatewayDetails_add_new_GatewayDetails(GatewayDetailsData);
            res.json(newGatewayDetails);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async GatewayDetails_edit(req, res) {
        const GatewayDetailsId = req.params.id;
        const updatedFields = req.body;
        try {
            console.log("test2");
            const updatedGatewayDetails = await GatewayDetailsService.GatewayDetails_edit(GatewayDetailsId, updatedFields);
            res.json(updatedGatewayDetails);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async GatewayDetails_delete(req, res) {
        const GatewayDetailsId = req.params.id;
        try {
            const deletedGatewayDetails = await GatewayDetailsService.GatewayDetails_delete(GatewayDetailsId);
            // res.json(deletedGatewayDetails);
            if (!deletedGatewayDetails) {
                return res.status(404).json({ error: 'GatewayDetails not found' });
            }
            res.json(deletedGatewayDetails);
        }
        catch (err) {
            // if (err.name === 'CastError') {
            //   res.status(400).json({ error: "Invalid GatewayDetails ID" });
            // } else {
            //   res.status(500).json({ error: "Failed to delete GatewayDetails" });
            // }
            res.status(500).json({ error: `Unable to delete GatewayDetails with id: ${GatewayDetailsId}` });
        }
    }
}
exports.gatewayDetailsController = gatewayDetailsController;
//# sourceMappingURL=GatewayDetailsController.js.map