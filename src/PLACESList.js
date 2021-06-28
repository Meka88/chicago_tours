import React from 'react';
import PLACESSpace from './PLACESSpace';

function PLACESList() {
    return (
        <div className="PLACESList">
            <PLACESSpace name="Buckingham Fountain" 
            address="301 S Columbus Dr, Chicago, IL 60605"
            image="buckingham-fountain.png"/>
            <PLACESSpace name="Chicago Riverwalk" 
            address="Chicago Riverwalk, Chicago, IL 60601"
            image="chicago-riverwalk.jpeg"/>
            <PLACESSpace name="Lincoln Park Zoo" 
            address="2001 N Clark St, Chicago, IL 60614"
            image="lincoln-zoo.jpeg"/>
            <PLACESSpace name="Metric Coffee Co." 
            address="2021 W Fulton St, Chicago, IL 60612"
            image="metric-coffee.jpeg"/>
            <PLACESSpace name="Millenium Park"
            address="201 E. Randolph St. Chicago, IL 60601"
            image="millenium-park.jpeg"/>
        </div>
    )
}

export default PLACESList