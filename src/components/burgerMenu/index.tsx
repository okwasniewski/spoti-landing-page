import React from 'react'
import './index.scss'

const Index = () => {
  return (
    <div className="burgerWrapper">
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
