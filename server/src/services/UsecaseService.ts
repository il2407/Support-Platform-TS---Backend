import Usecase, { UsecaseDocument } from '../schemas/UsecaseSchema';
import { UsecaseDBProvider } from '../providers/usecaseDBProvider';

export class UsecaseService {
    private usecaseDBProvider: UsecaseDBProvider;

    constructor() {
        this.usecaseDBProvider = new UsecaseDBProvider();
    }


    public async usecase_get_all(): Promise<UsecaseDocument[] | null> {
        try {
            const usecase = await this.usecaseDBProvider.usecase_get_all();
            return usecase

        } catch {
            throw new Error('User not exists!')
        }
    }
    public async usecase_add_new_usecase(usecase: UsecaseDocument): Promise<UsecaseDocument | null> {
        const newUsecase = await this.usecaseDBProvider.usecase_add_new_usecase(usecase);
        if (!newUsecase) {
            throw Error('Unable to add new usecase')
        }
        return newUsecase;
    }

    public async usecase_edit(usecaseId: string, updatedFields: Partial<UsecaseDocument>): Promise<UsecaseDocument | null> {
        try{
            const updatedUsecase = await this.usecaseDBProvider.usecase_edit(usecaseId, updatedFields);
            if (!updatedUsecase) {
                throw new Error('Usecase not found');
            }
            return updatedUsecase;
        }catch (err) {
            throw(err)
        }
    }

    public async usecase_delete(usecaseId: string): Promise<UsecaseDocument | null> {
        try {
            const deletedUsecase = await this.usecaseDBProvider.usecase_delete(usecaseId);
            if (!deletedUsecase) {
                throw new Error('Usecase not found');
            }
            return deletedUsecase;
        } catch (err) {
            // return err;
            throw new Error('Unable to delete usecase');
        }
    }
}


