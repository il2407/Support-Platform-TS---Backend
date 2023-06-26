import OnGoing, { OnGoingDocument } from '../schemas/OnGoingSchema';


export class onGoingDBProvider {

    constructor() { }

    public async OnGoing_get_all(): Promise<OnGoingDocument[] | null> {
        try {
            const OnGoings = await OnGoing.find().exec();
            return OnGoings;
        } catch (error) {
            console.error('Error while retrieving use cases:', error);
            return null;
        }
    }

    public async OnGoing_get_by_id(ongoingId: string): Promise<OnGoingDocument | null> {
        try {
            const OnGoings = await OnGoing.findById(ongoingId).exec();
            return OnGoings;
        } catch (error) {
            console.error('Error while retrieving use cases:', error);
            return null;
        }
    }

    public async OnGoing_add_new_OnGoing(OnGoing: OnGoingDocument): Promise<OnGoingDocument | null> {
        try {
            const newOnGoing = await OnGoing.save();
            return newOnGoing;
        } catch (err) {
            return err;
        }
    }

    public OnGoing_edit(id: string, updatedData: Partial<OnGoingDocument>): Promise<OnGoingDocument> {
        return OnGoing.findByIdAndUpdate(id, updatedData, { new: true }).exec();
    }

    public async OnGoing_delete(id: string): Promise<OnGoingDocument> {
        try {
            const deletedOnGoing = await OnGoing.findOneAndDelete({ _id: id }).exec()
            return deletedOnGoing;
        } catch (err) {
            // return err;
            return null;
        }
    }
}