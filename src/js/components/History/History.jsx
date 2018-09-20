import React from 'react';

export default class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'> 
        <div className='card card-inverse border-info mb-3'>
          <div className='card-header bg-info text-white'>Search History</div>
          <div className='card-body text-center'>
          {this.props.searchHist.map(function(value, index) {
            return (
              <div>
                <hr />  
                <div className="row justify-content-between">
                  <div className="col-4">
                    <p>{value.name}</p>
                  </div>
                  <div className="col-4">
                    <p>{value.date}</p>
                  </div>
                </div>
              </div>
            )
          })}
          
          </div>
        </div>
      </div>
    )
  }
}