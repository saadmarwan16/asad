import styles from "@asad/styles/admin/new_executive.module.css";
import Image from "next/image";
import { useState, type FunctionComponent } from "react";
import { FaImage } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { UploadButton } from "@asad/lib/utils/uploadthing";
import errorToast from "@asad/lib/utils/errorToast";

interface AdminAddOrUpdateImageProps {
  image: string | null;
  setImage: (value: string | null) => void;
}

const AdminAddOrUpdateImage: FunctionComponent<AdminAddOrUpdateImageProps> = ({
  image,
  setImage,
}) => {
  const [uploading, setUploading] = useState(false);

  return (
    <>
      <div id={styles.image} className="flex flex-col gap-2">
        <label className="cursor-default select-none font-medium">Image</label>
        {image ? (
          <div className="relative h-80 rounded-lg md:h-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 z-[1] flex items-center justify-center gap-4 rounded-lg bg-content-200 bg-opacity-50 px-4 md:px-6">
              <MdDelete
                className="cursor-pointer text-6xl text-base-100 sm:text-7xl md:text-8xl"
                onClick={() => setImage(null)}
              />
            </div>
            <Image
              src={image}
              alt="Executive"
              className="rounded-lg"
              sizes="100% 100%"
              fill
            />
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center gap-6 rounded-lg border-2 border-primary-100 px-10 py-12">
              <FaImage className="text-6xl text-primary-200 sm:text-7xl md:text-8xl lg:text-9xl" />
              <span className="text-lg font-medium text-primary-300 md:text-xl">
                Uploaded image will appear here
              </span>
            </div>

            <UploadButton
              endpoint="imageUploader"
              className="mt-2 items-end"
              appearance={{
                button: uploading ? "!pointer-events-none" : "",
              }}
              onUploadBegin={() => setUploading(true)}
              content={{
                button: "Upload Image",
                allowedContent: "File size up to 4MB",
              }}
              onClientUploadComplete={(res) => {
                if (res.length > 0) {
                  setImage(res[0]!.url);
                }
                setUploading(false);
              }}
              onUploadError={(error: Error) => {
                errorToast(error.message, "upload-image-error");
                setUploading(false);
              }}
            />
          </>
        )}
      </div>
    </>
  );
};

export default AdminAddOrUpdateImage;
