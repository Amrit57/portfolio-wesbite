import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amrit | Personal Portfolio",
  description:
    "Amrit is Front-end developer with passion to learn new technologies and has keen knowlegde on basic foundation, enriched with the latest tech like React, tailwind, etc. Dive into a world of visually stunning projects, showcasing responsive design, WebGL, and cutting-edge innovation. Elevate your web experience. Explore my skills, expertise, and passion for crafting compelling digital experiences. Elevate your expectations of web development, one click at a time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>{children}</body>
    </html>
  );
}
