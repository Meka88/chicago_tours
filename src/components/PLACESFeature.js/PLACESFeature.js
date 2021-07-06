import './PLACESFeature.css'

function getFeature(str) {
    switch(str) {
        case 'outdoors':
            return '🌲'
        case 'coffee':
            return '☕️'
        case 'art':
            return '🖼'
        case 'toilet':
            return '🚽'
        case 'power':
            return '🔌'
        default:
            return '？'
    }
}
function PLACESFeature(props) {
    const emoji = getFeature(props.name)
    return <div className="PLACESFeature">{emoji}</div>
}
export default PLACESFeature
