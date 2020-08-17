import React from 'react'
import MainTemplate from 'templates/mainTemplate'
import { useStaticQuery, graphql } from 'gatsby'
import GridElement from 'components/gridElement'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from 'utils/animations'
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

      <motion.div
        className="gridWrapper"
        variants={stagger}
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Dowiedzieć się jakie doświadczenie ma firma eTechnologie"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />

        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Dowiedzieć się dlaczego warto skorzystać właśnie z oferty eTechnologie"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Zapoznać się z ofertą cenową"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Skorzystać z 30 dniowej bezpłatnej wersji testowej"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />

        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Umówić się na spotkanie"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Podpisać umowę"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
      </motion.div>
    </MainTemplate>
  )
}

export default Index
