"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDBProvider = void 0;
var UserSchema_1 = require("../schemas/UserSchema");
var UserDBProvider = /** @class */ (function () {
    function UserDBProvider() {
    }
    UserDBProvider.prototype.getUser = function (userId) {
        return UserSchema_1.default.findById(userId).exec();
    };
    return UserDBProvider;
}());
exports.UserDBProvider = UserDBProvider;
