import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tetio-portfolio.vercel.app"),
  title: "Tetio Tsague — Junior Software Engineer",
  description:
    "Portfolio of Tetio Tsague, a junior software engineer building secure, reliable software across Java/Spring Boot, Python and TypeScript — full-stack and applied AI.",
  keywords: [
    "Tetio Tsague",
    "Junior Software Engineer",
    "Full-stack developer",
    "Java",
    "Spring Boot",
    "Python",
    "TypeScript",
    "Belgium",
  ],
  authors: [{ name: "Tetio Tsague" }],
  openGraph: {
    title: "Tetio Tsague — Junior Software Engineer",
    description:
      "Secure, reliable software across Java/Spring Boot, Python and TypeScript — full-stack and applied AI.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/tetio.jpg", width: 1200, height: 1500, alt: "Tetio Tsague" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tetio Tsague — Junior Software Engineer",
    description:
      "Secure, reliable software across Java/Spring Boot, Python and TypeScript — full-stack and applied AI.",
    images: ["/tetio.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tetio Tsague",
  jobTitle: "Junior Software Engineer",
  email: "mailto:tetiotsague20@gmail.com",
  url: "https://tetio-portfolio.vercel.app",
  address: { "@type": "PostalAddress", addressLocality: "Silly", addressCountry: "BE" },
  alumniOf: "Haute École Louvain en Hainaut (HELHa)",
  sameAs: [
    "https://github.com/TxTx04",
    "https://www.linkedin.com/in/tsague-tetio-184975235",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
