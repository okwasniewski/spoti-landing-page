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
      <h1 className="mainTitle">
        Niewiem wiele <br className="rwd-break" />o e-learningu, szukam
        informacji
      </h1>
      <p className="stepsSubTitle">Chcę...</p>

      <div className="gridWrapper">
        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Poznać korzyści z zastosowania elearningu"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />

        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Poznać najnowsze trendy w elearningu"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Poznać 9 najczęściej zadawanych pytań dotyczących e-learningu."
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Dowiedzieć się co jest potrzebne do wdrożenia e-learningu"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />

        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Dowiedzieć się, w jaki sposób platforma Spoti zwiększa 
          efektywność zespołu."
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Umówić się na wstępne spotkanie"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
      </div>
    </MainTemplate>
  )
}

export default Index
