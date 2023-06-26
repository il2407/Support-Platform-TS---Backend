"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsecaseService = void 0;
const usecaseDBProvider_1 = require("../providers/usecaseDBProvider");
class UsecaseService {
    constructor() {
        this.usecaseDBProvider = new usecaseDBProvider_1.UsecaseDBProvider();
    }
    async usecase_get_all() {
        try {
            const usecase = await this.usecaseDBProvider.usecase_get_all();
            return usecase;
        }
        catch {
            throw new Error('Users not exists!');
        }
    }
    async usecase_get_by_id(usecaseId) {
        try {
            const usecase = await this.usecaseDBProvider.usecase_get_by_id(usecaseId);
            if (!usecase) {
                console.log('error oneeeeeeee');
                throw new Error(`id:${usecase} not exist`);
            }
            return usecase;
        }
        catch {
            // return err
            throw new Error('Could not find usecase!');
        }
    }
    async usecase_add_new_usecase(usecase) {
        const newUsecase = await this.usecaseDBProvider.usecase_add_new_usecase(usecase);
        if (!newUsecase) {
            throw Error('Unable to add new usecase');
        }
        return newUsecase;
    }
    async usecase_edit(usecaseId, updatedFields) {
        try {
            const updatedUsecase = await this.usecaseDBProvider.usecase_edit(usecaseId, updatedFields);
            if (!updatedUsecase) {
                throw new Error('Unable to update usecase fields');
            }
            return updatedUsecase;
        }
        catch (err) {
            throw new Error(`Failed to edit usecase with id: ${usecaseId}`);
        }
    }
    async usecase_delete(usecaseId) {
        try {
            const deletedUsecase = await this.usecaseDBProvider.usecase_delete(usecaseId);
            if (!deletedUsecase) {
                throw new Error('Usecase not found');
            }
            return deletedUsecase;
        }
        catch (err) {
            throw new Error('Unable to delete usecase');
        }
    }
}
exports.UsecaseService = UsecaseService;
//# sourceMappingURL=UsecaseService.js.map