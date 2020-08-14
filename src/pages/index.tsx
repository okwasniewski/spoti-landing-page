import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import * as styles from './Index.module.scss'
import './index.scss'
import ModalVideo from 'react-modal-video'
const Index = () => {
  const data = useStaticQuery(graphql`
    query wpPosts {
      allWpPost {
        nodes {
          content
          id
          title
        }
      }
    }
  `)
  console.log(data.allWpPost.nodes)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className={styles.Container}>
      <h1> Hello </h1>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="H4mbVJGN8wM"
        onClose={() => setIsOpen(false)}
      />
      <button onClick={() => setIsOpen(true)}>Open youtube video</button>
      {data.allWpPost.nodes.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`post/${item.id}`}>{item.title}</Link>
          </div>
        )
      })}
    </div>
  )
}
export default Index
