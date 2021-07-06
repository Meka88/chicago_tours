import './PLACESDetails.css'
import data from '../places-data/places-data.js'
import PLACESFeatureList from '../PLACESFeature.js/PLACESFeatureList'

function PLACESDetails(props) {
  const { id } = props.match.params // Location index
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div className="PLACESDetails">
      <div className="PLACESDetails-image">
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} />
      </div>

      <div className="PLACESDetails-info">
        <h1 className="PLACESDetails-title">{ title }</h1>
        <p className="PLACESDetails-desc">{ desc }</p>
        <p className="PLACESDetails-hours">{ hours }</p>
        {/* <p className="PLACESDetails-features">{ features }</p> */}
        <p className="PLACESDetails-geo">{ geo.lat } { geo.lon }</p>
        <PLACESFeatureList features={features}/>
        <p className="PLACESDetails-geo">{ geo.lat } { geo.lon }</p>
      </div>

    </div>
  )
}

export default PLACESDetails
