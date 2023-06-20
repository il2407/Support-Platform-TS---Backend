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
            throw new Error('User not exists!');
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
                throw new Error('Usecase not found');
            }
            return updatedUsecase;
        }
        catch (err) {
            throw (err);
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
            // return err;
            throw new Error('Unable to delete usecase');
        }
    }
}
exports.UsecaseService = UsecaseService;
//# sourceMappingURL=UsecaseService.js.map