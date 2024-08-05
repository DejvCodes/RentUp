import "./Recent.css"
import Heading from "../../../common/heading/Heading"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className="recent center padding">
        <div className="container">
          <Heading
            title='Nedávno Uvedené Nemovitosti' 
            subtitle='Prohlédněte si naši aktuální nabídku nejnovějších nemovitostí na trhu.'
          />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent