import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Outfit, Alex_Brush } from "next/font/google";

// import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alex",
});

// const alexBrush = localFont({
//   src: "../../public/fonts/AlexBrush-Regular.ttf",
//   variable: "--font-alex",
// });

export const metadata: Metadata = {
  title: "Stays",
  description: "Feels Like Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.variable} ${outfit.variable} ${alexBrush.variable} `}
      // className={`${poppins.variable} ${outfit.variable} ${alexBrush.variable}`}
    >
      <body className="bg-[#FDF8F0]">{children}</body>
    </html>
  );
}
