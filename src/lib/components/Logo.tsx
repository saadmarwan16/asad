import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-24 sm:w-28 md:w-32">
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
