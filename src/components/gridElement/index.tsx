import React from 'react'
import Img from 'gatsby-image'
import './index.scss'
import { Link } from 'gatsby'

type GridElementProps = {
  fixed: any
  title: string
  badge?: string
  color?: string
  link: string
}
const Index = ({ fixed, title, badge, color, link }: GridElementProps) => {
  return (
    <Link to={link}>
      <div className="gridElement">
        {badge?.length > 0 ? (
          <div className="gridElement__badgeWrapper">
            <p>{badge}</p>
          </div>
        ) : null}

        <div className="gridElement__ImgWrapper">
          <Img fixed={fixed} />
        </div>
        <h4 className="gridElement__title">{title}</h4>
      </div>
    </Link>
  )
}

export default Index
