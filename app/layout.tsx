import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Full-Stack Developer | Business Solutions through Technology",
  description: "Professional portfolio of a Full-Stack Developer & Software Engineer specializing in transforming business challenges into digital solutions.",
  keywords: ["Full-Stack Developer", "Software Engineer", "Web Development", "Business Solutions", "React", "Next.js", "TypeScript" ,"mohamed elghandour"],
  authors: [{ name: "Mohamed Elghandour" }],
  openGraph: {
    title: "Full-Stack Developer | Business Solutions through Technology",
    description: "Transforming Business Challenges into Digital Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Full-Stack Developer | Business Solutions through Technology" />
        <meta property="og:description" content="Transforming Business Challenges into Digital Solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://engelghandour.com/" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Full-Stack Developer | Business Solutions through Technology" />
        <meta name="twitter:description" content="Transforming Business Challenges into Digital Solutions" />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        {/* Structured Data: Person */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mohamed Elghandour",
            "url": "https://engelghandour.com/",
            "sameAs": [
              "https://www.linkedin.com/in/engelghandour/",
              "https://github.com/engelghandour"
            ],
            "jobTitle": "Full-Stack Developer",
            "image": "/images/og-image.jpg"
          })
        }} />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
