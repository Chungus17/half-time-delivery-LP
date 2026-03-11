import "./globals.css";
import { Inter, Sora } from "next/font/google";
// import type { Metadata } from "next";
// import { seo } from "@/lib/seo";
// import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

// export const metadata: Metadata = {
//   title: seo.title,
//   description: seo.description,
//   keywords: seo.keywords,
//   metadataBase: new URL(site.url),
//   openGraph: {
//     title: seo.title,
//     description: seo.description,
//     url: site.url,
//     siteName: site.name,
//     locale: "en_US",
//     type: "website",
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}