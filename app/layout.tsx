import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Full-Stack Developer | Business Solutions through Technology",
  description: "Professional portfolio of a Full-Stack Developer & Software Engineer specializing in transforming business challenges into digital solutions.",
  keywords: ["Full-Stack Developer", "Software Engineer", "Web Development", "Business Solutions", "React", "Next.js", "TypeScript"],
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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
