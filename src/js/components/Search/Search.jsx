import React from 'react';
import axios from 'axios';
import {
    updateSearchValue,
    getCityData
} from './searchActions';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleGetCityInfo = this.handleGetCityInfo.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleSearchInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateSearchValue(value));
    }

    handleGetCityInfo() {
        const { dispatch } = this.props;
        const { citySearch } = this.props;
        dispatch(getCityData(citySearch));
    }

    handleButtonClick(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        console.log(value);
        dispatch(getCityData(value));
    }

    render() {
        const { citySearch } = this.props;
        return (
            < div className='container'>
                <button
                 className='btn btn-info'
                 value='San Diego'
                 onClick={this.handleButtonClick}>San Diego</button>
                <button 
                 className='btn btn-info' 
                 value='New York'
                 onClick={ this.handleButtonClick }>New York</button>
                <button 
                 className='btn btn-info' 
                 value='Washington DC.'
                 onClick={ this.handleButtonClick }>Washington DC.</button>
                <button 
                 className='btn btn-info' 
                 value='London'
                 onClick={ this.handleButtonClick }>London</button>
                <button 
                 className='btn btn-info' 
                 value='Tokyo'
                 onClick={ this.handleButtonClick }>Tokyo</button>
                 <div className='row'>
                   <div className="col-lg-12">
                     <div className="input-group">
                     <input 
                       type="text" 
                       className="form-control" 
                       placeholder="Search for..."
                       id='search-value'
                       onChange={ this.handleSearchInput } />
                       <span className="input-group-btn">
                       <button 
                         className="btn btn-secondary" 
                         type="button"
                         onClick={ this.handleGetCityInfo }>Go!</button>
                       </span>
            </div>
          </div>
        </div>
        <p />
      </div>
                                            
     );
    }             
}