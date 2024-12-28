import "./Hero.css"
import Heading from "../../../components/Heading"

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Heading
            title='Najděte Svůj Příští Domov'
            subtitle='Najděte nové a doporučené nemovitosti v zahraničí.'
          />
          <form className="form flex">
            <div className="box">
              <span>Město/ulice</span>
              <input type="text" placeholder="Umístění:" />
            </div>
            <div className="box">
              <span>Typ nemovitosti</span>
              <input type="text" placeholder="Typ:" />
            </div>
            <div className="box">
              <span>Cenové rozpětí</span>
              <input type="text" placeholder="Cena:" />
            </div>
            <div className="box">
              <button className="form-btn">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Hero