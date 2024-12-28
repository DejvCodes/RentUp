import "./About.css"
import img from "../../images/about.jpg"
import Back from "../../components/Back"
import Heading from "../../components/Heading"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <>
      <section className="about">
        <div className="back">
          <Back
            name='O nás'
            title='O nás - Kdo jsme?'
            cover={img}
          />
        </div>
        <div className="about-content center padding">
          <div className="container flex">
            <div className="left">
              <Heading
                title='Příběh Naší Agentury'
                subtitle='Podívejte se na příběh naší společnosti a pracovní postupy'
              />
              <p>V RentUP věříme, že každý si zaslouží najít své ideální bydlení nebo perfektní investici.
                Jsme přední platforma pro hledání nemovitostí po celém světě, ať už hledáte rodinný dům, byt,
                kancelářské prostory, nebo luxusní vilu.</p>
              <p>Chceme usnadnit a zpříjemnit celý proces hledání a koupě nebo pronájmu nemovitosti. S RentUP
                máte přístup k široké škále nemovitostí a odborným radám, které vám pomohou učinit správná
                rozhodnutí.</p>
              <button className="button">
                <Link to="/services">Naše Služby</Link>
              </button>
            </div>
            <div className="right">
              <img src="../../images/about-us.jpg" alt="O nás" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About