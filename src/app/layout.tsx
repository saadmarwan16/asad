import "@asad/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { Montserrat } from "next/font/google";

import { ourFileRouter } from "./api/uploadthing/core";
import DrawerContextProvider from "@asad/lib/components/DrawerContextProvider";
import ModalContextProvider from "@asad/lib/components/ModalContextProvider";
import { ToastContainer } from "react-toastify";

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
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <DrawerContextProvider>
          <ModalContextProvider>
            {children}

            <ToastContainer
              position="top-center"
              autoClose={4000}
              hideProgressBar={true}
              newestOnTop={true}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              pauseOnHover
            />
          </ModalContextProvider>
        </DrawerContextProvider>
      </body>
    </html>
  );
}
