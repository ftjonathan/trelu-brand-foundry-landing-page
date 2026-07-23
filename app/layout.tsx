import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trelu.com"),
  title: "Trelu Brand Foundry | Brand & Growth Strategy",
  description:
    "Forge a position the market can’t ignore. Trelu is an entrepreneur-led brand and growth foundry for complex businesses entering pivotal change.",
  openGraph: {
    title: "Trelu Brand Foundry | Brand & Growth Strategy",
    description:
      "Forge a position the market can’t ignore. Trelu is an entrepreneur-led brand and growth foundry for complex businesses entering pivotal change.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trelu Brand Foundry | Brand & Growth Strategy",
    description:
      "Forge a position the market can’t ignore. Trelu is an entrepreneur-led brand and growth foundry for complex businesses entering pivotal change.",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
