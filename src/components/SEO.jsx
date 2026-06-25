import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, name, type }) {
  const siteTitle = 'Ethio-Rain Irrigation Systems P.L.C'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const metaDescription = description || 'Ethio-Rain Irrigation System P.L.C is a reliable partner for irrigation and water solutions in Ethiopia. We offer center pivots, drip systems, pumps, and more.'

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={metaDescription} />
      
      {/* Open Graph tags for social media */}
      <meta property='og:type' content={type || 'website'} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={metaDescription} />
      
      {/* Twitter tags */}
      <meta name='twitter:creator' content={name || 'Ethio-Rain'} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={metaDescription} />
    </Helmet>
  )
}
