import React from 'react';

const WeatherReport = (props) => {
    
    return (
        <div>
            <h3>Conditions: {props.forecast[0].description}</h3> 
            <h4>Skies: {props.forecast[0].main}</h4> 
        </div>
    )
}

export default WeatherReport