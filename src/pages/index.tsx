import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import MainTemplate from 'templates/mainTemplate'
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
      <h1 className="mainTitle">
        Poznaj platformę elearningową <span>S</span>poti<span>*</span>{' '}
      </h1>
      <p className="mainSubTitle">
        Wszystko co jest potrzebne do prowadzenia szkoleń w internecie
      </p>

      <div className="mainGridWrapper">
        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Niewiele wiem o elearningu"
          badge="Szukam informacji"
          color="#dasd"
          link={''}
        />

        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Jestem przekonany(a)
          do wykorzystania elearningu"
          badge="Szukam rozwiązania"
          color="#dasd"
          link={''}
        />
        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Znam rozwiązania do elearningu"
          badge="Potrzebuję konkretów"
          color="#dasd"
          link={''}
        />
      </div>
    </MainTemplate>
  )
}
export default Index
