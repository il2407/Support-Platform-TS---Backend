"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsecaseController = void 0;
var UsecaseSchema_1 = require("../schemas/UsecaseSchema");
var mongoose_1 = require("mongoose");
var UsecaseService_1 = require("../services/UsecaseService");
var usecaseService = new UsecaseService_1.UsecaseService();
var UsecaseController = /** @class */ (function () {
    function UsecaseController() {
        this.usecaseService = new UsecaseService_1.UsecaseService();
    }
    UsecaseController.prototype.usecase_get_all = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var usecases, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, usecaseService.usecase_get_all()];
                    case 1:
                        usecases = _a.sent();
                        res.json(usecases);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.status(500).json({ error: error_1 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsecaseController.prototype.usecase_add_new_usecase = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var usecaseData, newUsecase, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usecaseData = new UsecaseSchema_1.default();
                        usecaseData._id = new mongoose_1.default.Types.ObjectId();
                        usecaseData.subject = req.body.subject;
                        usecaseData.description = req.body.description;
                        usecaseData.action = req.body.action;
                        usecaseData.salesforce_action = req.body.salesforce_action;
                        usecaseData.notes = req.body.notes;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, usecaseService.usecase_add_new_usecase(usecaseData)];
                    case 2:
                        newUsecase = _a.sent();
                        res.json(newUsecase);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        res.status(500).json({ error: err_1.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UsecaseController.prototype.usecase_edit = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var usecaseId, updatedFields, updatedUsecase, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usecaseId = req.params.id;
                        updatedFields = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, usecaseService.usecase_edit(usecaseId, updatedFields)];
                    case 2:
                        updatedUsecase = _a.sent();
                        res.json(updatedUsecase);
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        res.status(500).json({ error: err_2.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UsecaseController.prototype.usecase_delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var usecaseId, deletedUsecase, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usecaseId = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, usecaseService.usecase_delete(usecaseId)];
                    case 2:
                        deletedUsecase = _a.sent();
                        // res.json(deletedUsecase);
                        if (!deletedUsecase) {
                            return [2 /*return*/, res.status(404).json({ error: 'Usecase not found' })];
                        }
                        res.json(deletedUsecase);
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        // if (err.name === 'CastError') {
                        //   res.status(400).json({ error: "Invalid usecase ID" });
                        // } else {
                        //   res.status(500).json({ error: "Failed to delete usecase" });
                        // }
                        res.status(500).json({ error: "Unable to delete usecase with id: ".concat(usecaseId) });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UsecaseController;
}());
exports.UsecaseController = UsecaseController;
