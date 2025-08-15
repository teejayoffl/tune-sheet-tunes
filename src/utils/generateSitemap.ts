export const generateSitemap = () => {
  const baseUrl = "https://digitalaccountant.com";
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "daily" },
    { url: "/services", priority: "0.9", changefreq: "weekly" },
    { url: "/blog", priority: "0.8", changefreq: "daily" },
    { url: "/services/tax-preparation", priority: "0.8", changefreq: "monthly" },
    { url: "/services/bookkeeping", priority: "0.8", changefreq: "monthly" },
    { url: "/services/financial-planning", priority: "0.8", changefreq: "monthly" },
    { url: "/services/payroll", priority: "0.8", changefreq: "monthly" }
  ];

  // In a real app, you would fetch blog posts from your CMS/database
  const blogPosts = [
    "/blog/tax-season-preparation-guide",
    "/blog/small-business-bookkeeping-essentials",
    "/blog/financial-planning-millennials",
    "/blog/payroll-compliance-updates-2024",
    "/blog/cryptocurrency-tax-guide",
    "/blog/business-expense-tracking"
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
${blogPosts.map(post => `  <url>
    <loc>${baseUrl}${post}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Function to create robots.txt
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

Sitemap: https://digitalaccountant.com/sitemap.xml`;
};

// Function to generate a JSON-LD schema for the organization
export const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Digital Accountant",
    "url": "https://digitalaccountant.com",
    "logo": "https://digitalaccountant.com/logo.png",
    "description": "Expert accounting services powered by cutting-edge technology. Tax preparation, bookkeeping, financial planning, and payroll solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "telephone": "+1-555-123-4567",
    "email": "hello@digitalaccountant.com",
    "sameAs": [
      "https://facebook.com/digitalaccountant",
      "https://twitter.com/digitalaccountant",
      "https://linkedin.com/company/digitalaccountant",
      "https://instagram.com/digitalaccountant"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Accounting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tax Preparation",
            "description": "Expert tax preparation and planning services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bookkeeping",
            "description": "Comprehensive bookkeeping solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Financial Planning",
            "description": "Strategic financial planning services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Payroll Services",
            "description": "Streamlined payroll processing"
          }
        }
      ]
    }
  };
};