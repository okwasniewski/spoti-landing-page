import React from 'react'
import Img from 'gatsby-image'
import './index.scss'
import { Link } from 'gatsby'
type GridElementProps = {
  fixed: any
  title?: any
  badge?: string
  color?: string
  link?: string
  externalLink?: string
  onClick?: any
  dangerousTitle?: any
}
const Index = ({
  fixed,
  title,
  badge,
  color,
  link,
  externalLink,
  onClick,
  dangerousTitle,
}: GridElementProps) => {
  const BadgeStyles = {
    backgroundColor: color,
  }
  function createMarkup(content) {
    return { __html: content }
  }
  if (link) {
    return (
      <Link to={link}>
        <div className="gridElement">
          {badge?.length > 0 ? (
            <div className="gridElement__badgeWrapper" style={BadgeStyles}>
              <p>{badge}</p>
            </div>
          ) : null}

          <div className="gridElement__ImgWrapper">
            <Img fixed={fixed} />
          </div>
          <h4
            className="gridElement__title"
            dangerouslySetInnerHTML={
              dangerousTitle ? createMarkup(dangerousTitle) : null
            }
          >
            {title}
          </h4>
        </div>
      </Link>
    )
  } else if (externalLink) {
    return (
      <a href={externalLink} target="__blank" rel="noopener">
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
      </a>
    )
  } else {
    return (
      <div className="gridElement" onClick={onClick}>
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
    )
  }
}

export default Index
