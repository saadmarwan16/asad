import { type FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <>
      <header className="absolute z-20 hidden h-20 items-center text-xl text-white lg:flex">
        <div className="fixed left-8 z-10">
          {/* TODO: Input logo image here after it has been converted to an svg */}
          Logo here
        </div>
        <div className="fixed right-8 z-10">
          {/* TODO: Replace this with a hamburger */}
          Hamburger here
        </div>
      </header>
      <header className="text-md flex h-20 items-center justify-between bg-white px-4 text-black lg:hidden">
        <div className="">
          {/* TODO: Input logo image here after it has been converted to an svg */}
          Logo here
        </div>
        <div className="">
          {/* TODO: Replace this with a hamburger */}
          Hamburger here
        </div>
      </header>
    </>
  );
};

export default Header;
