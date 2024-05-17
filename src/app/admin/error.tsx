"use client";

import { type FunctionComponent } from "react";
import Image from "next/image";
import Button from "@asad/lib/ui/Button";

interface AdminErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const AdminErrorPage: FunctionComponent<AdminErrorPageProps> = ({ reset }) => {
  return (
    <div className="flex min-h-screen flex-wrap-reverse gap-8 px-6 py-8 md:px-12 md:py-12 lg:flex-nowrap lg:gap-16 lg:px-24 lg:py-16">
      <div className="flex grow flex-col justify-center gap-4 md:gap-6 lg:gap-8">
        <h1 className="text-6xl font-medium md:text-[4.5rem] lg:text-[5rem]">
          500
        </h1>
        <h3 className="text-3xl font-medium md:text-4xl">
          Oops, unexpected error!
        </h3>
        <p>
          Looks like something really unexpected happened. We are working to get
          you back on track. In the meantime, you can retry.
        </p>
        <div className="flex justify-start items-start">
        <Button data-text="Retry" onClick={reset}>
          Retry
        </Button>
        </div>
      </div>
      <div className="relative aspect-square min-w-[450px] grow xl:min-w-[600px]">
        <Image fill src="/500.png" alt="Not found error" />
      </div>
    </div>
  );
};

export default AdminErrorPage;
