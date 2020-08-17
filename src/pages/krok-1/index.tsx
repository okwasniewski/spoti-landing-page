import React, { useState } from 'react'
import MainTemplate from 'templates/mainTemplate'
import { useStaticQuery, graphql } from 'gatsby'
import GridElement from 'components/gridElement'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from 'utils/animations'
import ModalVideo from 'react-modal-video'
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
  const [isOpen, setIsOpen] = useState(false)
  const [videoID, setVideoID] = useState('')
  const HandleVideoChange = (id) => {
    setIsOpen(true)
    setVideoID(id)
  }
  return (
    <MainTemplate>
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
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Poznać korzyści z zastosowania elearningu"
          color="#dasd"
          onClick={() => HandleVideoChange('K7yZbpOr-fw')}
        />

        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Poznać najnowsze trendy w elearningu"
          color="#dasd"
          onClick={() => HandleVideoChange('H4mbVJGN8wM')}
        />
        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Poznać 9 najczęściej zadawanych pytań dotyczących e-learningu."
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Dowiedzieć się co jest potrzebne do wdrożenia e-learningu"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />

        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Dowiedzieć się, w jaki sposób platforma Spoti zwiększa 
          efektywność zespołu."
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          variants={fadeInUp}
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Umówić się na wstępne spotkanie"
          color="#dasd"
          externalLink={'https://etechnologie.pl/kalendarz-prezentacji/'}
        />
      </motion.div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoID}
        onClose={() => setIsOpen(false)}
      />
    </MainTemplate>
  )
}

export default Index
