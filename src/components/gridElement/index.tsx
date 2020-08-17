import React from 'react'
import Img from 'gatsby-image'
import './index.scss'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
type GridElementProps = {
  fixed: any
  title: string
  badge?: string
  color?: string
  link?: string
  externalLink?: string
  variants?: any
  onClick?: any
}
const Index = ({
  fixed,
  title,
  badge,
  color,
  link,
  externalLink,
  variants,
  onClick,
}: GridElementProps) => {
  const BadgeStyles = {
    backgroundColor: color,
  }
  if (link) {
    return (
      <Link to={link}>
        <motion.div className="gridElement" variants={variants}>
          {badge?.length > 0 ? (
            <div className="gridElement__badgeWrapper" style={BadgeStyles}>
              <p>{badge}</p>
            </div>
          ) : null}

          <div className="gridElement__ImgWrapper">
            <Img fixed={fixed} />
          </div>
          <h4 className="gridElement__title">{title}</h4>
        </motion.div>
      </Link>
    )
  } else if (externalLink) {
    return (
      <a href={externalLink} target="__blank" rel="noopener">
        <motion.div variants={variants} className="gridElement">
          {badge?.length > 0 ? (
            <div className="gridElement__badgeWrapper">
              <p>{badge}</p>
            </div>
          ) : null}

          <div className="gridElement__ImgWrapper">
            <Img fixed={fixed} />
          </div>
          <h4 className="gridElement__title">{title}</h4>
        </motion.div>
      </a>
    )
  } else {
    return (
      <motion.div variants={variants} className="gridElement" onClick={onClick}>
        {badge?.length > 0 ? (
          <div className="gridElement__badgeWrapper">
            <p>{badge}</p>
          </div>
        ) : null}

        <div className="gridElement__ImgWrapper">
          <Img fixed={fixed} />
        </div>
        <h4 className="gridElement__title">{title}</h4>
      </motion.div>
    )
  }
}

export default Index
