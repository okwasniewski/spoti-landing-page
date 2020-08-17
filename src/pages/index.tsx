import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import MainTemplate from 'templates/mainTemplate'
import GridElement from 'components/gridElement'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from 'utils/animations'
import Seo from 'components/seo'
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
      WorkingImage: file(relativePath: { eq: "Working.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      BusinessDeal: file(relativePath: { eq: "BusinessDeal.png" }) {
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

      <motion.div
        className="mainGridWrapper"
        variants={stagger}
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Niewiele wiem o elearningu"
          badge="Szukam informacji"
          link={'/krok-1'}
          color="#00BFA6"
        />

        <GridElement
          variants={fadeInUp}
          fixed={data.WorkingImage.childImageSharp.fixed}
          title="Jestem przekonany(a)
          do wykorzystania elearningu"
          badge="Szukam rozwiązania"
          link={'/krok-2'}
        />
        <GridElement
          variants={fadeInUp}
          fixed={data.BusinessDeal.childImageSharp.fixed}
          title="Znam rozwiązania do elearningu"
          badge="Potrzebuję konkretów"
          color="#6C63FF"
          link={'/krok-3'}
        />
      </motion.div>
    </MainTemplate>
  )
}
export default Index
