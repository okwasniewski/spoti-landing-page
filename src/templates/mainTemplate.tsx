import React from 'react'
import Navbar from 'components/navbar'
import 'scss/index.scss'
import Footer from 'components/footer'
const Index = ({ children }) => {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="main__contentWrapper">
          <div className="main__contentInnerWrapper"> {children}</div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Index
