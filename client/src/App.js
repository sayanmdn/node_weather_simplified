import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import debounce from './utils/debounce'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: '',
      weatherData: {}
    }
  }

  getWeather = debounce(() => {
    const { location } = this.state;
    if (location) {
      axios(`http://localhost:3000/weather?location=${location}`).then(({ data: weatherData }) => {
        this.setState({ weatherData })
      })
    }
  }, 1000)

  handleLocationChange = (event) => {
    const { target: { value: location } } = event;

    this.setState({ location });

    this.getWeather();
  }

  render() {
    const { location, weatherData } = this.state;

    return (
      <div className="App">
        <input type="text" value={location} onChange={this.handleLocationChange} />

        <p>Weather for {location}:
        </p>


        {
          Object.keys(weatherData).map(key =>
            <p key={key}>{`${key}: ${JSON.stringify(weatherData[key])}`}</p>
          )
        }
      </div>
    );

  }
}

export default App;
