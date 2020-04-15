import { Place } from '../Places/Place';
import { UploadFile } from '../UploadFile';

export type City = {
  name: string,
  description?: string,
  background: UploadFile,
  teaser: UploadFile,
  id: string,
  created_at: Date,
  updated_at: Date,
  places: Place[]
};
