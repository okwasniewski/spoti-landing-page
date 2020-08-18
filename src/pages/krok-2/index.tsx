import React from 'react'
import MainTemplate from 'templates/mainTemplate'
import { useStaticQuery, graphql } from 'gatsby'
import GridElement from 'components/gridElement'
import Seo from 'components/seo'

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      Creativity: file(relativePath: { eq: "Creativity.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      FeaturesOverview: file(relativePath: { eq: "Features-Overview.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      KidsStudying: file(relativePath: { eq: "Kids-Studying.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      Onboarding: file(relativePath: { eq: "Onboarding.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      PersonalSettings: file(relativePath: { eq: "Personal-settings.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      Preferences: file(relativePath: { eq: "Preferences.png" }) {
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
        pageTitle="Krok 2"
        description="Poznaj platformę e-learningową Spoti"
      />

      <h1 className="mainTitle">
        Jestem przekonany(-a) <br className="rwd-break" />
        do wykorzystania elearningu
      </h1>
      <p className="stepsSubTitle">Chcę...</p>

      <div className="gridWrapper">
        <GridElement
          fixed={data.Creativity.childImageSharp.fixed}
          title="Zobaczyć jak wygląda proces tworzenia szkoleń na platformie"
          color="#dasd"
          externalLink={
            'https://spoti.com.pl/zagadnienia/1-tworzenie-struktury-szkolenia/'
          }
        />

        <GridElement
          fixed={data.FeaturesOverview.childImageSharp.fixed}
          title="Poznać możliwości platformy Spoti"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          fixed={data.KidsStudying.childImageSharp.fixed}
          title="Dowiedzieć się jakie szkolenia można tworzyć na platformie e-learningowej Spoti?"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          fixed={data.PersonalSettings.childImageSharp.fixed}
          title="Poznać możliwości dostosowania i personalizacji platformy do moich potrzeb"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />

        <GridElement
          fixed={data.Preferences.childImageSharp.fixed}
          title="Dowiedzieć się jakie funkcje powinna posiadać nowoczesna platformą e-learningowa"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
        <GridElement
          fixed={data.Onboarding.childImageSharp.fixed}
          title="Poznać najczęściej spotykane scenariusze wdrożenia platformy Spoti"
          color="#dasd"
          link={'/post/cG9zdDo4MTI='}
        />
      </div>
    </MainTemplate>
  )
}

export default Index
