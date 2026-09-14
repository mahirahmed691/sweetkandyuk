import type { Metadata } from "next";
import { Bricolage_Grotesque, Epilogue } from "next/font/google";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display-raw",
  display: "swap",
});

const body = Epilogue({
  subsets: ["latin"],
  variable: "--font-body-raw",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL("https://sweetkandyuk.com"),
  openGraph: {
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    images: ["/images/pouch-classic.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col bg-sugar font-body text-ink">
        <div className="noise" aria-hidden="true" />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
