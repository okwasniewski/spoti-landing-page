import React from 'react'
import Hemlet from 'react-helmet'
import useSiteMetadata from 'hooks/use-site-metadata'

type SEOTypes = {
  pageTitle: string
  description: string
  canonical?: string
  ogImage?: any
  keywords?: any
  slug?: string
}
const Index = ({
  pageTitle,
  description,
  canonical,
  ogImage,
  keywords,
  slug,
}: SEOTypes) => {
  const { siteUrl, title } = useSiteMetadata()
  const href = `${siteUrl}${slug}`
  return (
    <Hemlet>
      <html lang="pl" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical ? (
        <link rel="canonical" href={`https://etechnologie.pl/${canonical}`} />
      ) : (
        ''
      )}
      {/* OpenGraph tags */}
      <meta property="og:url" content={href} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pl" />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:image" content={siteUrl.concat(ogImage)} />
      <meta property="og:description" content={description} />
    </Hemlet>
  )
}

export default Index
