import './PLACESSpace.css';

function PLACESSpace(props) {
    const { name, image, address, hours } = props
    return (
        <div className="PLACESSpace">
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} 
            width="300" height="300" alt="Hello" />
            <h1>{name}</h1>
            <div>{address}</div>
            <div className="hours">{hours}</div>
        </div>
    )
}

export default PLACESSpace