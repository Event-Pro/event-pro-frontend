import "./globals.css";
import { Inter, Tenali_Ramakrishna, Ubuntu_Condensed } from "next/font/google";

import ticketLogo from "../utils/images/ticketLogoLight.png";

const inter = Inter({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-inter",
});
const ubuntu = Ubuntu_Condensed({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ubuntu",
});
const tenali = Tenali_Ramakrishna({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tenali",
});

//todo: update browser icon to ticketLogo
export const metadata = {
  title: "Event Pro",
  description: "Event Organizing Web Application",
  link: { ticketLogo },
};

const classNames = ` ${inter.variable} ${tenali.variable} ${ubuntu.variable} `;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="../../utils/images/ticketLogoLight.png"
        />
      </head>
      <body className={classNames}>{children}</body>
    </html>
  );
}
