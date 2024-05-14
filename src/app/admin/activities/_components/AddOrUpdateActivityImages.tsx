import styles from "@asad/styles/admin/new_or_update_activity.module.css";
import Image from "next/image";
import { type FunctionComponent } from "react";
import { UploadDropzone } from "@asad/lib/utils/uploadthing";
import { MdDelete } from "react-icons/md";
import errorToast from "@asad/lib/utils/errorToast";

interface AddOrUpdateActivityImagesProps {
  images: string[];
  setImages: (value: string[]) => void;
  removeImage: (url: string) => void;
}

const AddOrUpdateActivityImages: FunctionComponent<AddOrUpdateActivityImagesProps> = ({
  images,
  setImages,
  removeImage,
}) => {
  return (
    <>
      <div id={styles.images} className="flex flex-col gap-5">
        <UploadDropzone
          endpoint="imageUploader"
          content={{
            allowedContent: "Upto 4MB allowed for each image, 10 images max",
          }}
          onClientUploadComplete={(res) => {
            res.map((img) => console.log(img.url));
            const urls = res.map((img) => img.url);
            console.log(urls);
            setImages(urls);
          }}
          onUploadError={(error: Error) => {
            errorToast(error.message, "upload-image-add-activity-error");
          }}
          appearance={{
            label: {
              width: "auto",
              color: "#007B3A",
            },
            allowedContent: {
              height: "auto",
            },
            button: {
              backgroundColor: "#007B3A",
              cursor: 'pointer'
            },
          }}
        />

        <div className="flex flex-wrap gap-2">
          {images.map((url) => (
            <div
              key={url}
              className="relative aspect-square w-28 rounded-lg border-2"
            >
              <Image
                src={url}
                alt="Executive"
                className="aspect-square rounded-lg"
                sizes="100% 100%"
                fill
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-lg bg-content-200 bg-opacity-60">
                <MdDelete
                  className="cursor-pointer text-5xl text-white"
                  onClick={() => removeImage(url)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddOrUpdateActivityImages;
