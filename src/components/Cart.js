import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    return <h1>{this.props.count}</h1>;
  }
}
Cart.propTypes = {
  count: PropTypes.number,
};
export default Cart;
