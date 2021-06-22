import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import './App.css';
import Navbar from './components/Navbar'
import CurrentForecast from './components/CurrentForecast'
import WindReport from './components/WindReport'
import CloudsReport from './components/CloudsReport'
import WeatherReport from './components/WeatherReport'
import SysReport from './components/SysReport'
class App extends Component{
  state = {
    fetchingData: true,
    weatherData: {},
    forecastKey: 'main'
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      fetchJsonp(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=imperial`)
      .then(res => res.json())
      .then(weatherData => this.setState({ 
        fetchingData: false,
        weatherData: weatherData
      }))
    });
  };

  handleForecastChange = forecastKey => this.setState({ forecastKey: forecastKey})

  render(){
    
    const { fetchingData, weatherData, forecastKey} = this.state
    const forecast = weatherData[forecastKey]

    return (
      <div className="App">

        <h1>Weather App</h1>
        { 
          fetchingData ? 
          "loading..." 
          : 
          <div>
            <Navbar changeForecast={this.handleForecastChange}/>
            {forecastKey === 'main' && <CurrentForecast forecast={forecast}/> }
            {forecastKey === 'weather' && <WeatherReport forecast={forecast}/> }
            {forecastKey === 'wind' && <WindReport forecast={forecast}/> }
            {forecastKey === 'clouds' && <CloudsReport forecast={forecast}/> }
            {forecastKey === 'sys' && <SysReport forecast={forecast}/> }

          </div>
        }
      </div>
      
    );
  }

}
export default App;
