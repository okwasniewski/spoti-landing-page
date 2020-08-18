import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import MainTemplate from 'templates/mainTemplate'
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
      WorkingImage: file(relativePath: { eq: "Working.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      BusinessDeal: file(relativePath: { eq: "BusinessDeal.png" }) {
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
        pageTitle="Strona główna"
        description="Poznaj platformę e-learningową Spoti"
      />
      <h1 className="mainTitle">
        Specjalizujemy się w szkoleniach online i e-learningu.
      </h1>
      <p className="mainSubTitle">
        W jaki sposób możemy pomóc? (Proszę zaznaczyć opis, który najlepiej
        pasuje do Państwa)
      </p>

      <div className="mainGridWrapper">
        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Niewiele wiem o elearningu"
          badge="Szukam informacji"
          link={'/krok-1'}
          color="#00BFA6"
        />

        <GridElement
          fixed={data.WorkingImage.childImageSharp.fixed}
          title="Jestem przekonany(a)
          do wykorzystania elearningu"
          badge="Szukam rozwiązania"
          link={'/krok-2'}
        />
        <GridElement
          fixed={data.BusinessDeal.childImageSharp.fixed}
          title="Znam rozwiązania do elearningu"
          badge="Potrzebuję konkretów"
          color="#6C63FF"
          link={'/krok-3'}
        />
      </div>
    </MainTemplate>
  )
}
export default Index
