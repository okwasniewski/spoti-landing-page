import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import MainTemplate from 'templates/mainTemplate'
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
      <h1 className="mainTitle">
        Poznaj platformę elearningową <span>S</span>poti<span>*</span>
      </h1>
      <p className="mainSubTitle">
        Wszystko co jest potrzebne do prowadzenia szkoleń w internecie
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
        />

        <GridElement
          variants={fadeInUp}
          fixed={data.WorkingImage.childImageSharp.fixed}
          title="Jestem przekonany(a)
          do wykorzystania elearningu"
          badge="Szukam rozwiązania"
          color="#00BFA6"
          link={'/krok-2'}
        />
        <GridElement
          variants={fadeInUp}
          fixed={data.BusinessDeal.childImageSharp.fixed}
          title="Znam rozwiązania do elearningu"
          badge="Potrzebuję konkretów"
          color="#F9A826"
          link={'/krok-3'}
        />
      </motion.div>
    </MainTemplate>
  )
}
export default Index
