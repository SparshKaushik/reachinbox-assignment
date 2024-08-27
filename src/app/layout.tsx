import "~/styles/globals.css";

import { type Metadata } from "next";
import { Poppins } from "next/font/google";
import ThemeProvider from "~/components/ThemeProvider";

export const metadata: Metadata = {
  title: "ReachInbox - AI to send cold emails  that land directly in the Inbox",
  description:
    "ReachInbox AI, the ultimate tool for transforming your cold email outreach. Loaded with email warmups, AI-driven sequence generation, spintax technology, and inbox rotation for maximum email deliverability and ROI.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} overflow-hidden font-sans`}>
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
