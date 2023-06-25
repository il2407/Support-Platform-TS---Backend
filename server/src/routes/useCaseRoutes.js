"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UsecaseController_1 = require("../controllers/UsecaseController");
var usecaseRouter = (0, express_1.Router)();
var usecaseController = new UsecaseController_1.UsecaseController();
// Get All usecases
// Method: GET
usecaseRouter.get("/", usecaseController.usecase_get_all);
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
