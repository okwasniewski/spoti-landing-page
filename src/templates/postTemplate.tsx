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
      slug
      seo {
        metaDesc
        metaKeywords
        title
        opengraphDescription
        opengraphTitle
        opengraphSiteName
        opengraphImage {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
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
  function createMarkup(content) {
    return { __html: content }
  }
  const seoTitle = wpPost.title.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g, '')
  return (
    <MainTemplate>
      <Seo
        pageTitle={wpPost?.seo?.title ? wpPost?.seo?.title : seoTitle}
        description={
          wpPost?.seo?.metaDesc
            ? wpPost?.seo?.metaDesc
            : 'Platforma e-learningowa Spoti'
        }
        canonical={wpPost?.slug}
        keywords={wpPost?.seo?.metaKeywords}
        slug={wpPost?.slug}
        ogImage={
          wpPost?.featuredImage?.node?.localFile?.childImageSharp?.fixed?.src
        }
      />

      <div className="post">
        <button className="mainbutton backButton" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Wróć
        </button>
        <h1
          className="post__title"
          dangerouslySetInnerHTML={createMarkup(wpPost.title)}
        ></h1>
        <div className="post__featuredImage">
          {wpPost?.featuredImage?.node?.localFile ? (
            <Img
              fixed={wpPost.featuredImage.node.localFile.childImageSharp.fixed}
            />
          ) : (
            ''
          )}
        </div>
        <div dangerouslySetInnerHTML={createMarkup(wpPost.content)}></div>
      </div>
    </MainTemplate>
  )
}

export default PostTemplate
