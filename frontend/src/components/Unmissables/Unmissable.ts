import { UploadFile } from '../UploadFile';

export type Unmissable = {
  id: string,
  created_at: Date,
  updated_at: Date,
  title: string,
  description?: string,
  type: string,
  teaser: UploadFile
};
