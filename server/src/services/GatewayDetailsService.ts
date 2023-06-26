import GatewayDetails, { GatewayDetailsDocument } from '../schemas/GatewayDetailsSchema';
import { gatewayDetailsDBProvider } from '../providers/GatewayDetailsDBProvider';

export class gatewayDetailsService {
    private GatewayDetailsDBProvider: gatewayDetailsDBProvider;

    constructor() {
        this.GatewayDetailsDBProvider = new gatewayDetailsDBProvider();
    }


    public async GatewayDetails_get_all(): Promise<GatewayDetailsDocument[] | null> {
        try {
            const GatewayDetails = await this.GatewayDetailsDBProvider.GatewayDetails_get_all();
            return GatewayDetails

        } catch {
            throw new Error('User not exists!')
        }
    }
    public async GatewayDetails_add_new_GatewayDetails(GatewayDetails: GatewayDetailsDocument): Promise<GatewayDetailsDocument | null> {
        const newGatewayDetails = await this.GatewayDetailsDBProvider.GatewayDetails_add_new_GatewayDetails(GatewayDetails);
        if (!newGatewayDetails) {
            throw Error('Unable to add new GatewayDetails')
        }
        return newGatewayDetails;
    }

    public async GatewayDetails_edit(GatewayDetailsId: string, updatedFields: Partial<GatewayDetailsDocument>): Promise<GatewayDetailsDocument | null> {
        try{
            const updatedGatewayDetails = await this.GatewayDetailsDBProvider.GatewayDetails_edit(GatewayDetailsId, updatedFields);
            if (!updatedGatewayDetails) {
                throw new Error('GatewayDetails not found');
            }
            return updatedGatewayDetails;
        }catch (err) {
            throw(err)
        }
    }

    public async GatewayDetails_delete(GatewayDetailsId: string): Promise<GatewayDetailsDocument | null> {
        try {
            const deletedGatewayDetails = await this.GatewayDetailsDBProvider.GatewayDetails_delete(GatewayDetailsId);
            if (!deletedGatewayDetails) {
                throw new Error('GatewayDetails not found');
            }
            return deletedGatewayDetails;
        } catch (err) {
            // return err;
            throw new Error('Unable to delete GatewayDetails');
        }
    }
}


