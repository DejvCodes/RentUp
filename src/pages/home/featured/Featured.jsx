import "./Featured.css"
import Heading from "../../../components/Heading"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <div className="featured background center padding">
        <div className="container">
          <Heading
            title='Doporučené Typy Nemovitostí '
            subtitle='Najít všechny typy nemovitostí.'
          />
          <FeaturedCard />
        </div>
      </div>
    </>
  )
}

export default Featured