"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onGoingDBProvider = void 0;
const OnGoingSchema_1 = require("../schemas/OnGoingSchema");
class onGoingDBProvider {
    constructor() { }
    async OnGoing_get_all() {
        try {
            const OnGoings = await OnGoingSchema_1.default.find().exec();
            return OnGoings;
        }
        catch (error) {
            console.error('Error while retrieving use cases:', error);
            return null;
        }
    }
    async OnGoing_add_new_OnGoing(OnGoing) {
        try {
            const newOnGoing = await OnGoing.save();
            return newOnGoing;
        }
        catch (err) {
            return err;
        }
    }
    OnGoing_edit(id, updatedData) {
        return OnGoingSchema_1.default.findByIdAndUpdate(id, updatedData, { new: true }).exec();
    }
    async OnGoing_delete(id) {
        try {
            const deletedOnGoing = await OnGoingSchema_1.default.findOneAndDelete({ _id: id }).exec();
            return deletedOnGoing;
        }
        catch (err) {
            // return err;
            return null;
        }
    }
}
exports.onGoingDBProvider = onGoingDBProvider;
//# sourceMappingURL=OnGoingDBProvider.js.map