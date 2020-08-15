import React from 'react'
import Img from 'gatsby-image'
import './index.scss'

const Index = ({ fixed, title, badge, color }) => {
  return (
    <div className="gridElement">
      <div className="gridElement__badgeWrapper">
        <p>{badge}</p>
      </div>
      <div className="gridElement__ImgWrapper">
        <Img fixed={fixed} />
      </div>
      <h4 className="gridElement__title">{title}</h4>
    </div>
  )
}

export default Index
