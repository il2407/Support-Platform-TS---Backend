"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gatewayDetailsDBProvider = void 0;
const GatewayDetailsSchema_1 = require("../schemas/GatewayDetailsSchema");
class gatewayDetailsDBProvider {
    constructor() { }
    async GatewayDetails_get_all() {
        try {
            const GatewayDetailss = await GatewayDetailsSchema_1.default.find().exec();
            return GatewayDetailss;
        }
        catch (error) {
            console.error('Error while retrieving use cases:', error);
            return null;
        }
    }
    async GatewayDetails_add_new_GatewayDetails(GatewayDetails) {
        try {
            const newGatewayDetails = await GatewayDetails.save();
            return newGatewayDetails;
        }
        catch (err) {
            return err;
        }
    }
    GatewayDetails_edit(id, updatedData) {
        return GatewayDetailsSchema_1.default.findByIdAndUpdate(id, updatedData, { new: true }).exec();
    }
    async GatewayDetails_delete(id) {
        try {
            const deletedGatewayDetails = await GatewayDetailsSchema_1.default.findOneAndDelete({ _id: id }).exec();
            return deletedGatewayDetails;
        }
        catch (err) {
            // return err;
            return null;
        }
    }
}
exports.gatewayDetailsDBProvider = gatewayDetailsDBProvider;
//# sourceMappingURL=GatewayDetailsDBProvider.js.map