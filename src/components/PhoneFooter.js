import React from 'react';
import PropTypes from 'prop-types';

class PhoneFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="phone-footer">
        <p>{this.props.price}</p>
        <button>add to cart</button>
      </section>
    );
  }
}
PhoneFooter.propTypes = {
  price: PropTypes.number,
};
export default PhoneFooter;
