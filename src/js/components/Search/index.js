import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
  return {
    citySearch: store.search.citySearch
  };
}

export default connect(mapStoreToProps)(Search);