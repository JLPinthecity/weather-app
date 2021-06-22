import React from 'react';
import moment from 'moment'

const SysReport = (props) => {
  
    const sunrise = props.forecast.sunrise
    const sunset = props.forecast.sunset
    return (
        <div>
            
            <h3>Sunrise: {moment.unix(sunrise).format('LT')}</h3>
            <h3>Sunset: {moment.unix(sunset).format('LT')}</h3>
        </div>
    )
}

export default SysReport