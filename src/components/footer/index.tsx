import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './index.scss'
const Index = () => {
  const Year = new Date().getFullYear()
  const LogoData = useStaticQuery(graphql`
    {
      footerImage: file(relativePath: { eq: "logo-etechnologie.png" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      googlePlay: file(relativePath: { eq: "google-play.png" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <footer className="footer">
      <div className="footer__innerWrapper">
        <div className="footer__logoWrapper">
          <a href="https://etechnologie.pl/" target="__blank" rel="noopener">
            <Img fixed={LogoData.footerImage.childImageSharp.fixed} />
          </a>

          <p className="footer__year">
            © {Year} - Spoti jest e-learningową platformą demonstracyjną
            <br></br>
            przygotowaną przez <span> </span>
            <a href="https://etechnologie.pl/" target="__blank" rel="noopener">
              eTechnologie Sp. z o.o.
            </a>
          </p>
        </div>
        <div className="footer__app">
          <p>
            Z platformy Spoti można korzystać również za pomocą bezpłatnej
            <br></br>
            aplikacji mobilnej dla urządzeń z systemem Android
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.eTechnologie.Spoti"
            target="__blank"
            rel="noopener"
          >
            <Img fixed={LogoData.googlePlay.childImageSharp.fixed} />
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Index
