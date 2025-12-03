import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  hreflang?: Array<{ lang: string; url: string }>;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Best Border Bus - Vietnam Visa Run Easy and Fast",
  description = "Visa run from Danang to Laos. Private car, fast border crossing, visa on arrival assistance, air-conditioned vehicle. Easy, safe and fast process.",
  keywords = "Best visa run service, Best visa service in Danang, Best visa service near here, Border run, Border run Danang, Border run from Danang, Border run Hoian, Danang Hoian visa run, Danang visa run, driving, Hoian, Hoian Border run, Lao Bao Border Run, Laos visa on arrival, Laos visa run, licence, Lynnvisa, Lynn Visa, Lynn Visa Border Run Service, Relocate in Vietnam, test, the best border run service, vietnam, Vietnam visa, visa from Danang, visa run, visa run from Hoian, Visa to live in Vietnam, Visa to Vietnam",
  canonical = "https://danangvisarun.com/en/",
  hreflang = [
    { lang: "en", url: "https://danangvisarun.com/en/" },
    { lang: "ru", url: "https://danangvisarun.com/" },
    { lang: "x-default", url: "https://danangvisarun.com/" }
  ],
  ogTitle,
  ogDescription,
  ogImage = "https://danangvisarun.com/og-image.jpg",
  ogUrl = "https://danangvisarun.com/en/"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Hreflang tags */}
      {hreflang.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Open Graph tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Best Border Bus" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Best Border Bus" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
    </Helmet>
  );
};

export default SEOHead;