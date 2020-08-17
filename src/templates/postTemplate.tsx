import React from 'react'
import MainTemplate from 'templates/mainTemplate'
import { navigate } from 'gatsby'
import Seo from 'components/seo'
import { FaArrowLeft } from 'react-icons/fa'
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
        <button className="mainbutton backButton" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Wróć
        </button>
        <h1 className="post__title">{pageContext.title}</h1>
        <div dangerouslySetInnerHTML={createMarkup()}></div>
      </div>
    </MainTemplate>
  )
}

export default PostTemplate
