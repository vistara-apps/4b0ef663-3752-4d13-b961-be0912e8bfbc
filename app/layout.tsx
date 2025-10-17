import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "TinyTrade - Socialized Micro-Trading on Base",
  description: "Share, discover, and monetize verified micro-trades from Hyperliquid within a Farcaster-native social context.",
  openGraph: {
    title: "TinyTrade",
    description: "Socialized micro-trading on Base",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
