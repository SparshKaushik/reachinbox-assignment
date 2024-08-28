import "~/styles/globals.css";

import { type Metadata } from "next";
import { Poppins } from "next/font/google";
import ThemeProvider from "~/components/ThemeProvider";
import AuthProvider from "~/components/AuthProvider";
import Header from "~/components/Header";

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
      <body>
        <ThemeProvider forcedTheme="dark" attribute="class">
          <AuthProvider>
            <div className="flex h-dvh overflow-hidden">
              <div className="flex flex-1 flex-col overflow-auto sm:gap-4">
                <Header />
                {children}
              </div>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
