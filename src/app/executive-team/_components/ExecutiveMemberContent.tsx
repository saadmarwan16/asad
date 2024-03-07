import { type FunctionComponent } from "react";
import Image from "next/image";
import { type TExecutive } from "@asad/server/db/schema/executives";

interface ExecutiveMemberContentProps {
  executive: TExecutive;
}

const ExecutiveMemberContent: FunctionComponent<
  ExecutiveMemberContentProps
> = ({ executive }) => {
  return (
    <div className="mb-6 flex flex-col gap-6 md:mb-8 md:gap-8">
      <div>
        <h2 className="font-medium capitalize leading-10">{executive.name}</h2>
        <span className="uppercase text-content-100">{executive.role}</span>
      </div>
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src={executive.image ?? '/images/timeline.jpg'}
          alt={executive.name}
          width={500}
          height={500}
          className="h-[400px] w-auto"
        />
      </div>
      <p>{executive.duties}</p>
    </div>
  );
};

export default ExecutiveMemberContent;
