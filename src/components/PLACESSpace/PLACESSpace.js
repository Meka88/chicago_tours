import './PLACESSpace.css';
import { Link } from 'react-router-dom'

function PLACESSpace(props) {
    const { name, image, address, hours, id } = props
    return (
        <div className="PLACESSpace">
            <Link className="PLACESSpace-title" to={`/details/${id}`}>
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} 
            width="300" height="300" alt="Hello" />
            </Link>
            <Link to={`/details/${id}`}>
            <h1 className="PLACESSpace-name">{name}</h1>
            </Link>
            <div className="PLACESSpace-info">
            <div>{address}</div>
            <div className="hours">{hours}</div>
            </div>
        </div>
    )
}

export default PLACESSpace