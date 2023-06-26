"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsecaseController_1 = require("../controllers/UsecaseController");
const usecaseRouter = (0, express_1.Router)();
const usecaseController = new UsecaseController_1.UsecaseController();
// Get All usecases
// Method: GET
usecaseRouter.get("/", usecaseController.usecase_get_all);
// Get usecase by id
// Method: GET
usecaseRouter.get("/:id", usecaseController.usecase_get_by_id);
// // Add New usecase
// // Method: POST
usecaseRouter.post('/', usecaseController.usecase_add_new_usecase);
// // Update Existing usecase
// // Method: PUT
usecaseRouter.put("/:id", usecaseController.usecase_edit);
// // Delete Existing usecase
// // Method: DELETE
usecaseRouter.delete("/:id", usecaseController.usecase_delete);
exports.default = usecaseRouter;
//# sourceMappingURL=usecaseRoutes.js.map