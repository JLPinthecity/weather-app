import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import './App.css';
import CurrentForecast from './components/CurrentForecast'

class App extends Component{
  state = {
    fetchingData: true,
    weatherData: {}
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
  }

  render(){
    const { fetchingData, weatherData } = this.state
    console.log("inside render", weatherData)
    return (
      <div className="App">
        <h1>Weather App</h1>
        { fetchingData ? "loading..." : <CurrentForecast forecast={weatherData.main} /> }
      </div>
      
    );
  }
}

export default App;
