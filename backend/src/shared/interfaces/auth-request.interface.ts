import { Request } from 'express';
import { IUser } from '../../modules/users/interfaces/user.interface';

export interface AuthRequest extends Request {
  user?: IUser;
}
