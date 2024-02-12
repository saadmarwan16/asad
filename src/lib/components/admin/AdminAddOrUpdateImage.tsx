import Button, { button } from "@asad/lib/ui/Button";
import styles from "@asad/styles/admin/new_executive.module.css";
import Image from "next/image";
import { type FunctionComponent } from "react";
import { FaImage } from "react-icons/fa";

interface AdminAddOrUpdateImageProps {
  image: string | undefined;
  setImage: (value: string | undefined) => void;
}

const AdminAddOrUpdateImage: FunctionComponent<AdminAddOrUpdateImageProps> = ({
  image,
  setImage,
}) => {
  return (
    <>
      <input
        id="new-image"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />
      <input
        id="update-image"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />
      <div id={styles.image} className="flex flex-col gap-2">
        <label className="cursor-default select-none font-medium">Image</label>
        {image ? (
          <div className="relative h-80 rounded-lg md:h-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 z-[1] flex flex-wrap content-center items-center justify-center gap-4 rounded-lg bg-content-200 bg-opacity-50 px-4 md:px-6">
              <Button
                variant="secondary"
                size='sm'
                data-text="Remove"
                onClick={() => setImage(undefined)}
              >
                Remove
              </Button>
              <label
                htmlFor="update-image"
                data-text="Update"
                className={`cursor-pointer ${button({size: 'sm'})}`}
              >
                Update
              </label>
            </div>
            <Image
              src="/images/timeline.png"
              alt="Executive"
              className="rounded-lg"
              sizes="100% 100%"
              fill
            />
          </div>
        ) : (
          <label
            htmlFor="new-image"
            className="flex cursor-pointer flex-col items-center justify-center gap-6 rounded-lg border-2 border-primary-100 px-10 py-12 hover:border-primary-200"
          >
            <FaImage className="text-6xl text-primary-200 sm:text-7xl md:text-8xl lg:text-9xl" />
            <span className="text-lg font-medium text-primary-300 md:text-xl">
              Add an image
            </span>
          </label>
        )}
      </div>
    </>
  );
};

export default AdminAddOrUpdateImage;
