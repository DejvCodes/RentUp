import "./Header.css"
import { nav } from "../data/Data"
import { NavLink, Link } from "react-router-dom"
import { useState } from "react"

const Header = () => {
  const [navList, setNavList] = useState(false)

  // Funkce pro zavření menu po kliknutí na Link
  const closeMenu = () => {
    // Zavření menu
    setNavList(!navList)
    // Odscrollovaní nahoru
    window.scrollTo({ top: 0 });
  }

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo-img">
            <Link onClick={() => setNavList(false)} to='/'>
              <img src="../images/logo.png" alt="rentup - logo" />
            </Link>
          </div>
          <nav className="navigation">
            <ul className={navList ? "nav-menu show" : "nav-menu hide"}>
              {nav.map((list, index) => {
                const { text, path } = list
                return <li key={index}>
                  <NavLink onClick={() => closeMenu()} to={path}>{text}</NavLink>
                </li>
              })}
            </ul>
          </nav>
          <div className="menu-button flex">
            <h4>
              <span>0</span> Oblíbené
            </h4>
            <button className="btn1">
              <i className="fa fa-sign-out"></i>
            </button>
          </div>
          <div className="toogle-btn">
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header