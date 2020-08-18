import React from 'react'
import MainTemplate from 'templates/mainTemplate'
import { useStaticQuery, graphql } from 'gatsby'
import GridElement from 'components/gridElement'
import Seo from 'components/seo'

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      Typing: file(relativePath: { eq: "Typing.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      TelecommutingPurple: file(
        relativePath: { eq: "Telecommuting-purple.png" }
      ) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      RevenueRafiki: file(relativePath: { eq: "Revenue-rafiki.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      ResumeFolder: file(relativePath: { eq: "Resume-folder.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      PieChart: file(relativePath: { eq: "Pie-chart.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      Agreement: file(relativePath: { eq: "Agreement.png" }) {
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
          fixed={data.ResumeFolder.childImageSharp.fixed}
          title="Dowiedzieć się jakie doświadczenie ma firma eTechnologie"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />

        <GridElement
          fixed={data.PieChart.childImageSharp.fixed}
          title="Dowiedzieć się dlaczego warto skorzystać właśnie z oferty eTechnologie"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          fixed={data.RevenueRafiki.childImageSharp.fixed}
          title="Zapoznać się z ofertą cenową"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          fixed={data.Typing.childImageSharp.fixed}
          title="Skorzystać z 30 dniowej bezpłatnej wersji testowej"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />

        <GridElement
          fixed={data.TelecommutingPurple.childImageSharp.fixed}
          title="Umówić się na spotkanie"
          color="#dasd"
          externalLink={'https://bit.ly/2NZ7VNw'}
        />
        <GridElement
          fixed={data.Agreement.childImageSharp.fixed}
          title="Podpisać umowę"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
      </div>
    </MainTemplate>
  )
}

export default Index
