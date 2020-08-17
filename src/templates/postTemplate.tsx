import React from 'react'
import MainTemplate from 'templates/mainTemplate'
import Seo from 'components/seo'
const PostTemplate = ({ pageContext }) => {
  function createMarkup() {
    return { __html: pageContext.content }
  }
  return (
    <MainTemplate>
      <Seo
        pageTitle={pageContext.title}
        description="Poznaj platformę e-learningową Spoti"
      />
      <div className="post">
        <h1 className="post__title">{pageContext.title}</h1>
        <div dangerouslySetInnerHTML={createMarkup()}></div>
      </div>
    </MainTemplate>
  )
}

export default PostTemplate
