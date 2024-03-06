"use client";

import { UploadButton, UploadDropzone } from "@asad/lib/utils/uploadthing";

const UploadThingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />

      <UploadDropzone
        endpoint="imageUploader"
        content={{
          allowedContent: "Upto 1MB allowed",
        }}
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
};

export default UploadThingPage;
