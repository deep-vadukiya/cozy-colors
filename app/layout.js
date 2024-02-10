//

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cozy Colors: Inspire Your Design with Stunning Color Palettes",
  description:
    "Color Palette Generator, Gradient Colors, Web Design, UI/UX, Developer Tools, Color Inspiration, Design Resources",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
