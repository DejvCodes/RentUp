import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SharedLayout from "./components/SharedLayout"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Services from "./pages/services/Services"
import Pricing from "./pages/pricing/Pricing"
import Contact from "./pages/contact/Contact"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "o-nas", element: <About /> },
      { path: "nabidky", element: <Services /> },
      { path: "cenik", element: <Pricing /> },
      { path: "kontakt", element: <Contact /> },
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App