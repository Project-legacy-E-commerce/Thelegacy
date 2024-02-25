import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./UI/NavBar";
import SideBar from "./UI/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seller Inreface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundColor:"#EEEFF8"}}>
        <NavBar />
        <SideBar />
        {children}
      </body>
    </html>
  );
}
