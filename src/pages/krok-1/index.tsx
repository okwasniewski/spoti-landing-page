import React from 'react'
import MainTemplate from 'templates/mainTemplate'
import { useStaticQuery, graphql } from 'gatsby'
import GridElement from 'components/gridElement'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from 'utils/animations'
import Seo from 'components/seo'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const Index = ({ location }) => {
  const data = useStaticQuery(graphql`
    {
      Company: file(relativePath: { eq: "Company.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Maintenance: file(relativePath: { eq: "Maintenance.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Questions: file(relativePath: { eq: "Questions.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Rising: file(relativePath: { eq: "Rising.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Telecommuting: file(relativePath: { eq: "Telecommuting.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      DataTrends: file(relativePath: { eq: "Data-Trends.png" }) {
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
      <Seo
        pageTitle="Krok 1"
        description="Poznaj platformę e-learningową Spoti"
      />
      <Breadcrumb location={location} crumbLabel="Krok 1" />
      <h1 className="mainTitle">
        Niewiem wiele <br className="rwd-break" />o e-learningu, szukam
        informacji
      </h1>
      <p className="stepsSubTitle">Chcę...</p>

      <motion.div
        className="gridWrapper"
        variants={stagger}
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <GridElement
          variants={fadeInUp}
          fixed={data.Rising.childImageSharp.fixed}
          title="Poznać korzyści z zastosowania elearningu"
          color="#dasd"
          link={
            '/wpis/co-to-jest-platforma-elearningowa-i-jakie-sa-korzysci-z-wykorzystania-w-firmie'
          }
        />

        <GridElement
          variants={fadeInUp}
          fixed={data.DataTrends.childImageSharp.fixed}
          title="Poznać najnowsze trendy w elearningu"
          color="#dasd"
          link={'/wpis/6-najnowszych-trendow-w-e-learningu-ktore-warto-poznac'}
        />
        <GridElement
          variants={fadeInUp}
          fixed={data.Questions.childImageSharp.fixed}
          title="Poznać 9 najczęściej zadawanych pytań dotyczących e-learningu."
          color="#dasd"
          link={
            '/wpis/9-najczesciej-zadawanych-pytan-dotyczacych-e-learningu-i-platformy-spoti'
          }
        />
        <GridElement
          variants={fadeInUp}
          fixed={data.Maintenance.childImageSharp.fixed}
          title="Dowiedzieć się co jest potrzebne do wdrożenia e-learningu"
          color="#dasd"
          link={
            '/wpis/co-jest-potrzebne-do-wdrozenia-e-learningu-szkolen-online-w-firmie'
          }
        />

        <GridElement
          variants={fadeInUp}
          fixed={data.Company.childImageSharp.fixed}
          title="Dowiedzieć się, w jaki sposób platforma Spoti zwiększa 
          efektywność zespołu."
          color="#dasd"
          link={
            '/wpis/w-jaki-sposob-platforma-e-learningowa-spoti-zwieksza-efektywnosc-zespolu'
          }
        />
        <GridElement
          variants={fadeInUp}
          fixed={data.Telecommuting.childImageSharp.fixed}
          title="Umówić się na wstępne spotkanie"
          color="#dasd"
          externalLink={'https://etechnologie.pl/kalendarz-prezentacji/'}
        />
      </motion.div>
    </MainTemplate>
  )
}

export default Index
