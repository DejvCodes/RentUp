import "./Pricing.css"
import { price } from "../../data/Data"
import img from "../../images/pricing.jpg"
import Back from "../../components/Back"
import Heading from "../../components/Heading"

const Pricing = () => {
  return (
    <>
      <div className="back">
        <Back
          name='30 denní záruka vrácení peněz'
          title='Nejlepší ceny na trhu'
          cover={img}
        />
      </div>
      <section className="pricing center padding">
        <div className="container">
          <Heading
            title='Vyberte Si Svůj Balíček'
            subtitle='Najděte ideální plán, který vyhovuje vašim potřebám a získejte maximální hodnotu za své peníze.'
          />
          <div className="price-card grid3 mtop">
            {price.map((item, index) => {
              const { plan, price, ptext } = item
              return <div className="box shadow" key={index}>
                <h3>{plan}</h3>
                <h1 className="price">
                  {price}<span>Kč</span>
                </h1>
                <p>{ptext}</p>
                <ul>
                  {item.list.map((item, index) => {
                    const { icon, text, change } = item
                    return <li key={index}>
                      <label className="center" style={{
                        background: change === "color" ? "#dc35451f" : "#27ae601f",
                        color: change === "color" ? "#dc3848" : "#27ae60"
                      }}>{icon}
                      </label>
                      <p>{text}</p>
                    </li>
                  })}
                </ul>
                <button style={{
                  background: plan === "Standardní" ? "#27ae60" : "#27ae601f",
                  color: plan === "Standardní" ? "#fff" : "#27ae60"
                }}> {plan}
                </button>
              </div>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing