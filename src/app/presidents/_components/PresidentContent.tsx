import { type FunctionComponent } from "react";
import Image from "next/image";
import { type TPresident } from "@asad/server/db/schema/presidents";


interface PresidentContentProps {
  president: TPresident;
}

const PresidentContent: FunctionComponent<PresidentContentProps> = ({
  president,
}) => {
  return (
    <div className="mb-6 flex flex-col gap-6 md:mb-8 md:gap-8">
      <div>
        <h2 className="font-medium capitalize leading-10">{president.name}</h2>
        <span className="uppercase text-content-100">
          From {president.from} to {president.to}
        </span>
      </div>
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src={president.image ?? '/images/no_profile_image.jpg'}
          alt={president.name}
          width={500}
          height={500}
          className="h-[400px] w-auto"
        />
      </div>
      <p>{president.accomplishments}</p>
    </div>
  );
};

export default PresidentContent;
