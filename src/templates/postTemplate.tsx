import React from 'react'
import MainTemplate from 'templates/mainTemplate'
import Seo from 'components/seo'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
const PostTemplate = ({ pageContext, location }) => {
  function createMarkup() {
    return { __html: pageContext.content }
  }
  return (
    <MainTemplate>
      <Seo
        pageTitle={pageContext.title}
        description="Poznaj platformę e-learningową Spoti"
      />
      <Breadcrumb location={location} crumbLabel={pageContext.title} />
      <div className="post">
        <h1 className="post__title">{pageContext.title}</h1>
        <div dangerouslySetInnerHTML={createMarkup()}></div>
      </div>
    </MainTemplate>
  )
}

export default PostTemplate
