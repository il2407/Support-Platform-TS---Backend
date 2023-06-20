import UseCaseModel, { UsecaseDocument } from '../schemas/UsecaseSchema';
import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { UsecaseService } from '../services/UsecaseService';

const usecaseService = new UsecaseService();

export class UsecaseController {
  private usecaseService: UsecaseService;

  constructor() {
    this.usecaseService = new UsecaseService();
  }

  public async usecase_get_all(req: Request, res: Response): Promise<void> {
    try {
      const usecases = await usecaseService.usecase_get_all();
      res.json(usecases);
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  public async usecase_add_new_usecase(req: Request, res: Response): Promise<void> {
    const usecaseData: UsecaseDocument = new UseCaseModel(); // Create an instance
    usecaseData._id = new mongoose.Types.ObjectId();
    usecaseData.subject = req.body.subject;
    usecaseData.description = req.body.description;
    usecaseData.action = req.body.action;
    usecaseData.salesforce_action = req.body.salesforce_action;
    usecaseData.notes = req.body.notes;

    try {
      const newUsecase = await usecaseService.usecase_add_new_usecase(usecaseData)
      res.json(newUsecase)

    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }


  public async usecase_edit(req: Request, res: Response): Promise<void> {
    const usecaseId: string = req.params.id;
    const updatedFields = req.body;

    try {
      const updatedUsecase = await usecaseService.usecase_edit(usecaseId, updatedFields);
      res.json(updatedUsecase);
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  public async usecase_delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
    const usecaseId: string = req.params.id;

    try {
      const deletedUsecase = await usecaseService.usecase_delete(usecaseId);
      // res.json(deletedUsecase);
      if (!deletedUsecase) {
        return res.status(404).json({ error: 'Usecase not found' });
      }
      res.json(deletedUsecase);
    }
    catch (err) {
      // if (err.name === 'CastError') {
      //   res.status(400).json({ error: "Invalid usecase ID" });
      // } else {
      //   res.status(500).json({ error: "Failed to delete usecase" });
      // }
      res.status(500).json({ error: `Unable to delete usecase with id: ${usecaseId}` });

    }
  }
}

