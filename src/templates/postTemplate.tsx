import React from 'react'
import MainTemplate from 'templates/mainTemplate'
import { navigate, graphql } from 'gatsby'
import Seo from 'components/seo'
import { FaArrowLeft } from 'react-icons/fa'
import Img from 'gatsby-image'
export const PostQuery = graphql`
  query MyQuery($PostID: String!) {
    wpPost(id: { eq: $PostID }) {
      content
      title
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  }
`
const PostTemplate = ({ data: { wpPost } }) => {
  function createMarkup() {
    return { __html: wpPost.content }
  }
  console.log(wpPost)
  return (
    <MainTemplate>
      <Seo
        pageTitle={wpPost.title}
        description="Poznaj platformę e-learningową Spoti"
      />

      <div className="post">
        <button className="mainbutton backButton" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Wróć
        </button>
        <h1 className="post__title">{wpPost.title}</h1>
        <div className="post__featuredImage">
          {wpPost?.featuredImage?.node?.localFile ? (
            <Img
              fixed={wpPost.featuredImage.node.localFile.childImageSharp.fixed}
            />
          ) : (
            ''
          )}
        </div>
        <div dangerouslySetInnerHTML={createMarkup()}></div>
      </div>
    </MainTemplate>
  )
}

export default PostTemplate
