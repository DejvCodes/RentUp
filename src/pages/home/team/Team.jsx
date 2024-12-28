import "./Team.css"
import { team } from "../../../data/Data"
import Heading from "../../../components/Heading"

const Team = () => {
  return (
    <>
      <section className="team background center padding">
        <div className="container">
          <Heading
            title='Naši Vynikající Makléři'
            subtitle='Objevte špičkové odborníky, kteří vám pomohou najít Váš vysněný domov nebo 
            perfektní investici. Naši zkušení makléři jsou připraveni poskytnout Vám nejlepší 
            služby na trhu.'
          />
          <div className="team-cards grid3 mtop">
            {team.map((item, index) => {
              const { cover, address, name } = item
              return <div className="box" key={index}>
                <div className="details">
                  <div className="img">
                    <img src={cover} alt="zamestnanci" />
                    <i className="fas fa-circle-check"></i>
                  </div>
                  <i className="fa fa-location-dot"></i>
                  <label>{address}</label>
                  <h4>{name}</h4>
                  <ul className="center">
                    {item.icon.map((icon, index) => {
                      return <li className="center" key={index}>{icon}</li>
                    })}
                  </ul>
                  <button className="btn">
                    <i className="fa fa-envelope"></i> Zpráva
                  </button>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team 