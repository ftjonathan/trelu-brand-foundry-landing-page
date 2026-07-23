import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const blackHanSans = localFont({
  src: "../public/fonts/black-han-sans.ttf",
  variable: "--font-black-han",
  display: "swap",
});

const archivoBlack = localFont({
  src: "../public/fonts/archivo-black.ttf",
  variable: "--font-archivo-black",
  display: "swap",
});

const archivoBold = localFont({
  src: "../public/fonts/archivo-bold.ttf",
  variable: "--font-archivo-bold",
  display: "swap",
});

const sourceSans = localFont({
  src: [
    {
      path: "../public/fonts/source-sans-3-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/source-sans-3-medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-source-sans",
  display: "swap",
});

const ibmPlexMono = localFont({
  src: "../public/fonts/ibm-plex-mono-regular.ttf",
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const basePath =
  process.env.NODE_ENV === "production"
    ? "/trelu-brand-foundry-landing-page"
    : "";

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
    icon: `${basePath}/favicon.png`,
    apple: `${basePath}/favicon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} ${blackHanSans.variable} ${archivoBlack.variable} ${archivoBold.variable} ${ibmPlexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
