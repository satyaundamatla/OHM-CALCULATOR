import React from 'react';
import PropTypes from 'prop-types';
import './Band.css';

class Band extends React.Component {
    handleChange = (event) => {
        console.log(event.target.value);
        this.props.changeHandler(event.target.value);
    }

    render(){
      return( 
          <select name={this.props.name} value={this.props.value} onChange={this.handleChange} className="Band-dropdown">
              {this.props.data.map(x => <option value={x.value} key={x.key}>{x.label}</option>)}
          </select>
      );
    }
}

Band.protoTypes = {
    color: PropTypes.string,
    value: PropTypes.string,
    data: PropTypes.array,
    changeHandler: PropTypes.func,
};
export default Band;