import { connect } from 'react-redux';
import Display from './Display';


function mapStoreToProps(store) {
  return {
    cityName: store.search.cityName,
    latLong: store.search.latLong,
    temp: store.search.temp,
    pressure: store.search.pressure,
    humidity: store.search.humidity,
    lowestTemp: store.search.lowestTemp,
    highestTemp: store.search.highestTemp,
    wind: store.search.wind,
    cityExists: store.search.cityExists,
    icon: store.search.icon
  };
}

export default connect(mapStoreToProps)(Display);