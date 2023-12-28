import Image from "next/image";
import { type FunctionComponent } from "react";

interface LogoProps {
  className: string;
}

const Logo: FunctionComponent<LogoProps> = ({ className }) => {
  return (
    <div className={className}>
      <Image
        width={140}
        height={140}
        src="/logo.png"
        alt="Logo"
        className="h-auto w-full"
      />
    </div>
  );
};

export default Logo;
