import { Helmet } from "react-helmet-async";

export type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: Record<string, unknown> | null;
};

const DEFAULT_TITLE = "Digital Accountant - Your Financial Symphony";
const DEFAULT_DESCRIPTION =
  "Professional bookkeeping, tax planning, and financial analysis with a modern digital experience.";
const DEFAULT_IMAGE = "/placeholder.svg";

const SEO = ({
  title,
  description,
  canonical,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  structuredData,
}: SEOProps) => {
  const fullTitle = title ? `${title} | Digital Accountant` : DEFAULT_TITLE;
  const metaDescription = description ?? DEFAULT_DESCRIPTION;
  const canonicalUrl =
    canonical ?? (typeof window !== "undefined" ? window.location.href : undefined);
  const imageUrl = image ?? DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {metaDescription && (
        <meta name="description" content={metaDescription} />
      )}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:title" content={fullTitle} />
      {metaDescription && (
        <meta property="og:description" content={metaDescription} />
      )}
      <meta property="og:type" content={type} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {metaDescription && (
        <meta name="twitter:description" content={metaDescription} />
      )}
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      <meta name="theme-color" content="#0B1120" />
    </Helmet>
  );
};

export default SEO;