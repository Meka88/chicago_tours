import PLACESFeature from './PLACESFeature'
import './PLACESFeatureList.css'

function PLACESFeatureList(props) {
    const icons = props.features.map((feature) => {
    return <PLACESFeature key={feature} name={feature} />
  })
    return <div className="PLACESFeatureList">{icons}</div>
}

export default PLACESFeatureList
