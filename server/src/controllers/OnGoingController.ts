import OnGoingModel, { OnGoingDocument } from '../schemas/OnGoingSchema';
import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { onGoingService } from '../services/OnGoingService';

const OnGoingService = new onGoingService  ();

export class onGoingController {
  private OnGoingService: onGoingService;

  constructor() {
    this.OnGoingService = new onGoingService();
  }

  public async OnGoing_get_all(req: Request, res: Response): Promise<void> {
    try {
      const OnGoing = await OnGoingService.OnGoing_get_all();
      res.json(OnGoing);
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  public async OnGoing_get_by_id(req: Request, res: Response): Promise<void> {
    try {
      const ongoingId: string = req.params.id;
      const OnGoing = await OnGoingService.OnGoing_get_by_id(ongoingId);
      res.json(OnGoing);
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  public async OnGoing_add_new_OnGoing(req: Request, res: Response): Promise<void> {
    const OnGoingData: OnGoingDocument = new OnGoingModel(); // Create an instance
    OnGoingData._id = new mongoose.Types.ObjectId();
    OnGoingData.reporter= req.body.reporter,
    OnGoingData.case= req.body.case,
    OnGoingData.eta= req.body.eta,
    OnGoingData.subject= req.body.subject,
    OnGoingData.task= req.body.task,
    OnGoingData.required_actions= req.body.required_actions,
    OnGoingData.contact= req.body.reporter,
    OnGoingData.ongoing_type= req.body.OnGoing_type

    try {
      const newOnGoing = await OnGoingService.OnGoing_add_new_OnGoing(OnGoingData)
      res.json(newOnGoing)

    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }


  public async OnGoing_edit(req: Request, res: Response): Promise<void> {
    const OnGoingId: string = req.params.id;
    const updatedFields = req.body;

    try {
      console.log("test2")
      const updatedOnGoing = await OnGoingService.OnGoing_edit(OnGoingId, updatedFields);
      res.json(updatedOnGoing);
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  public async OnGoing_delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
    const OnGoingId: string = req.params.id;

    try {
      const deletedOnGoing = await OnGoingService.OnGoing_delete(OnGoingId);
      // res.json(deletedOnGoing);
      if (!deletedOnGoing) {
        return res.status(404).json({ error: 'OnGoing not found' });
      }
      res.json(deletedOnGoing);
    }
    catch (err) {
      // if (err.name === 'CastError') {
      //   res.status(400).json({ error: "Invalid OnGoing ID" });
      // } else {
      //   res.status(500).json({ error: "Failed to delete OnGoing" });
      // }
      res.status(500).json({ error: `Unable to delete OnGoing with id: ${OnGoingId}` });

    }
  }
}

