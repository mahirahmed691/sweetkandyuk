import { products } from "@/lib/products";
import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}/#shop`,
        name: site.name,
        url: site.url,
        image: `${site.url}/images/pouch-classic.png`,
        description: site.description,
        sameAs: [site.instagram],
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressCountry: "GB",
        },
        areaServed: [
          { "@type": "City", name: site.city },
          { "@type": "Country", name: "United Kingdom" },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Sweet Kandy pouches",
        itemListElement: products.map((product) => ({
          "@type": "Offer",
          name: product.name,
          description: product.blurb,
          url: `${site.url}/order?pouch=${product.slug}`,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
