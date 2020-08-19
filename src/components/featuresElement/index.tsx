import React from 'react'
import './index.scss'
const Index = ({ title, content, children }: any) => {
  return (
    <div className="features">
      {children}
      <h4 className="features__title">{title}</h4>{' '}
      <p className="features__content">{content}</p>
    </div>
  )
}

export default Index
