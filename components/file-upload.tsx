

import { ourFileRouter } from '@/app/api/uploadthing/core';
import { UploadDropzone } from '@/lib/uploadthing';
import toast from 'react-hot-toast';

export interface IFileUploadProps {
  onChange: (url?: string) => void,
  endpoint: keyof typeof ourFileRouter
}

export default function FileUpload({ onChange, endpoint }: IFileUploadProps) {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url)
      }}

      onUploadError={(error: Error) => {
        toast.error(`${error?.message}`)
      }}

    />
  );
}
