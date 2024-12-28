import "./Back.css"

const Back = ({ name, title, cover }) => {
  return <>
    <div className="container">
      <span>{name}</span>
      <h1>{title}</h1>
    </div>
    <img src={cover} alt="rentup-pozadí" />
  </>
}

export default Back