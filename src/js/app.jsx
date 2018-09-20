import React from 'react';
import Search from './components/Search';
import Display from './components/Display';
import History from './components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>Origin Weather Application</h1>
          <p>Always know if you'll need an umbrella</p>
        </div>
        <Search />
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <Display />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <History />
          </div>
        </div>
      </div>
    );
  }
}
