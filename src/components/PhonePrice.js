import React from 'react';
import PropTypes from 'prop-types';

class PhonePrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <p>{this.props.price}</p>;
  }
}
PhonePrice.propTypes = {
  price: PropTypes.number,
};
export default PhonePrice;
