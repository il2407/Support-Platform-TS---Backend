import { Router } from 'express';
import { gatewayDetailsController } from '../controllers/GatewayDetailsController';

const gatewayDetailsRouter = Router();
const GatewayDetailsController = new gatewayDetailsController();

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



export default gatewayDetailsRouter;
