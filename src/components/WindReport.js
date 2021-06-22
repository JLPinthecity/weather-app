import React from 'react';

const WindReport = (props) => {
    
    return (
        <div>
            <h3>Wind speed: {props.forecast.speed} mph</h3>
            <h3>Degrees: {props.forecast.deg}</h3>
            <h3>Gust: {props.forecast.gust} mph</h3> 
        </div>
    )
}

export default WindReport