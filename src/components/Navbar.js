import React from 'react'

const Navbar = ({changeForecast}) => {

    return (
        <div>
            <button className="nav-button" onClick={ () => changeForecast('main') } > Main</button>
            <button className="nav-button" onClick={ () => changeForecast('weather') } > Conditions</button>
            <button className="nav-button" onClick={ () => changeForecast('wind') } > Wind</button>
            <button className="nav-button" onClick={ () => changeForecast('clouds') } > Clouds</button>
            <button className="nav-button" onClick={ () => changeForecast('sys') } > System</button>
        </div>
    )
}

export default Navbar
