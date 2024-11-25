import type { Metadata } from "next";

import "./globals.css";
import Menu from "@/components/Menu/menu";
import Footer from "@/components/Footer/footer";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata: Metadata = {
  title: "Oceans5",
  description: "Battleship Game Clone",
  icons: {
    icon: "/loading.gif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <React.StrictMode>
        <html lang="en">
          <UserProvider>
            <body>
              <Menu />
              {children}
              <Footer />
            </body>
          </UserProvider>
        </html>
      </React.StrictMode>
    </>
  );
}
