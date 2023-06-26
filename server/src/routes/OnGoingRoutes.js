"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var OnGoingController_1 = require("../controllers/OnGoingController");
var onGoingRouter = (0, express_1.Router)();
var OnGoingController = new OnGoingController_1.onGoingController();
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
exports.default = onGoingRouter;