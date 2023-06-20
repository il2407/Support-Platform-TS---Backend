"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsecaseDBProvider = void 0;
const UsecaseSchema_1 = require("../schemas/UsecaseSchema");
class UsecaseDBProvider {
    constructor() { }
    async usecase_get_all() {
        try {
            const usecases = await UsecaseSchema_1.default.find().exec();
            return usecases;
        }
        catch (error) {
            console.error('Error while retrieving use cases:', error);
            return null;
        }
    }
    async usecase_add_new_usecase(usecase) {
        try {
            const newUsecase = await usecase.save();
            return newUsecase;
        }
        catch (err) {
            return err;
        }
    }
    usecase_edit(id, updatedData) {
        return UsecaseSchema_1.default.findByIdAndUpdate(id, updatedData, { new: true }).exec();
    }
    async usecase_delete(id) {
        try {
            const deletedUsecase = await UsecaseSchema_1.default.findOneAndDelete({ _id: id }).exec();
            return deletedUsecase;
        }
        catch (err) {
            // return err;
            return null;
        }
    }
}
exports.UsecaseDBProvider = UsecaseDBProvider;
//# sourceMappingURL=usecaseDBProvider.js.map