import "./Location.css"
import { location } from "../../../data/Data"
import Heading from "../../../components/Heading"

const Location = () => {
  return (
    <>
      <section className="location center padding">
        <div className="container">
          <Heading
            title='Nejvyhledávanější Místa'
            subtitle='Objevte jedinečné kouzlo a živou kulturu některých z nejvyhledávanějších 
            destinací. Ať už hledáte útulnou vilu, moderní kancelářské prostory nebo stylový byt,
            máme různé možnosti, které vyhovují vašim potřebám.'
          />
          <div className="grid3 mtop">
            {location.map((item, index) => {
              const { name, Villas, Apartments, Offices, cover } = item
              return <div className="box" key={index}>
                <img src={cover} alt="lokace" />
                <div className="overlay">
                  <h5>{name}</h5>
                  <div className="all-p">
                    <p>{Villas}</p>
                    <p>{Offices}</p>
                    <p>{Apartments}</p>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location