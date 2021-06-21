import React from 'react'

   const CurrentForecast = ({forecast: { feels_like, temp, temp_max, temp_min, humidity }}) => {
// debugger
    return (
        <div>
            <h2>Current Forecast:</h2>
            <div>
            <h3>Temp: </h3>{temp}
            <h3>Feels Like: </h3>{feels_like}
            <h3>High: </h3>{temp_max}
            <h3>Low: </h3>{temp_min}
            <h3>Humidity: </h3>{humidity}
               
          
            </div>
        </div>
    )
  }


export default CurrentForecast
