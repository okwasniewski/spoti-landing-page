import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import MainTemplate from 'templates/mainTemplate'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Seo from 'components/seo'
const Index = () => {
  const data = useStaticQuery(graphql`
    {
      ErrorImage: file(relativePath: { eq: "404.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <MainTemplate>
      <Seo
        pageTitle="Strona główna"
        description="Poznaj platformę e-learningową Spoti"
      />
      <h1 className="mainTitle">Niestety strona nie została znaleziona!</h1>
      <div className="Wrapper404">
        <div className="Wrapper404__buttonWrapper">
          <Link to="/">
            <button className="mainbutton"> Wróc na stronę główną </button>
          </Link>
        </div>

        <Img fluid={data.ErrorImage.childImageSharp.fluid} />
      </div>
    </MainTemplate>
  )
}
export default Index
