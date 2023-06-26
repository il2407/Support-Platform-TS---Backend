import OnGoing, { OnGoingDocument } from '../schemas/OnGoingSchema';
import { onGoingDBProvider } from '../providers/OnGoingDBProvider';

export class onGoingService {
    private OnGoingDBProvider: onGoingDBProvider;

    constructor() {
        this.OnGoingDBProvider = new onGoingDBProvider();
    }


    public async OnGoing_get_all(): Promise<OnGoingDocument[] | null> {
        try {
            const OnGoing = await this.OnGoingDBProvider.OnGoing_get_all();
            return OnGoing

        } catch {
            throw new Error('User not exists!')
        }
    }

    public async OnGoing_get_by_id(ongoingId: string): Promise<OnGoingDocument | null> {
        try {
            const OnGoing = await this.OnGoingDBProvider.OnGoing_get_by_id(ongoingId);
            return OnGoing

        } catch {
            throw new Error('User not exists!')
        }
    }

    public async OnGoing_add_new_OnGoing(OnGoing: OnGoingDocument): Promise<OnGoingDocument | null> {
        const newOnGoing = await this.OnGoingDBProvider.OnGoing_add_new_OnGoing(OnGoing);
        if (!newOnGoing) {
            throw Error('Unable to add new OnGoing')
        }
        return newOnGoing;
    }

    public async OnGoing_edit(OnGoingId: string, updatedFields: Partial<OnGoingDocument>): Promise<OnGoingDocument | null> {
        try{
            const updatedOnGoing = await this.OnGoingDBProvider.OnGoing_edit(OnGoingId, updatedFields);
            if (!updatedOnGoing) {
                throw new Error('OnGoing not found');
            }
            return updatedOnGoing;
        }catch (err) {
            throw(err)
        }
    }

    public async OnGoing_delete(OnGoingId: string): Promise<OnGoingDocument | null> {
        try {
            const deletedOnGoing = await this.OnGoingDBProvider.OnGoing_delete(OnGoingId);
            if (!deletedOnGoing) {
                throw new Error('OnGoing not found');
            }
            return deletedOnGoing;
        } catch (err) {
            // return err;
            throw new Error('Unable to delete OnGoing');
        }
    }
}


