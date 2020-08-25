import React from 'react'
import './index.scss'
import NavLink from 'gatsby-link'
const Index = () => {
  return (
    <div className="burgerWrapper">
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
    </div>
  )
}

export default Index
