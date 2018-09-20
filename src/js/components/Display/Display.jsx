import React from 'react';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cityName, latLong, temp, pressure, humidity, lowestTemp, highestTemp, wind, icon } = this.props;
    var display;
    if (this.props.cityExists === false) {
      display = (
      <div className=''>
        <h2>Please enter a valid city name.</h2>
      </div>
      )
    } else if (this.props.cityExists === true) {
      display = (
        <div className=''>
          <img src={'http://openweathermap.org/img/w/' + icon + '.png'} /><h2>{cityName}</h2>
          <p>Lat/Long: {latLong}</p>
        <div className='row'>
          <div className='col'>
            <p>Temperature (F)</p>
            <h6 className='text-success'>{temp}</h6>
          </div>
          <div className='col'>
            <p>Pressure</p>
            <h6 className='text-success'>{pressure}</h6>
          </div>
          <div className='col'>
            <p>Humidity</p>
            <h6 className='text-success'>{humidity}</h6>
          </div>
        </div>
        <p />
        <div className='row'>
          <div className='col'>
            <p>Lowest Temp (F)</p>
            <h6 className='text-success'>{lowestTemp}</h6>
          </div>
          <div className='col'>
            <p>Highest Temp (F)</p>
            <h6 className='text-success'>{highestTemp}</h6>
          </div>
          <div className='col'>
            <p>Wind Speed</p>
            <h6 className='text-success'>{wind}</h6>
          </div>
        </div>
      </div>
      )
    }
    return (
      <div className='container'> 
        <div className='card card-inverse border-info mb-3'>
          <div className='card-header bg-info text-white'>City Information</div>
          <div className='card-body text-center'>
            {display}
          </div>
        </div>
      </div>
    )
  }
}