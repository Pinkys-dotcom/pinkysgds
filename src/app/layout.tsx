import type { Metadata } from "next";
import { Poppins, Kaushan_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { serviceAreaCities, site } from "@/lib/site";

const sans = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const script = Kaushan_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = "https://pinkysgaragedoors.com";
const defaultTitle = "Pinky's Garage Doors | Phoenix, AZ";
const defaultDescription =
  "Garage doors done right. Repair, replace, or upgrade your garage door with honest recommendations, expert craftsmanship, and service you can count on. Serving Phoenix, AZ and Maricopa County.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: site.name,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/og-image.jpg"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  url: siteUrl,
  telephone: site.phone,
  email: site.email,
  image: `${siteUrl}/images/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  areaServed: serviceAreaCities.map((city) => ({
    "@type": "City",
    name: city,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${script.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RZYR99SVZ7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RZYR99SVZ7');
          `}
        </Script>
        <link
          rel="stylesheet"
          href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
          media="screen"
        />
        <Script
          src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"
          strategy="lazyOnload"
          {...{
            clienthub_id: "aba6013d-7320-4c1a-924c-e85d9784875f-4962085",
            form_url:
              "https://clienthub.getjobber.com/client_hubs/aba6013d-7320-4c1a-924c-e85d9784875f/public/work_request/embedded_work_request_form?form_id=4962085",
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
