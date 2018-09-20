import { types } from './searchActions';

const defaultState = {
    citySearch: '',
    cityName: '',
    latLong: '',
    temp: '',
    pressure: '',
    humidity: '',
    lowestTemp: '',
    highestTemp: '',
    wind: '',
    searchHist: [],
    cityExists: false,
    icon: ''
  };

  export default function SearchReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
       
        case types.UPDATE_SEARCH_VALUE: {
          return {
            ...state,
            citySearch: payload.citySearch
          }
        }

        case types.GET_CITY_INFO_FULFILLED: {
            if (payload === undefined) {
              return {
                ...state,
                cityExists: false
              }

            } else {
                console.log('loaded');
                return {
                  ...state,
                  cityName: payload.data.name,
                  latLong: payload.data.coord.lat + ',' + payload.data.coord.lon,
                  temp: (payload.data.main.temp * 9/5 - 459.67).toFixed(1) + 'F',
                  pressure: payload.data.main.pressure,
                  humidity: payload.data.main.humidity + '%',
                  lowestTemp: (payload.data.main.temp_min * 9/5 - 459.67).toFixed(1) + 'F',
                  highestTemp: (payload.data.main.temp_max * 9/5 - 459.67).toFixed(1) + 'F',
                  wind: payload.data.wind.speed + 'mph',
                  searchHist: [
                    { name: payload.data.name, date: payload.date },
                    ...state.searchHist
                  ],

                  cityExists: true,
                  icon: payload.data.weather[0].icon
                }
              }
            }
        
            default: {
              return state;
            }
          }
        }