export type UploadFile = {
  name: string,
  hash: string,
  sha256?: string,
  ext?: string,
  mime: string,
  size: number
  url: string,
  provider: string,
  provider_metadata?: JSON,
  id: string,
  created_at: Date,
  updated_at: Date
};
