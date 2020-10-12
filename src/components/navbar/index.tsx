import React from 'react'
import './index.scss'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import BurgerMenu from 'components/burgerMenu'
import { FaBars } from 'react-icons/fa'
import NavLink from 'gatsby-link'
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
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="navbar">
        <div className="navbar__innerWrapper">
          <Link to="/">
            <Img fixed={LogoData.file.childImageSharp.fixed} />
          </Link>
          <div className="navbar__ButtonInnerWrapper">
            <NavLink
              className="menuLink"
              activeClassName="menuLinkActive"
              to={'/krok-1'}
            >
              Szukam informacji
            </NavLink>
            <NavLink
              className="menuLink"
              activeClassName="menuLinkActive"
              to={'/krok-2'}
            >
              Szukam rozwiązania
            </NavLink>
            <NavLink
              className="menuLink"
              activeClassName="menuLinkActive"
              to={'/krok-3'}
            >
              Potrzebuję konkretów
            </NavLink>
            <a
              className="mainbutton unfilled"
              href="https://spoti.com.pl"
              target="__blank"
              rel="noopener"
            >
              Zobacz demo
            </a>
            <a
              className="mainbutton"
              href="https://bit.ly/2NZ7VNw"
              target="__blank"
              rel="noopener"
            >
              Umów prezentację
            </a>

            <FaBars onClick={HandleBurger} />
          </div>
        </div>
      </div>
      <BurgerMenu />
    </>
  )
}

export default Index
