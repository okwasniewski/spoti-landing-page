import React from 'react'
import MainTemplate from 'templates/mainTemplate'
import { useStaticQuery, graphql } from 'gatsby'
import GridElement from 'components/gridElement'
import Seo from 'components/seo'

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      SearchingImage: file(relativePath: { eq: "file-searching.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <MainTemplate>
      <Seo
        pageTitle="Krok 3"
        description="Poznaj platformę e-learningową Spoti"
      />
      <h1 className="mainTitle">Znam rozwiązania do elearningu</h1>
      <p className="stepsSubTitle">Chcę...</p>

      <div className="gridWrapper">
        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Dowiedzieć się jakie doświadczenie ma firma eTechnologie"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />

        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Dowiedzieć się dlaczego warto skorzystać właśnie z oferty eTechnologie"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Zapoznać się z ofertą cenową"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Skorzystać z 30 dniowej bezpłatnej wersji testowej"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />

        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Umówić się na spotkanie"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Podpisać umowę"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
      </div>
    </MainTemplate>
  )
}

export default Index
