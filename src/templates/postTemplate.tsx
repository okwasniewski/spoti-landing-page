import React from 'react'
import MainTemplate from 'templates/mainTemplate'

const PostTemplate = ({ pageContext }) => {
  function createMarkup() {
    return { __html: pageContext.content }
  }
  return (
    <MainTemplate>
      <div className="post">
        <h1 className="post__title">{pageContext.title}</h1>
        <div dangerouslySetInnerHTML={createMarkup()}></div>
      </div>
    </MainTemplate>
  )
}

export default PostTemplate
