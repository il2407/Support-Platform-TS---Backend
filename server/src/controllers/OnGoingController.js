"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onGoingController = void 0;
const OnGoingSchema_1 = require("../schemas/OnGoingSchema");
const mongoose_1 = require("mongoose");
const OnGoingService_1 = require("../services/OnGoingService");
const OnGoingService = new OnGoingService_1.onGoingService();
class onGoingController {
    constructor() {
        this.OnGoingService = new OnGoingService_1.onGoingService();
    }
    async OnGoing_get_all(req, res) {
        try {
            const OnGoing = await OnGoingService.OnGoing_get_all();
            res.json(OnGoing);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async OnGoing_get_by_id(req, res) {
        try {
            const ongoingId = req.params.id;
            const OnGoing = await OnGoingService.OnGoing_get_by_id(ongoingId);
            res.json(OnGoing);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async OnGoing_add_new_OnGoing(req, res) {
        const OnGoingData = new OnGoingSchema_1.default(); // Create an instance
        OnGoingData._id = new mongoose_1.default.Types.ObjectId();
        OnGoingData.reporter = req.body.reporter,
            OnGoingData.case = req.body.case,
            OnGoingData.eta = req.body.eta,
            OnGoingData.subject = req.body.subject,
            OnGoingData.task = req.body.task,
            OnGoingData.required_actions = req.body.required_actions,
            OnGoingData.contact = req.body.reporter,
            OnGoingData.ongoing_type = req.body.OnGoing_type;
        try {
            const newOnGoing = await OnGoingService.OnGoing_add_new_OnGoing(OnGoingData);
            res.json(newOnGoing);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async OnGoing_edit(req, res) {
        const OnGoingId = req.params.id;
        const updatedFields = req.body;
        try {
            console.log("test2");
            const updatedOnGoing = await OnGoingService.OnGoing_edit(OnGoingId, updatedFields);
            res.json(updatedOnGoing);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async OnGoing_delete(req, res) {
        const OnGoingId = req.params.id;
        try {
            const deletedOnGoing = await OnGoingService.OnGoing_delete(OnGoingId);
            // res.json(deletedOnGoing);
            if (!deletedOnGoing) {
                return res.status(404).json({ error: 'OnGoing not found' });
            }
            res.json(deletedOnGoing);
        }
        catch (err) {
            // if (err.name === 'CastError') {
            //   res.status(400).json({ error: "Invalid OnGoing ID" });
            // } else {
            //   res.status(500).json({ error: "Failed to delete OnGoing" });
            // }
            res.status(500).json({ error: `Unable to delete OnGoing with id: ${OnGoingId}` });
        }
    }
}
exports.onGoingController = onGoingController;
//# sourceMappingURL=OnGoingController.js.map