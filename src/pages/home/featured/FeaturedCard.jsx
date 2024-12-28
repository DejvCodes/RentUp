import { featured } from "../../../data/Data"

const FeaturedCard = () => {
  return (
    <>
      <div className="featured-card grid5 mtop">
        {featured.map((item, index) => {
          const { cover, name, total } = item
          return <div className="box" key={index}>
            <img src={cover} alt="feaured card" />
            <h4>{name}</h4>
            <p>{total}</p>
          </div>
        })}
      </div>
    </>
  )
}

export default FeaturedCard