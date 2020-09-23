import React from 'react';
import PropTypes from 'prop-types';

class AddPhone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <button onClick={() => this.props.buy()}>add to cart</button>;
  }
}
AddPhone.propTypes = {
  buy: PropTypes.any,
};
export default AddPhone;
