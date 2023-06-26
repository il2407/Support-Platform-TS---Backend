"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onGoingService = void 0;
const OnGoingDBProvider_1 = require("../providers/OnGoingDBProvider");
class onGoingService {
    constructor() {
        this.OnGoingDBProvider = new OnGoingDBProvider_1.onGoingDBProvider();
    }
    async OnGoing_get_all() {
        try {
            const OnGoing = await this.OnGoingDBProvider.OnGoing_get_all();
            return OnGoing;
        }
        catch {
            throw new Error('User not exists!');
        }
    }
    async OnGoing_add_new_OnGoing(OnGoing) {
        const newOnGoing = await this.OnGoingDBProvider.OnGoing_add_new_OnGoing(OnGoing);
        if (!newOnGoing) {
            throw Error('Unable to add new OnGoing');
        }
        return newOnGoing;
    }
    async OnGoing_edit(OnGoingId, updatedFields) {
        try {
            const updatedOnGoing = await this.OnGoingDBProvider.OnGoing_edit(OnGoingId, updatedFields);
            if (!updatedOnGoing) {
                throw new Error('OnGoing not found');
            }
            return updatedOnGoing;
        }
        catch (err) {
            throw (err);
        }
    }
    async OnGoing_delete(OnGoingId) {
        try {
            const deletedOnGoing = await this.OnGoingDBProvider.OnGoing_delete(OnGoingId);
            if (!deletedOnGoing) {
                throw new Error('OnGoing not found');
            }
            return deletedOnGoing;
        }
        catch (err) {
            // return err;
            throw new Error('Unable to delete OnGoing');
        }
    }
}
exports.onGoingService = onGoingService;
//# sourceMappingURL=OnGoingService.js.map