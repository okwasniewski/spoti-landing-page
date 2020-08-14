import React from 'react'

const PostTemplate = ({ pageContext }) => {
  function createMarkup() {
    return { __html: pageContext.content }
  }
  console.log(pageContext)
  return <div dangerouslySetInnerHTML={createMarkup()}></div>
}

export default PostTemplate
