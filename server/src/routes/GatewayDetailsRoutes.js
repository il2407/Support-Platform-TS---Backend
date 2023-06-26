"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GatewayDetailsController_1 = require("../controllers/GatewayDetailsController");
const gatewayDetailsRouter = (0, express_1.Router)();
const GatewayDetailsController = new GatewayDetailsController_1.gatewayDetailsController();
// Get All OnGoing
// Method: GET
gatewayDetailsRouter.get("/", GatewayDetailsController.GatewayDetails_get_all);
// // Add New GatewayDetails
// // Method: POST
gatewayDetailsRouter.post('/', GatewayDetailsController.GatewayDetails_add_new_GatewayDetails);
// // Update Existing GatewayDetails
// // Method: PUT
gatewayDetailsRouter.put("/:id", GatewayDetailsController.GatewayDetails_edit);
// // Delete Existing GatewayDetails
// // Method: DELETE
gatewayDetailsRouter.delete("/:id", GatewayDetailsController.GatewayDetails_delete);
exports.default = gatewayDetailsRouter;
//# sourceMappingURL=GatewayDetailsRoutes.js.map