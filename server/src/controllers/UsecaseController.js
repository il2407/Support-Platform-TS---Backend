"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsecaseController = void 0;
const UsecaseSchema_1 = require("../schemas/UsecaseSchema");
const mongoose_1 = require("mongoose");
const UsecaseService_1 = require("../services/UsecaseService");
const usecaseService = new UsecaseService_1.UsecaseService();
class UsecaseController {
    constructor() {
        this.usecaseService = new UsecaseService_1.UsecaseService();
    }
    async usecase_get_all(req, res) {
        try {
            const usecases = await usecaseService.usecase_get_all();
            res.json(usecases);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async usecase_add_new_usecase(req, res) {
        const usecaseData = new UsecaseSchema_1.default(); // Create an instance
        usecaseData._id = new mongoose_1.default.Types.ObjectId();
        usecaseData.subject = req.body.subject;
        usecaseData.description = req.body.description;
        usecaseData.action = req.body.action;
        usecaseData.salesforce_action = req.body.salesforce_action;
        usecaseData.notes = req.body.notes;
        try {
            const newUsecase = await usecaseService.usecase_add_new_usecase(usecaseData);
            res.json(newUsecase);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async usecase_edit(req, res) {
        const usecaseId = req.params.id;
        const updatedFields = req.body;
        try {
            const updatedUsecase = await usecaseService.usecase_edit(usecaseId, updatedFields);
            res.json(updatedUsecase);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async usecase_delete(req, res) {
        const usecaseId = req.params.id;
        try {
            const deletedUsecase = await usecaseService.usecase_delete(usecaseId);
            // res.json(deletedUsecase);
            if (!deletedUsecase) {
                return res.status(404).json({ error: 'Usecase not found' });
            }
            res.json(deletedUsecase);
        }
        catch (err) {
            // if (err.name === 'CastError') {
            //   res.status(400).json({ error: "Invalid usecase ID" });
            // } else {
            //   res.status(500).json({ error: "Failed to delete usecase" });
            // }
            res.status(500).json({ error: `Unable to delete usecase with id: ${usecaseId}` });
        }
    }
}
exports.UsecaseController = UsecaseController;
//# sourceMappingURL=UsecaseController.js.map