import { Geist, Geist_Mono, Poppins, Orbit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "500" , "600", "400", "700"],
});

const orbit = Orbit({
  variable: "--font-orbit",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Waleed Ashraf - AI/ML Engineer, Software Developer, Workflow Automator, and UI/X Designer",
  description: "Waleed Ashraf's personal portfolio website showcasing expertise in AI/ML engineering, software development, workflow automation, UI/UX design, and brand designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${orbit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
