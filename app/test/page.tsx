"use client";

import { UploadButton } from "@/utils/uploadthing";
import "@uploadthing/react/styles.css";

const page = () => {
  return (
    <UploadButton
      className=""
      endpoint="avatarUpload"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res);
        alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
};

export default page;
