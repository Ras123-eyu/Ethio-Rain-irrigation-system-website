import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, keywords, schema, type, canonical }) {
  const siteTitle = 'Ethio-Rain Irrigation Systems P.L.C'
  const fullTitle = title ? `${title} | ${siteTitle}` : 'Ethio-Rain | Leading Irrigation Systems & Water Engineering in Ethiopia'
  const metaDescription = description || 'Ethio-Rain Irrigation System P.L.C is Ethiopia’s premier water engineering provider. Turnkey Center Pivot, Drip Irrigation, Solar Pumping, and Electromechanical systems.'
  const metaKeywords = keywords || 'irrigation systems Ethiopia, center pivot irrigation Addis Ababa, drip irrigation Ethiopia, solar water pump Ethiopia, electromechanical water supply'

  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    'name': 'Ethio-Rain Irrigation System P.L.C.',
    'url': 'https://ethiorain.com',
    'logo': '/images/img_4f6613efa42b.webp',
    'description': metaDescription,
    'telephone': '+251 910 61 57 57',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Bole Sub-City',
      'addressLocality': 'Addis Ababa',
      'addressCountry': 'ET'
    },
    'areaServed': 'Ethiopia & East Africa',
    'knowsAbout': [
      'Center Pivot Irrigation Systems',
      'Commercial Drip Irrigation Networks',
      'Solar Powered Submersible Pumps',
      'Electromechanical Water Infrastructure'
    ]
  }

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={metaDescription} />
      <meta name='keywords' content={metaKeywords} />
      {canonical && <link rel='canonical' href={canonical} />}

      {/* Open Graph tags for social media */}
      <meta property='og:type' content={type || 'website'} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:site_name' content='Ethio-Rain Irrigation' />
      <meta property='og:image' content='/images/img_4f6613efa42b.webp' />

      {/* Twitter tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='twitter:image' content='/images/img_4f6613efa42b.webp' />

      {/* Structured Data (Schema.org) */}
      <script type='application/ld+json'>
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  )
}
