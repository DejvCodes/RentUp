import "./Awards.css"
import { awards } from "../../../data/Data"
import Heading from "../../../components/Heading"

const Awards = () => {
  return (
    <>
      <section className="awards center padding">
        <div className="container">
          <Heading
            title='Více než 1,24,000+ spokojených zákazníků'
            subtitle='Naše Ocenění'
          />
          <div className="grid4 mtop">
            {awards.map((item, index) => {
              const { icon, num, name } = item
              return <div className="box" key={index}>
                <div className="icon center">
                  <span>{icon}</span>
                </div>
                <h1>{num}</h1>
                <p>{name}</p>
              </div>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Awards