import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stackpackers | Drum and Bass | Melbourne | Australia",
  description:
    "⚡️ A storm in full force, shaking the scene with explosive sets and powerful soundscapes ⛈️",
  keywords:
    "bass music, drum and bass, DJ, dnb, electronic music, music production, Ableton Live, DJ mixes, Melbourne DJ, music events, music festivals, music community, music culture, music industry, music promotion, music marketing, music distribution, music licensing, music publishing, music rights management, music royalties, music streaming, music downloads, music sales, music charts, music awards",
  authors: [{ name: "Sara Catalano" }],
  metadataBase: new URL('https://www.stackpackers.com'),
  openGraph: {
    title: "Stackpackers | Drum and Bass | Melbourne | Australia",
    description:
      "⚡️ A storm in full force, shaking the scene with explosive sets and powerful soundscapes ⛈️",
    url: "https://stackpackers.com",
    siteName: "Stackpackers | Drum and Bass | Melbourne | Australia",
    images: [
      {
        url: "/img/og.jpg",
        width: 1200,
        height: 630,
        alt: "Stackpackers Open Graph Image",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico", 
    shortcut: "/favicon.ico", 
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        <meta property="og:image" content="/img/og.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
