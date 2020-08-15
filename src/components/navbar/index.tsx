import React from 'react'
import './index.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BurgerMenu from 'components/burgerMenu'
import { FaBars } from 'react-icons/fa'
const Index = () => {
  const HandleBurger = () => {
    const burger = document.querySelector('.burgerWrapper')
    burger.classList.toggle('active')
  }
  const LogoData = useStaticQuery(graphql`
    query LogoImage {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="navbar">
        <div className="navbar__innerWrapper">
          <Img fixed={LogoData.file.childImageSharp.fixed} />

          <div className="navbar__ButtonInnerWrapper">
            <button className="mainbutton unfilled">Zobacz demo</button>
            <button className="mainbutton">Umów prezentację</button>
            <FaBars onClick={HandleBurger} />
          </div>
        </div>
      </div>
      <BurgerMenu />
    </>
  )
}

export default Index
