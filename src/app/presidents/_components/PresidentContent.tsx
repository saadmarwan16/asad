import { type FunctionComponent } from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PresidentContentProps {}

const PresidentContent: FunctionComponent<PresidentContentProps> = () => {
  return (
    <div className="mb-6 flex flex-col gap-6 md:mb-8 md:gap-8">
      <div>
        <h2 className="font-medium capitalize leading-10">Vincent Bailey</h2>
        <span className="uppercase text-content-100">From 2020 to 2022</span>
      </div>
      <div>
        <Image
          src="/images/executives.png"
          alt="Executive name"
          width={500}
          height={500}
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolorum
        assumenda itaque, qui magni eum dolorem perferendis libero quo tenetur
        maiores consequatur eligendi optio. Sed qui ut odio fugit voluptate!
      </p>
    </div>
  );
};

export default PresidentContent;
