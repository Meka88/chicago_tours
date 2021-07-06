import { useHistory } from 'react-router-dom'
import './RandomPlace.css';
import data from '../places-data/places-data.json'
import './RandomPlace.css';

function RandomPlace() {
    const history = useHistory()
  return (
        <button onClick={(e) => {
            const id = Math.floor(Math.random() * data.length)
            history.push(`/details/${id}`)
        }}>Show me a random place</button>
  )
}

export default RandomPlace
