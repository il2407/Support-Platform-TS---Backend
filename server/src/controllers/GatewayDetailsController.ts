import GatewayDetailsModel, { GatewayDetailsDocument } from '../schemas/GatewayDetailsSchema';
import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { gatewayDetailsService } from '../services/GatewayDetailsService';

const GatewayDetailsService = new gatewayDetailsService  ();

export class gatewayDetailsController {
  private GatewayDetailsService: gatewayDetailsService;

  constructor() {
    this.GatewayDetailsService = new gatewayDetailsService();
  }

  public async GatewayDetails_get_all(req: Request, res: Response): Promise<void> {
    try {
      console.log("test")
      const GatewayDetails = await GatewayDetailsService.GatewayDetails_get_all();
      res.json(GatewayDetails);
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  public async GatewayDetails_add_new_GatewayDetails(req: Request, res: Response): Promise<void> {
    const GatewayDetailsData: GatewayDetailsDocument = new GatewayDetailsModel(); // Create an instance
    GatewayDetailsData._id = new mongoose.Types.ObjectId();
    GatewayDetailsData.gateway_name= req.body.gateway_name,
    GatewayDetailsData.alternative_channels= req.body.alternative_channels,
    GatewayDetailsData.escalation_path= req.body.escalation_path,
    GatewayDetailsData. gw_requirements= req.body. gw_requirements,
    GatewayDetailsData.required_fields_examples= req.body.required_fields_examples,
    GatewayDetailsData.phone_number= req.body.phone_number,
    GatewayDetailsData.region= req.body.region,
    GatewayDetailsData.notes= req.body.notes
    GatewayDetailsData.network= req.body.network



    try {
      const newGatewayDetails = await GatewayDetailsService.GatewayDetails_add_new_GatewayDetails(GatewayDetailsData)
      res.json(newGatewayDetails)

    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }


  public async GatewayDetails_edit(req: Request, res: Response): Promise<void> {
    const GatewayDetailsId: string = req.params.id;
    const updatedFields = req.body;

    try {
      console.log("test2")
      const updatedGatewayDetails = await GatewayDetailsService.GatewayDetails_edit(GatewayDetailsId, updatedFields);
      res.json(updatedGatewayDetails);
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  public async GatewayDetails_delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
    const GatewayDetailsId: string = req.params.id;

    try {
      const deletedGatewayDetails = await GatewayDetailsService.GatewayDetails_delete(GatewayDetailsId);
      // res.json(deletedGatewayDetails);
      if (!deletedGatewayDetails) {
        return res.status(404).json({ error: 'GatewayDetails not found' });
      }
      res.json(deletedGatewayDetails);
    }
    catch (err) {
      // if (err.name === 'CastError') {
      //   res.status(400).json({ error: "Invalid GatewayDetails ID" });
      // } else {
      //   res.status(500).json({ error: "Failed to delete GatewayDetails" });
      // }
      res.status(500).json({ error: `Unable to delete GatewayDetails with id: ${GatewayDetailsId}` });

    }
  }
}

