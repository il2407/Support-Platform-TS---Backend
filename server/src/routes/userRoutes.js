"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = require("../controllers/UserController");
var userRouter = (0, express_1.Router)();
var userController = new UserController_1.UserController();
userRouter.get('/:id', userController.getUser.bind(userController));
exports.default = userRouter;
