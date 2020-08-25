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
            ...GatsbyImageSharpFixed_withWebp
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
            <button className="mainbutton unfilled">
              <a href="https://spoti.com.pl" target="__blank" rel="noopener">
                Zobacz demo
              </a>
            </button>
            <button className="mainbutton">
              <a href="https://bit.ly/2NZ7VNw" target="__blank" rel="noopener">
                Umów prezentację
              </a>
            </button>

            <FaBars onClick={HandleBurger} />
          </div>
        </div>
      </div>
      <BurgerMenu />
    </>
  )
}

export default Index
