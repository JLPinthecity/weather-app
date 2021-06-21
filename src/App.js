import React, { Component } from 'react';
import './App.css';

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid={API key}'

class App extends Component{
  state = {
    fetchingData: true,
    weatherData: []
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
