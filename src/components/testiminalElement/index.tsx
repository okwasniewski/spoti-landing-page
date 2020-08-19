import React from 'react'
import './index.scss'
const Index = ({ name, content, jobTitle }) => {
  return (
    <div className="testimonial">
      <p className="testimonial__content">{content}</p>
      <h4 className="testimonial__name">{name}</h4>
      <p className="testimonial__jobTitle">{jobTitle}</p>
    </div>
  )
}

export default Index
