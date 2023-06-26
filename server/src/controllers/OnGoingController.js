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
exports.onGoingController = void 0;
var OnGoingSchema_1 = require("../schemas/OnGoingSchema");
var mongoose_1 = require("mongoose");
var OnGoingService_1 = require("../services/OnGoingService");
var OnGoingService = new OnGoingService_1.onGoingService();
var onGoingController = /** @class */ (function () {
    function onGoingController() {
        this.OnGoingService = new OnGoingService_1.onGoingService();
    }
    onGoingController.prototype.OnGoing_get_all = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var OnGoing, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("test");
                        return [4 /*yield*/, OnGoingService.OnGoing_get_all()];
                    case 1:
                        OnGoing = _a.sent();
                        res.json(OnGoing);
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
    onGoingController.prototype.OnGoing_add_new_OnGoing = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var OnGoingData, newOnGoing, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        OnGoingData = new OnGoingSchema_1.default();
                        OnGoingData._id = new mongoose_1.default.Types.ObjectId();
                        OnGoingData.reporter = req.body.reporter,
                            OnGoingData.case = req.body.case,
                            OnGoingData.eta = req.body.eta,
                            OnGoingData.subject = req.body.subject,
                            OnGoingData.task = req.body.task,
                            OnGoingData.required_actions = req.body.required_actions,
                            OnGoingData.contact = req.body.reporter,
                            OnGoingData.ongoing_type = req.body.OnGoing_type;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, OnGoingService.OnGoing_add_new_OnGoing(OnGoingData)];
                    case 2:
                        newOnGoing = _a.sent();
                        res.json(newOnGoing);
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
    onGoingController.prototype.OnGoing_edit = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var OnGoingId, updatedFields, updatedOnGoing, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        OnGoingId = req.params.id;
                        updatedFields = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        console.log("test2");
                        return [4 /*yield*/, OnGoingService.OnGoing_edit(OnGoingId, updatedFields)];
                    case 2:
                        updatedOnGoing = _a.sent();
                        res.json(updatedOnGoing);
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
    onGoingController.prototype.OnGoing_delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var OnGoingId, deletedOnGoing, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        OnGoingId = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, OnGoingService.OnGoing_delete(OnGoingId)];
                    case 2:
                        deletedOnGoing = _a.sent();
                        // res.json(deletedOnGoing);
                        if (!deletedOnGoing) {
                            return [2 /*return*/, res.status(404).json({ error: 'OnGoing not found' })];
                        }
                        res.json(deletedOnGoing);
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        // if (err.name === 'CastError') {
                        //   res.status(400).json({ error: "Invalid OnGoing ID" });
                        // } else {
                        //   res.status(500).json({ error: "Failed to delete OnGoing" });
                        // }
                        res.status(500).json({ error: "Unable to delete OnGoing with id: ".concat(OnGoingId) });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return onGoingController;
}());
exports.onGoingController = onGoingController;
