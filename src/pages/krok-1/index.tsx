import React from 'react'
import MainTemplate from 'templates/mainTemplate'
import { useStaticQuery, graphql } from 'gatsby'
import GridElement from 'components/gridElement'
import Seo from 'components/seo'

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      Company: file(relativePath: { eq: "Company.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      Maintenance: file(relativePath: { eq: "Maintenance.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      Questions: file(relativePath: { eq: "Questions.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      Rising: file(relativePath: { eq: "Rising.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      Telecommuting: file(relativePath: { eq: "Telecommuting.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      DataTrends: file(relativePath: { eq: "Data-Trends.png" }) {
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
        pageTitle="Krok 1"
        description="Poznaj platformę e-learningową Spoti"
      />
      <h1 className="mainTitle">
        Niewiem wiele <br className="rwd-break" />o e-learningu, szukam
        informacji
      </h1>
      <p className="stepsSubTitle">Chcę...</p>

      <div className="gridWrapper">
        <GridElement
          fixed={data.Rising.childImageSharp.fixed}
          title="Poznać korzyści z zastosowania elearningu"
          color="#dasd"
          link={'/blog/co-to-jest-platforma-e-learningowa'}
        />

        <GridElement
          fixed={data.DataTrends.childImageSharp.fixed}
          title={[
            'Poznać najnowsze trendy ',
            <br className="rwd-break"></br>,
            'w elearningu',
          ]}
          color="#dasd"
          link={'/blog/6-najnowszych-trendow-e-learningu'}
        />
        <GridElement
          fixed={data.Questions.childImageSharp.fixed}
          title="Poznać 9 najczęściej zadawanych pytań dotyczących e-learningu"
          color="#dasd"
          link={'/blog/najczesciej-zadawane-pytania-dotyczace-elearningu'}
        />
        <GridElement
          fixed={data.Maintenance.childImageSharp.fixed}
          title={[
            'Dowiedzieć się co jest potrzebne',
            <br></br>,
            'do wdrożenia e-learningu',
          ]}
          color="#dasd"
          link={'/blog/co-jest-potrzebne-do-wdrozenia-e-learningu'}
        />

        <GridElement
          fixed={data.Company.childImageSharp.fixed}
          title="Dowiedzieć się, w jaki sposób platforma Spoti zwiększa 
          efektywność zespołu"
          color="#dasd"
          link={'/blog/poprawa-efektywnosci-szkolen'}
        />
        <GridElement
          fixed={data.Telecommuting.childImageSharp.fixed}
          title="Umówić się na wstępne spotkanie"
          color="#dasd"
          externalLink={'https://etechnologie.pl/kalendarz-prezentacji/'}
        />
      </div>
    </MainTemplate>
  )
}

export default Index
