import React from 'react'
import Hemlet from 'react-helmet'
import useSiteMetadata from 'hooks/use-site-metadata'

type SEOTypes = {
  pageTitle: string
  description: string
  canonical?: string
}
const Index = ({ pageTitle, description, canonical }: SEOTypes) => {
  const { siteUrl, title } = useSiteMetadata()
  const href = `${siteUrl}${pageTitle}`
  return (
    <Hemlet>
      <html lang="pl" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <title>{`${title} - ${pageTitle}`}</title>
      <meta name="description" content={description} />
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
    </Hemlet>
  )
}

export default Index
