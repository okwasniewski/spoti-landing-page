import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import MainTemplate from 'templates/mainTemplate'
import GridElement from 'components/gridElement'
import Seo from 'components/seo'
import Img from 'gatsby-image'
import Telecommuting from 'animations/telecommuting.svg'
import FeaturesElement from 'components/featuresElement'
import {
  FaReply,
  FaUsers,
  FaHeart,
  FaTag,
  FaFileArchive,
  FaSearch,
  FaCheck,
} from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick'
import TestimonialElement from 'components/testiminalElement'
import ModalVideo from 'react-modal-video'
const Index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    focusOnSelect: true,
    adaptiveHeight: true,
    arrows: false,
    centerPadding: '80px',

    responsive: [
      {
        breakpoint: 748,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const data = useStaticQuery(graphql`
    {
      SearchingImage: file(relativePath: { eq: "file-searching.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      WorkingImage: file(relativePath: { eq: "Working.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      BusinessDeal: file(relativePath: { eq: "BusinessDeal.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      Certes: file(relativePath: { eq: "logo/certes-logo.jpg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      Elzab: file(relativePath: { eq: "logo/elzab-logo.jpg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      Enova: file(relativePath: { eq: "logo/enova_logo.jpg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      Getit: file(relativePath: { eq: "logo/getit-bhp-logo.jpg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      InterTeam: file(relativePath: { eq: "logo/inter-team.jpg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      JBB: file(relativePath: { eq: "logo/jbb-logo.jpg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      Tenzi: file(relativePath: { eq: "logo/logo-tenzi-m.jpg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      Nask: file(relativePath: { eq: "logo/logotyp-nask.jpg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      Semahead: file(relativePath: { eq: "logo/semahead-logo.jpg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      ZIW: file(relativePath: { eq: "logo/ziw-logo.jpg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <MainTemplate>
      <Seo
        pageTitle="Strona główna"
        description="Poznaj platformę e-learningową Spoti"
      />
      <h1 className="mainTitle">
        Poznaj platformę <br className="rwd-break"></br> e-learningową{' '}
        <span>S</span>poti<span>*</span>
      </h1>
      <p className="mainSubTitle">
        Wszystko co jest potrzebne do prowadzenia szkoleń w internecie
      </p>
      <div className="TopTwoColumns">
        <div onClick={() => setIsOpen(true)} className="svgWrapper">
          <Telecommuting />
        </div>
        <div className="rightColumn">
          <ul>
            <li>
              <FaCheck /> <p>platforma e-learningowa,</p>
            </li>
            <li>
              <FaCheck />
              <p>intuicyjne kreatory do tworzenia szkoleń, testów i quizów,</p>
            </li>
            <li>
              <FaCheck /> <p>przejrzysty panel do raportowania postępów,</p>
            </li>
            <li>
              <FaCheck /> <p>odpowiedni serwer i stała pomoc techniczna.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="buttonWrapper">
        <button className="mainbutton">
          <a
            href="https://etechnologie.pl/platforma-elearningowa/cennik-dzierzawy/"
            target="__blank"
            rel="noopener"
          >
            Plany i cennik
          </a>
        </button>
        <button className="mainbutton">
          <a href="https://bit.ly/2NZ7VNw" target="__blank" rel="noopener">
            Umów się na prezentacje
          </a>
        </button>
      </div>

      <div className="featuresWrapper">
        <h2 className="mainTitle">
          Najczęściej spotykane scenariusze wykorzystania platformy
          <br></br>
          e-learningowej
        </h2>
        <div className="gridWrapper fixedWidth noMinHeight">
          <FeaturesElement
            title="Szkolenia z norm i przepisów np. RODO, BHP, ISO"
            content="To szkolenia, które muszą odbywać się cyklicznie z tego powodu wdrożenie ich
w formie e-learningu zwraca się bardzo szybko."
          >
            <FaReply />
          </FeaturesElement>
          <FeaturesElement
            title="Szkolenia produktowe działu handlowego"
            content="Znajomość oferty i wiedza o nowych produktach stanowi bardzo skuteczny element budowania przewagi konkurencyjnej."
          >
            <FaUsers />
          </FeaturesElement>
          <FeaturesElement
            title="Wsparcie rozwoju pracowników"
            content="25% pracowników planuje zmianę pracy, głównie z powodu braku możliwości rozwoju i podnoszenia kwalifikacji. "
          >
            <FaHeart />
          </FeaturesElement>
          <FeaturesElement
            title="Rekrutacja i onboarding"
            content="Wdrożenie nowych pracowników nie powinno już odrywać od wykonania zadań bardziej doświadczonych członków zespołu."
          >
            <FaSearch />
          </FeaturesElement>
          <FeaturesElement
            title="Blended learning"
            content="E-learning nie zastępuje tradycyjnych szkoleń, tylko doskonale je uzupełnia i sprawia, że spotkania osobiste stają się dużo bardziej efektywne."
          >
            <FaTag />
          </FeaturesElement>
          <FeaturesElement
            title={[
              'Autoryzacje dla dilerów',
              <br className="rwd-break"></br>,
              ' i partnerów',
            ]}
            content="Doceniaj i motywuj najbardziej aktywnych partnerów handlowych. Ich wiedza bezpośrednio przekłada się na wysokość Twojej sprzedaży."
          >
            <FaFileArchive />
          </FeaturesElement>
        </div>
      </div>
      <h2 className="mainTitle">W jaki sposób możemy pomóc?</h2>
      <p className="mainHelper">
        (Proszę zaznaczyć opis, który najlepiej pasuje do Państwa)
      </p>
      <div className="gridWrapper noMinHeight">
        <GridElement
          fixed={data.SearchingImage.childImageSharp.fixed}
          title="Niewiele wiem o elearningu"
          badge="Szukam informacji"
          link={'/krok-1'}
          color="#00BFA6"
        />

        <GridElement
          fixed={data.WorkingImage.childImageSharp.fixed}
          title={[
            'Jestem przekonany(a)',
            <br className="rwd-break"></br>,
            'do wykorzystania elearningu',
          ]}
          badge="Szukam rozwiązania"
          link={'/krok-2'}
        />
        <GridElement
          fixed={data.BusinessDeal.childImageSharp.fixed}
          title="Znam rozwiązania do elearningu"
          badge="Potrzebuję konkretów"
          color="#6C63FF"
          link={'/krok-3'}
        />
      </div>
      <div className="featuresWrapper">
        <div className="testimonialWrapper">
          <h2 className="mainTitle">Opinie naszych klientów</h2>
          <Slider {...settings}>
            <TestimonialElement
              content="Z przyjemnością potwierdzam, że powierzone prace zostały wykonane profesjonalnie, w uzgodnionym terminie, z należytą starannością oraz zgodnie z oczekiwaniami Zamawiającego."
              name="Wojciech Michota - Z-ca Dyrektora Departamentu Służby Cywilnej"
              jobTitle="Kancelaria Prezesa Rady Ministrów"
            />
            <TestimonialElement
              content="Dyrekcja Wolińskiego Parku Narodowego z przyjemnością potwierdza, że firma eTechnologie Sp. z o.o. zaprojektowała i wykonała interaktywną grę edukacyjną. Rekomendujemy eTechnologie Sp. z o.o. jako rzetelnego wykonawcę."
              name="Arleta Siarkiewicz Hoszowska - Dyrektor"
              jobTitle="Woliński Park Narodowy"
            />
            <TestimonialElement
              content="Potwierdzamy. że eTechnologie. wdrożyła dla naszej Fundacji platformę e-learningową, umożliwiającą prowadzenie szkoleń w internecie. Rekomendujemy firmę jaka rzetelnego wykonawcę rozwiązań związanych z wdrożeniem nowoczesnego e-learningu."
              name="Dominik Górski - Dyrektor"
              jobTitle="Fundacja Rozwoju Demokracji Lokalnej"
            />
            <TestimonialElement
              content="Potwierdzamy, że powierzone prace zostały wykonane z należytą starannością i tym samym rekomendujemy współpracę z firmę eTechnologie Sp. z o.o."
              name="Jacek Madej - Główny Menedżer ds. Projektów Innowacyjnych"
              jobTitle="Polska Fundacja Przedsiębiorczości"
            />
          </Slider>
        </div>
      </div>
      <h2 className="mainTitle">Z naszej platformy korzystają m. in.:</h2>
      <div className="logoWrapper">
        <a
          href="https://etechnologie.pl/nasze-prace/certes/"
          target="__blank"
          rel="noopener"
        >
          <Img fixed={data.Certes.childImageSharp.fixed} />
        </a>
        <a
          href="https://etechnologie.pl/nasze-prace/jbb-team/"
          target="__blank"
          rel="noopener"
        >
          <Img fixed={data.JBB.childImageSharp.fixed} />
        </a>
        <a
          href="https://etechnologie.pl/nasze-prace/elzab/"
          target="__blank"
          rel="noopener"
        >
          <Img fixed={data.Elzab.childImageSharp.fixed} />
        </a>
        <a
          href="https://etechnologie.pl/nasze-prace/get-it/"
          target="__blank"
          rel="noopener"
        >
          <Img fixed={data.Getit.childImageSharp.fixed} />
        </a>
        <a
          href="https://etechnologie.pl/nasze-prace/semahead/"
          target="__blank"
          rel="noopener"
        >
          <Img fixed={data.Semahead.childImageSharp.fixed} />
        </a>
        <a
          href="https://etechnologie.pl/nasze-prace/platforma-e-learningowa-dla-zachodniopomorskiej-inspekcji-weterynaryjnej-w-szczecinie/"
          target="__blank"
          rel="noopener"
        >
          <Img fixed={data.ZIW.childImageSharp.fixed} />
        </a>
        <a
          href="https://etechnologie.pl/nasze-prace/tenzi/"
          target="__blank"
          rel="noopener"
        >
          <Img fixed={data.Tenzi.childImageSharp.fixed} />
        </a>
        <a
          href="https://etechnologie.pl/nasze-prace/inter-team/"
          target="__blank"
          rel="noopener"
        >
          <Img fixed={data.InterTeam.childImageSharp.fixed} />
        </a>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="H4mbVJGN8wM"
        onClose={() => setIsOpen(false)}
      />
    </MainTemplate>
  )
}
export default Index
