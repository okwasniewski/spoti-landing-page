import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './index.scss'
const Index = () => {
  const Year = new Date().getFullYear()
  const LogoData = useStaticQuery(graphql`
    {
      footerImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      googlePlay: file(relativePath: { eq: "google-play.png" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <footer className="footer">
      <div className="footer__innerWrapper">
        <div className="footer__logoWrapper">
          <Img fixed={LogoData.footerImage.childImageSharp.fixed} />
          <p className="footer__year">
            © {Year} -
            <a href="https://etechnologie.pl/"> eTechnologie Sp. z o.o.</a>
          </p>
        </div>
        <div className="footer__app">
          <p>
            Z platformy Spoti można korzystać również za pomocą bezpłatnej
            <br></br>
            aplikacji mobilnej dla urządzeń z systemem Android
          </p>
          <Img fixed={LogoData.googlePlay.childImageSharp.fixed} />
        </div>
      </div>
    </footer>
  )
}
export default Index
