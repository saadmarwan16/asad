import "@asad/styles/globals.css";

import { Montserrat } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@asad/trpc/react";
import DrawerContextProvider from "@asad/lib/components/DrawerContextProvider";
import ModalContextProvider from "@asad/lib/components/ModalContextProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "ASAD | African Students Association in Denizli",
  description:
    "African Students Association in Denizli is a non-profit association founded in 2015 by African Stidents in Denizli in order to help create and develop strong relationships with one another.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${montserrat.variable} bg-base-100 text-content-200`}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <DrawerContextProvider>
            <ModalContextProvider>{children}</ModalContextProvider>
          </DrawerContextProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
