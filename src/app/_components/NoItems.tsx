import { type FunctionComponent } from "react";

interface NoItemsProps {
  title: string;
}

const NoItems: FunctionComponent<NoItemsProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 text-3xl font-medium md:gap-4 md:p-8 lg:p-12">
      <h3 className="text-center text-3xl font-medium">No {title}!</h3>
      <p className="mb-6 text-center md:mb-8 lg:mb-10">
        Available {title} will appear here. Come back later
      </p>
    </div>
  );
};

export default NoItems;
