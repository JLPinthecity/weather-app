import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import './App.css';

class App extends Component{
  state = {
    fetchingData: true,
    weatherData: []
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      fetchJsonp(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`)
      .then(res => res.json())
      .then(weatherData => console.log(weatherData))
    });
  }

  render(){
    const { fetchingData } = this.state
    return (
      <div className="App">
        <p>Weather App</p>
        <p> { fetchingData ? "loading..." : <h1>Data is received</h1> }</p>
      </div>
    );
  }
}

export default App;
