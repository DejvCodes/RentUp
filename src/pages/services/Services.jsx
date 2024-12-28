import img from "../../images/services.jpg"
import Back from "../../components/Back"
import Recent from "../home/recent/Recent"

const Service = () => {
  return (
    <>
      <div className="services">
        <div className="back">
          <Back
            name='Nábídky'
            title='Nábídky - Vyberte si nemovitost'
            cover={img}
          />
        </div>
        <Recent />
      </div>
    </>
  )
}

export default Service