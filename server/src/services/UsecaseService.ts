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
            throw new Error('Users not exists!')
        }
    }

    public async usecase_get_by_id(usecaseId: string): Promise<UsecaseDocument | null> {
        try {
            const usecase = await this.usecaseDBProvider.usecase_get_by_id(usecaseId);
            if (!usecase) {
                console.log('error oneeeeeeee')
                throw new Error(`id:${usecase} not exist`)
            }
            return usecase
        } catch {
            // return err
            throw new Error('Could not find usecase!')
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
        try {
            const updatedUsecase = await this.usecaseDBProvider.usecase_edit(usecaseId, updatedFields);
            if (!updatedUsecase) {
                throw new Error('Unable to update usecase fields');
            }
            return updatedUsecase;
        } catch (err) {
            throw new Error(`Failed to edit usecase with id: ${usecaseId}`);

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
            throw new Error('Unable to delete usecase');
        }
    }
}


