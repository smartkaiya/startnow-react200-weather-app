import { connect } from 'react-redux';
import SearchHistory from './History';

function mapStoreToProps(store) {
  return {
    searchHist: store.search.searchHist
  };
}

export default connect(mapStoreToProps)(SearchHistory);