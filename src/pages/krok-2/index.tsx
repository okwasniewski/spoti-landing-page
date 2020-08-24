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
          link={'/blog/nowe-funkcje-na-platformie-spoti'}
        />
        <GridElement
          fixed={data.KidsStudying.childImageSharp.fixed}
          title={[
            'Dowiedzieć się jakie szkolenia można tworzyć na platformie ',
            <br className="rwd-break"></br>,
            'e-learningowej Spoti?',
          ]}
          color="#dasd"
          link={'/blog/typy-szkolen-na-platformie-e-learningowej'}
        />
        <GridElement
          fixed={data.PersonalSettings.childImageSharp.fixed}
          title={[
            'Poznać możliwości dostosowania ',
            <br></br>,
            'i personalizacji platformy do moich potrzeb',
          ]}
          color="#dasd"
          link={'/blog/personalizacja-platformy-spoti'}
        />

        <GridElement
          fixed={data.Preferences.childImageSharp.fixed}
          title={[
            'Dowiedzieć się jakie funkcje powinna posiadać nowoczesna ',
            <br></br>,
            'platforma e-learningowa',
          ]}
          color="#dasd"
          link={
            '/blog/jakie-cechy-i-funkcje-powinna-posiadac-nowoczesna-platforma-e-learningowa'
          }
        />
        <GridElement
          fixed={data.Onboarding.childImageSharp.fixed}
          title="Poznać najczęściej spotykane scenariusze wdrożenia platformy Spoti"
          color="#dasd"
          link={
            '/blog/najczesciej-spotykane-scenariusze-wdrozenia-platformy-spoti'
          }
        />
      </div>
    </MainTemplate>
  )
}

export default Index
