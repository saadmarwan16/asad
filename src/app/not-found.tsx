import { type FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@asad/lib/routes";
import { button } from "@asad/lib/ui/Button";

const NotFoundPage: FunctionComponent = () => {
  return (
    <div className="flex min-h-screen flex-wrap-reverse gap-8 px-6 py-8 md:px-12 md:py-12 lg:flex-nowrap lg:gap-16 lg:px-24 lg:py-16">
      <div className="flex grow flex-col justify-center gap-4 md:gap-6 lg:gap-8">
        <h1 className="text-6xl font-medium md:text-[4.5rem] lg:text-[5rem]">
          404
        </h1>
        <h3 className="text-3xl font-medium md:text-4xl">Oops, wrong turn!</h3>
        <p>
          Looks like you have wondered off the beaten path. We are working to
          get you back on track. In the meantime, you can go back to the home
          page.
        </p>
        <Link href={Routes.HOME} className={`${button()} w-fit`} data-text='Go Back Home'>
          Go Back Home
        </Link>
      </div>
      <div className="relative min-w-[450px] xl:min-w-[600px] grow aspect-square">
        <Image fill src="/404.png" alt="Not found error" />
      </div>
    </div>
  );
};

export default NotFoundPage;
