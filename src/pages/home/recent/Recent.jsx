import "./Recent.css"
import RecentCard from "./RecentCard"
import Heading from "../../../components/Heading"

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