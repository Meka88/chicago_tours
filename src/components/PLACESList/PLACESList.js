import PLACESSpace from '../PLACESSpace/PLACESSpace';
import './PLACESList.css';
import data from "../places-data/places-data.js";
import { useState } from 'react';

function PLACESList() {
    const [ query, setQuery ] = useState('')
    const places = data.filter(obj => obj.title.includes(query) || obj.address.includes(query)).map((obj) => {
        const { id, title, address, images, hours, features } = obj
        return (
            <PLACESSpace
            id={id}
            key={`${title}-${id}`}
            name={title}
            address={address}
            image={images[0]}
            hours={hours} />
        )
    })
     return (
         <div className="PLACESList">
             {/* <form>
                <input
                    value={query}
                    placeholder="search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form> */}
            <div>
             { places }
            </div>
         </div>
     )
}

export default PLACESList