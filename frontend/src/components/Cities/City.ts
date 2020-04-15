import { UploadFile } from '../UploadFile';
import { UnmissableSectionType } from '../Unmissables/UnmissableSection';

export type City = {
  id: string,
  name: string,
  description?: string,
  background: UploadFile,
  teaser: UploadFile,
  unmissableList: [UnmissableSectionType]
  created_at: Date,
  updated_at: Date,
};
