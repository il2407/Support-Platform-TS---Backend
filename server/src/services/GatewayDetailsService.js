"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gatewayDetailsService = void 0;
const GatewayDetailsDBProvider_1 = require("../providers/GatewayDetailsDBProvider");
class gatewayDetailsService {
    constructor() {
        this.GatewayDetailsDBProvider = new GatewayDetailsDBProvider_1.gatewayDetailsDBProvider();
    }
    async GatewayDetails_get_all() {
        try {
            const GatewayDetails = await this.GatewayDetailsDBProvider.GatewayDetails_get_all();
            return GatewayDetails;
        }
        catch {
            throw new Error('User not exists!');
        }
    }
    async GatewayDetails_add_new_GatewayDetails(GatewayDetails) {
        const newGatewayDetails = await this.GatewayDetailsDBProvider.GatewayDetails_add_new_GatewayDetails(GatewayDetails);
        if (!newGatewayDetails) {
            throw Error('Unable to add new GatewayDetails');
        }
        return newGatewayDetails;
    }
    async GatewayDetails_edit(GatewayDetailsId, updatedFields) {
        try {
            const updatedGatewayDetails = await this.GatewayDetailsDBProvider.GatewayDetails_edit(GatewayDetailsId, updatedFields);
            if (!updatedGatewayDetails) {
                throw new Error('GatewayDetails not found');
            }
            return updatedGatewayDetails;
        }
        catch (err) {
            throw (err);
        }
    }
    async GatewayDetails_delete(GatewayDetailsId) {
        try {
            const deletedGatewayDetails = await this.GatewayDetailsDBProvider.GatewayDetails_delete(GatewayDetailsId);
            if (!deletedGatewayDetails) {
                throw new Error('GatewayDetails not found');
            }
            return deletedGatewayDetails;
        }
        catch (err) {
            // return err;
            throw new Error('Unable to delete GatewayDetails');
        }
    }
}
exports.gatewayDetailsService = gatewayDetailsService;
//# sourceMappingURL=GatewayDetailsService.js.map