import { combineReducers } from 'redux';

import searchReducer from './components/Search/searchReducer'
import displayReducer from './components/Display/displayReducer';
import historyReducer from './components/History/historyReducer';


const rootReducer = combineReducers({
search: searchReducer
 // display: displayReducer,
  // history: historyReducer
});

export default rootReducer;
