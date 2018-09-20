import axios from 'axios';

export const types = {
    UPDATE_SEARCH_VALUE: 'UPDATE_SEARCH_VALUE',
    GET_CITY_INFO: 'GET_CITY_INFO',
    GET_CITY_INFO_FULFILLED: 'GET_CITY_INFO_FULFILLED'
  };

  export function updateSearchValue(citySearch) {
    return {
      type: types.UPDATE_SEARCH_VALUE,
      payload: { citySearch }
    };
  }  

  export function getCityData(cityInfo) {
    return {
      type: types.GET_CITY_INFO,
      payload: axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityInfo + '&APPID=48f8986547a6513402e7baae0bfb85a1')
      .then(function (response) {
        console.log(response);
        response.date = Date().toString();
        return response;
      })
      .catch(function (error) {
        console.log(error);
      })
      
    }
  }
  

