//

import Link from "next/link";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
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
      <body className={inter.className}>
        <header className="top-0 left-0 w-full z-[90] py-2 md:py-3 xs:h-8 text-[color:white] theme-dark-gray bg-gray-400 sticky theme-dark-gray transition-all duration-300">
          <div className="container px-8">
            <div className="cols-container items-center">
              <div className="flex justify-between">
                <div>
                  <Link href="/" className="hover:underline">
                    Logo
                  </Link>
                </div>

                <div className="flex gap-6">
                  <div>
                    <Link href="/explore" className="hover:underline">
                      Explore
                    </Link>
                  </div>
                  <div>
                    <Link href="/generate" className="hover:underline">
                      Generate
                    </Link>
                  </div>
                  <div>
                    <Link href="/palettes" className="hover:underline">
                      Palettes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {children}

        <Toaster />
      </body>
    </html>
  );
}
