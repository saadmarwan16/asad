import Button, { button } from "@asad/lib/ui/Button";
import styles from "@asad/styles/admin/new_or_update_activity.module.css";
import Image from "next/image";
import { useState, type FunctionComponent } from "react";
import { FaImage } from "react-icons/fa";

interface UpdateActivityImagesProps {
  images: string[];
  setImage: (value: string | undefined) => void;
  removeImage: (idx: number) => void;
}

const UpdateActivityImages: FunctionComponent<UpdateActivityImagesProps> = ({
  images,
  setImage,
  removeImage,
}) => {
  const [idx, setIdx] = useState(0);

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
      <div id={styles.images} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="cursor-default select-none font-medium">
            Images
          </label>
          {images.length > 0 ? (
            <div className="relative aspect-square max-w-80 rounded-lg">
              <div className="absolute bottom-0 left-0 right-0 top-0 z-[1] flex flex-wrap content-center items-center justify-center gap-4 rounded-lg bg-content-200 bg-opacity-50 px-4 md:px-6">
                <Button
                  variant="secondary"
                  size="sm"
                  type="button"
                  data-text="Remove"
                  onClick={() => {
                    if (images.length - 1 <= idx) setIdx(images.length - 2);
                    removeImage(idx);
                  }}
                >
                  Remove
                </Button>
                <label
                  htmlFor="new-image"
                  data-text="Add"
                  className={`cursor-pointer ${button({ size: "sm" })}`}
                >
                  Add
                </label>
              </div>
              <Image
                src="/images/timeline.png"
                alt="Executive"
                className="aspect-square rounded-lg"
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
                Uploaded images can be seen here
              </span>
            </label>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`${idx === i && "border-primary-200"} relative aspect-square w-28 cursor-pointer rounded-lg border-2`}
              onClick={() => setIdx(i)}
            >
              <Image
                src="/images/timeline.png"
                alt="Executive"
                className="aspect-square rounded-lg"
                sizes="100% 100%"
                fill
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-content-200 bg-opacity-60"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UpdateActivityImages;
