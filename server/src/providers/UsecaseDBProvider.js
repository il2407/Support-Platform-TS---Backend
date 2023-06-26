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
        catch (err) {
            console.error('Error while retrieving use cases:', err);
            return err.message;
        }
    }
    async usecase_get_by_id(usecaesId) {
        try {
            const usecase = await UsecaseSchema_1.default.findById(usecaesId).exec();
            return usecase;
        }
        catch (err) {
            console.error('Error while retrieving use cases:', err);
            return err.message;
        }
    }
    async usecase_add_new_usecase(usecase) {
        try {
            const newUsecase = await usecase.save();
            return newUsecase;
        }
        catch (err) {
            return err.message;
        }
    }
    async usecase_edit(id, updatedData) {
        try {
            const usecaseEdit = await UsecaseSchema_1.default.findByIdAndUpdate(id, updatedData, { new: true }).exec();
            return usecaseEdit;
        }
        catch (err) {
            return err.message;
        }
    }
    async usecase_delete(id) {
        try {
            const deletedUsecase = await UsecaseSchema_1.default.findOneAndDelete({ _id: id }).exec();
            return deletedUsecase;
        }
        catch (err) {
            return err.message;
        }
    }
}
exports.UsecaseDBProvider = UsecaseDBProvider;
//# sourceMappingURL=usecaseDBProvider.js.map