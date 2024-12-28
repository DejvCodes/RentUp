import { list } from "../../../data/Data"

const RecentCard = () => {
  return (
    <>
      <div className="recent-card grid3 mtop">
        {list.map((item, id) => {
          const { cover, category, location, name, price, type } = item
          return <div className="box shadow" key={id}>
            <div className="recent-img">
              <img src={cover} alt="recent-card-img" />
            </div>
            <div className="recent-text">
              <div className="recent-category flex">
                <span style={{
                  background: category === "Na prodej" ? "#25b5791a" : "#ff98001a",
                  color: category === "Na prodej" ? "#25b579" : "#ff9800"
                }}>{category}
                </span>
                <i className="fas fa-heart"></i>
              </div>
              <h4>{name}</h4>
              <p>
                <i className="fa fa-location"></i> {location}
              </p>
            </div>
            <div className="recent-btn">
              <button>{price}</button>
              <span>{type}</span>
            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default RecentCard