import React from 'react'
import MainTemplate from 'templates/mainTemplate'
import { useStaticQuery, graphql } from 'gatsby'
import GridElement from 'components/gridElement'
const Index = () => {
  const data = useStaticQuery(graphql`
    {
      SearchingImage: file(relativePath: { eq: "file-searching.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <MainTemplate>
      <h1 className="mainTitle">Znam rozwiązania do elearningu</h1>
      <p className="stepsSubTitle">Chcę...</p>

      <div className="gridWrapper">
        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Niewiele wiem o elearningu"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />

        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Jestem przekonany(a)
          do wykorzystania elearningu"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Znam rozwiązania do elearningu"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Niewiele wiem o elearningu"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />

        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Jestem przekonany(a)
          do wykorzystania elearningu"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Znam rozwiązania do elearningu"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
      </div>
    </MainTemplate>
  )
}

export default Index
