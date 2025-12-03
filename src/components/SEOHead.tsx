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
  title = "Best Border Bus - Визаран во Вьетнам легко и быстро",
  description = "Визаран из Дананга в Лаос с комфортом. Частный автомобиль, кондиционер, сопровождение на границе, оформление визы по прилёту. Быстро и легально.",
  keywords = "Лучший визаран-сервис, Лучшая виза в Дананге, Виза рядом со мной, Визаран, Визаран из Дананга, Визаран из Хойана, Визаран Дананг-Хойан, Визаран Дананг, Вождение во Вьетнаме, Хойан, Визаран Хойан, Визаран Лао Бао, Виза по прилёту в Лаос, Визаран в Лаос, Водительские права, Lynn Visa, Lynnvisa сервис, Переезд во Вьетнам, Лучшая услуга визарана, Вьетнам, Вьетнамская виза, Визаран из Дананга, Визаран из Хойана, Виза для жизни во Вьетнаме, Виза во Вьетнам",
  canonical = "https://danangvisarun.com/",
  hreflang = [
    { lang: "ru", url: "https://danangvisarun.com/" },
    { lang: "en", url: "https://danangvisarun.com/en/" },
    { lang: "x-default", url: "https://danangvisarun.com/" }
  ],
  ogTitle,
  ogDescription,
  ogImage = "https://danangvisarun.com/og-image.jpg",
  ogUrl = "https://danangvisarun.com/"
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
      <meta httpEquiv="Content-Language" content="ru" />
    </Helmet>
  );
};

export default SEOHead;