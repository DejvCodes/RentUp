import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./components/common/sharedLayout/SharedLayout"
import Home from "./components/pages/home/Home"
import About from "./components/pages/about/About"
import Services from "./components/pages/services/Services"
import Pricing from "./components/pages/pricing/Pricing"
import Contact from "./components/pages/contact/Contact"

const App = () => {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={ <SharedLayout /> }>
            <Route index element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/services" element={ <Services /> } />
            <Route path="/pricing" element={ <Pricing /> } />
            <Route path="/contact" element={ <Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App