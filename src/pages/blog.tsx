import React from 'react'
import MainTemplate from 'templates/mainTemplate'
import { graphql, useStaticQuery } from 'gatsby'
import Seo from 'components/seo'
import GridElement from 'components/gridElement'
const Index = () => {
  const { allWpPost } = useStaticQuery(graphql`
    query AllWordpressPosts {
      allWpPost {
        nodes {
          slug
          id
          title
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fixed(width: 150) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <MainTemplate>
      <Seo
        pageTitle="Blog"
        description="Poznaj platformę e-learningową Spoti"
      />
      <h1 className="mainTitle">
        Poznaj platformę e-learningową <span>S</span>poti<span>*</span>
      </h1>
      <p className="mainSubTitle">Blog</p>

      <div className="gridWrapper">
        {allWpPost.nodes.map((post) => {
          return (
            <GridElement
              key={post.id}
              fixed={post.featuredImage.node.localFile.childImageSharp.fixed}
              color="#dasd"
              link={`/blog/${post.slug}`}
              dangerousTitle={post.title}
            />
          )
        })}
      </div>
    </MainTemplate>
  )
}

export default Index
