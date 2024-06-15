import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Miss Africa Maroc 2024",
  description: "Bienvenue sur le site officiel de Miss Africa Maroc 2024. Suivez notre page pour des mises à jour, des événements et des photos exclusives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Miss Africa Maroc, Miss Africa Maroc 2024, Concours de beauté, Maroc, Événements" />
        <meta name="author" content="Miss Africa Maroc 2024" />
        <meta property="og:title" content="Miss Africa Maroc 2024" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.missafricamaroc2024.com" />
        <meta property="og:image" content="https://www.missafricamaroc2024.com/images/cover.jpg" />
        <meta property="og:site_name" content="Miss Africa Maroc 2024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Miss Africa Maroc 2024" />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://www.missafricamaroc2024.com/images/cover.jpg" />
        <meta name="twitter:site" content="@missafrica2024" />
        <link rel="canonical" href="https://www.missafricamaroc2024.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/LogoFestival.jpg" />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
        <link rel="icon" type="image/png" sizes="32x32" href="/../../public/assets/DesingLogoFestival.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/../../public/assets/LogoFestival.jpg" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <link rel="alternate" type="application/rss+xml" title="Miss Africa Maroc 2024 RSS Feed" href="/rss.xml" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="robots" content="index, follow" />
        <meta property="og:image:alt" content="Miss Africa Maroc 2024 Cover Image" />
        <meta name="instagram:site" content="https://www.instagram.com/miss_africa_maroc" />
        <meta name="tiktok:site" content="https://www.tiktok.com/@missafrica2024" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
