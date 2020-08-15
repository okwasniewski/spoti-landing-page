import React from 'react'

const PostTemplate = ({ pageContext }) => {
  function createMarkup() {
    return { __html: pageContext.content }
  }
  return <div dangerouslySetInnerHTML={createMarkup()}></div>
}

export default PostTemplate
