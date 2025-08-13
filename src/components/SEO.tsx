import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article" | "service";
  author?: string;
  publishedTime?: string;
}

const SEO = ({ 
  title = "Digital Accountant - Modern Financial Solutions",
  description = "Transform your financial management with Digital Accountant. Expert tax preparation, bookkeeping, financial planning, and payroll services powered by cutting-edge technology.",
  keywords = ["digital accountant", "tax preparation", "bookkeeping", "financial planning", "payroll services", "accounting software", "CPA services"],
  image = "https://digitalaccountant.com/og-image.jpg",
  type = "website",
  author,
  publishedTime
}: SEOProps) => {
  const location = useLocation();
  const url = `https://digitalaccountant.com${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attributeName = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attributeName}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attributeName, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords.join(", "));

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", "Digital Accountant", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Article specific tags
    if (type === "article" && author) {
      updateMetaTag("article:author", author, true);
      if (publishedTime) {
        updateMetaTag("article:published_time", publishedTime, true);
      }
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type === "article" ? "BlogPosting" : "ProfessionalService",
      "name": "Digital Accountant",
      "description": description,
      "url": url,
      "logo": {
        "@type": "ImageObject",
        "url": "https://digitalaccountant.com/logo.png"
      },
      "sameAs": [
        "https://facebook.com/digitalaccountant",
        "https://twitter.com/digitalaccountant",
        "https://linkedin.com/company/digitalaccountant"
      ],
      ...(type === "article" && {
        "headline": title,
        "image": image,
        "author": {
          "@type": "Person",
          "name": author
        },
        "datePublished": publishedTime
      }),
      ...(type === "service" && {
        "serviceType": title,
        "provider": {
          "@type": "Organization",
          "name": "Digital Accountant"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        }
      })
    };

    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(structuredData);

    // Canonical URL
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute("href", url);

  }, [title, description, keywords, image, url, type, author, publishedTime]);

  return null;
};

export default SEO;