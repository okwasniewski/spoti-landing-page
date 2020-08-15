import React from 'react'
import Img from 'gatsby-image'
import './index.scss'
import { Link } from 'gatsby'
const Index = ({ fixed, title, badge, color, link }) => {
  return (
    <Link to={link}>
      <div className="gridElement">
        <div className="gridElement__badgeWrapper">
          <p>{badge}</p>
        </div>
        <div className="gridElement__ImgWrapper">
          <Img fixed={fixed} />
        </div>
        <h4 className="gridElement__title">{title}</h4>
      </div>
    </Link>
  )
}

export default Index
