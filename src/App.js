import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./components/SharedLayout"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Services from "./pages/services/Services"
import Pricing from "./pages/pricing/Pricing"
import Contact from "./pages/contact/Contact"

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