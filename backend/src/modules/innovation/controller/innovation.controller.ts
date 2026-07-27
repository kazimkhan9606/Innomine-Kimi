import { Response, NextFunction } from 'express';
import { innovationService } from '../service/innovation.service';
import { successResponse } from '../../../shared/utils/response';
import { AuthRequest } from '../../../shared/interfaces/auth-request.interface';

class InnovationController {
  async create(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await innovationService.createInnovation(req.user!.id, req.body);
      res.status(201).json(successResponse(data, 'Innovation created successfully'));
    } catch (error) {
      next(error);
    }
  }

  async list(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await innovationService.listInnovations(
        req.query as any,
        req.user?.id,
        req.user?.role
      );
      res.status(200).json(successResponse(data, 'Innovations retrieved successfully'));
    } catch (error) {
      next(error);
    }
  }

  async getById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await innovationService.getInnovationById(
        req.params.id as string,
        req.user?.id,
        req.user?.role
      );
      res.status(200).json(successResponse(data, 'Innovation retrieved successfully'));
    } catch (error) {
      next(error);
    }
  }

  async getBySlug(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await innovationService.getInnovationBySlug(
        req.params.slug as string,
        req.user?.id,
        req.user?.role
      );
      res.status(200).json(successResponse(data, 'Innovation retrieved successfully'));
    } catch (error) {
      next(error);
    }
  }

  async update(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await innovationService.updateInnovation(
        req.params.id as string,
        req.user!.id,
        req.user!.role,
        req.body
      );
      res.status(200).json(successResponse(data, 'Innovation updated successfully'));
    } catch (error) {
      next(error);
    }
  }

  async delete(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await innovationService.deleteInnovation(
        req.params.id as string,
        req.user!.id,
        req.user!.role
      );
      res.status(200).json(successResponse(data, 'Innovation deleted successfully'));
    } catch (error) {
      next(error);
    }
  }

  async publish(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await innovationService.publishInnovation(
        req.params.id as string,
        req.user!.id,
        req.user!.role
      );
      res.status(200).json(successResponse(data, 'Innovation published successfully'));
    } catch (error) {
      next(error);
    }
  }

  async archive(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await innovationService.archiveInnovation(
        req.params.id as string,
        req.user!.id,
        req.user!.role
      );
      res.status(200).json(successResponse(data, 'Innovation archived successfully'));
    } catch (error) {
      next(error);
    }
  }

  async verify(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await innovationService.verifyInnovation(
        req.params.id as string,
        req.user!.id,
        req.user!.role
      );
      res.status(200).json(successResponse(data, 'Innovation verified successfully'));
    } catch (error) {
      next(error);
    }
  }

  async like(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await innovationService.toggleLike(
        req.params.id as string,
        req.user!.id
      );
      res.status(200).json(successResponse(data, 'Innovation like toggled successfully'));
    } catch (error) {
      next(error);
    }
  }

  async bookmark(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await innovationService.toggleBookmark(
        req.params.id as string,
        req.user!.id
      );
      res.status(200).json(successResponse(data, 'Innovation bookmark toggled successfully'));
    } catch (error) {
      next(error);
    }
  }
}

export const innovationController = new InnovationController();
