import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: object;
}

export const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://sangronyx.com/logo.png",
  ogType = "website",
  noindex = false,
  structuredData,
}: SEOProps) => {
  const fullTitle = `${title} | Sangronyx Technologies`;
  const canonicalUrl = canonical || `https://sangronyx.com${window.location.pathname}`;
  const ogUrl = `https://sangronyx.com${window.location.pathname}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="bingbot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Sangronyx Technologies" />
      <meta name="pagename" content={title} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicon - Using logo for all pages */}
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
      <link rel="icon" type="image/png" href="/logo.png" />
      <link rel="shortcut icon" type="image/png" href="/logo.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
      <link rel="icon" type="image/x-icon" href="/logo.png" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Sangronyx" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:alt" content={`${title} - Sangronyx Technologies`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${title} - Sangronyx Technologies`} />
      <meta name="twitter:site" content="@Sangronyx" />
      <meta name="twitter:creator" content="@Sangronyx" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="subject" content={keywords.split(", ").slice(0, 5).join(", ")} />
      <meta name="classification" content="Business, Technology, Software, Enterprise Solutions, SAP Services" />
      <meta name="category" content="Technology, Business Software, Enterprise Solutions" />
      <meta name="topic" content={title} />
      <meta name="summary" content={description} />
      <meta name="abstract" content={description} />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

