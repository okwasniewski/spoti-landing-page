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
      <Seo
        pageTitle="Krok 2"
        description="Poznaj platformę e-learningową Spoti"
      />
      <Breadcrumb location={location} crumbLabel="Krok 2" />

      <h1 className="mainTitle">
        Jestem przekonany(-a) <br className="rwd-break" />
        do wykorzystania elearningu
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
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Niewiele wiem o elearningu"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />

        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Jestem przekonany(a)
          do wykorzystania elearningu"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Znam rozwiązania do elearningu"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Niewiele wiem o elearningu"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />

        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Jestem przekonany(a)
          do wykorzystania elearningu"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Znam rozwiązania do elearningu"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
      </motion.div>
    </MainTemplate>
  )
}

export default Index
