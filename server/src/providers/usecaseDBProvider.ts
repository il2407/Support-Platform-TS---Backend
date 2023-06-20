import Usecase, { UsecaseDocument } from '../schemas/UsecaseSchema';


export class UsecaseDBProvider {

    constructor() { }

    public async usecase_get_all(): Promise<UsecaseDocument[] | null> {
        try {
            const usecases = await Usecase.find().exec();
            return usecases;
        } catch (error) {
            console.error('Error while retrieving use cases:', error);
            return null;
        }
    }

    public async usecase_add_new_usecase(usecase: UsecaseDocument): Promise<UsecaseDocument | null> {
        try {
            const newUsecase = await usecase.save();
            return newUsecase;
        } catch (err) {
            return err;
        }
    }

    public usecase_edit(id: string, updatedData: Partial<UsecaseDocument>): Promise<UsecaseDocument> {
        return Usecase.findByIdAndUpdate(id, updatedData, { new: true }).exec();
    }

    public async usecase_delete(id: string): Promise<UsecaseDocument> {
        try {
            const deletedUsecase = await Usecase.findOneAndDelete({ _id: id }).exec()
            return deletedUsecase;
        } catch (err) {
            // return err;
            return null;
        }
    }
}