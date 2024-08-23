import "./Contact.css"
import img from "../../images/pricing.jpg"
import Back from "../../components/Back"
import Heading from "../../components/Heading"

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="back">
          <Back
            name='Kontaktujte Nás'
            title='Získejte pomoc a přátelskou podporu'
            cover={img}
          />
        </div>
        <section className="contact-section padding">
          <div className="container">
            <Heading
              title='Vyplňte Formulář'
              subtitle='Vyplňte formulář a najděte perfektní nemovitost, která splní všechny Vaše požadavky, a získejte nejlepší nabídky na trhu.'
            />
            <form className="shadow mtop">
              <h4>Vyplnění formuláře:</h4>
              <div>
                <input type="text" placeholder="Jméno:" />
                <input type="email" placeholder="E-mail:" />
              </div>
              <input type="text" placeholder="Předmět:" />
              <textarea cols="30" rows="7" placeholder="Zpráva:"></textarea>
              <button>Odeslat Žádost</button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact