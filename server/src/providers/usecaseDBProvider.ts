import Usecase, { UsecaseDocument } from '../schemas/UsecaseSchema';


export class UsecaseDBProvider {

    constructor() { }

    public async usecase_get_all(): Promise<UsecaseDocument[] | null> {
        try {
            const usecases = await Usecase.find().exec();
            return usecases;
        } catch (err) {
            console.error('Error while retrieving use cases:', err);
            return err.message;
        }
    }

    public async usecase_get_by_id(usecaesId: string): Promise<UsecaseDocument | null> {
        try {
            const usecase = await Usecase.findById(usecaesId).exec();
            return usecase;
        } catch (err) {
            console.error('Error while retrieving use cases:', err);
            return err.message;
        }
    }

    public async usecase_add_new_usecase(usecase: UsecaseDocument): Promise<UsecaseDocument | null> {
        try {
            const newUsecase = await usecase.save();
            return newUsecase;
        } catch (err) {
            return err.message;
        }
    }

    public async usecase_edit(id: string, updatedData: Partial<UsecaseDocument>): Promise<UsecaseDocument> {
        try{
            const usecaseEdit = await Usecase.findByIdAndUpdate(id, updatedData, { new: true }).exec();
            return usecaseEdit;
        }catch(err) {
            return err.message;
        }
    }

    public async usecase_delete(id: string): Promise<UsecaseDocument> {
        try {
            const deletedUsecase = await Usecase.findOneAndDelete({ _id: id }).exec()
            return deletedUsecase;
        } catch (err) {
            return err.message;
        }
    }
}