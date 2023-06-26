import { Router } from 'express';
import { onGoingController } from '../controllers/OnGoingController';

const onGoingRouter = Router();
const OnGoingController = new onGoingController();

// Get All OnGoing
// Method: GET
onGoingRouter.get("/", OnGoingController.OnGoing_get_all);

// // Add New OnGoing
// // Method: POST
onGoingRouter.post('/', OnGoingController.OnGoing_add_new_OnGoing);

// // Update Existing OnGoing
// // Method: PUT
onGoingRouter.put("/:id", OnGoingController.OnGoing_edit);



// // Delete Existing OnGoing
// // Method: DELETE
onGoingRouter.delete("/:id", OnGoingController.OnGoing_delete);



export default onGoingRouter;
