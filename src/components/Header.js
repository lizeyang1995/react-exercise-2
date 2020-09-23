import React from 'react';
import PropTypes from 'prop-types';
import Cart from './Cart';

class Header extends React.Component {
  render() {
    return (
      <section className="header">
        <h1>Store</h1>
        <Cart count={this.props.count} />
      </section>
    );
  }
}
Header.propTypes = {
  count: PropTypes.number,
};
export default Header;
