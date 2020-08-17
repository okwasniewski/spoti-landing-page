import { graphql, useStaticQuery } from 'gatsby'

export default function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
          facebook
        }
      }
    }
  `)
  return site.siteMetadata
}
