import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Stackpackers",
  description:
    "⚡️ A storm in full force, shaking the scene with explosive sets and powerful soundscapes ⛈️",
  keywords:
    "bass music, drum and bass, DJ, dnb, electronic music, music production, Ableton Live, DJ mixes, Melbourne DJ, music events, music festivals, music community, music culture, music industry, music promotion, music marketing, music distribution, music licensing, music publishing, music rights management, music royalties, music streaming, music downloads, music sales, music charts, music awards",
  authors: [{ name: "Sara Catalano" }],
  openGraph: {
    title: "Stackpackers",
    description:
      "⚡️ A storm in full force, shaking the scene with explosive sets and powerful soundscapes ⛈️",
    url: "https://stackpackers.com",
    siteName: "Stackpackers",
  },
};
//todo: add image and favicon

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='antialiased'>
        {children}
      </body>
    </html>
  );
}
