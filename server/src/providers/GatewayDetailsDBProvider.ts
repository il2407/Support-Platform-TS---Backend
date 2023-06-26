import GatewayDetails, { GatewayDetailsDocument } from '../schemas/GatewayDetailsSchema';


export class gatewayDetailsDBProvider {

    constructor() { }

    public async GatewayDetails_get_all(): Promise<GatewayDetailsDocument[] | null> {
        try {
            const GatewayDetailss = await GatewayDetails.find().exec();
            return GatewayDetailss;
        } catch (error) {
            console.error('Error while retrieving use cases:', error);
            return null;
        }
    }

    public async GatewayDetails_add_new_GatewayDetails(GatewayDetails: GatewayDetailsDocument): Promise<GatewayDetailsDocument | null> {
        try {
            const newGatewayDetails = await GatewayDetails.save();
            return newGatewayDetails;
        } catch (err) {
            return err;
        }
    }

    public GatewayDetails_edit(id: string, updatedData: Partial<GatewayDetailsDocument>): Promise<GatewayDetailsDocument> {
        return GatewayDetails.findByIdAndUpdate(id, updatedData, { new: true }).exec();
    }

    public async GatewayDetails_delete(id: string): Promise<GatewayDetailsDocument> {
        try {
            const deletedGatewayDetails = await GatewayDetails.findOneAndDelete({ _id: id }).exec()
            return deletedGatewayDetails;
        } catch (err) {
            // return err;
            return null;
        }
    }
}