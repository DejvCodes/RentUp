import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <section className="footer-content center">
        <div className="container">
          <div className="contact-us flex">
            <div className="text">
              <h1>Máte Nějaké Dotazy?</h1>
              <p>Pomůžeme vám rozvíjet kariéru a růst.</p>
            </div>
            <button className="button">
              <Link to="/contact">Kontaktujte Nás</Link>
            </button>
          </div>
        </div>
      </section>

      <footer className="center padding">
        <div className="container">
          <div className="left-box">
            <h2>Potřebujete S Něčím Pomoci?</h2>
            <p>Dostávejte každý měsíc aktualizace, horké nabídky, výukové programy a slevy
              přímo do své schránky.</p>
          </div>
          <div className="right-box">
            <input type="email" placeholder="E-mail" />
            <button>Odeslat</button>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <span>© 2024 RentUP. David Kalmus</span>
      </div>
    </>
  )
}

export default Footer