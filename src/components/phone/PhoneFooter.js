import React from 'react';
import PropTypes from 'prop-types';
import AddPhone from '../AddPhone';
import PhonePrice from '../PhonePrice';

class PhoneFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="phone-footer">
        <PhonePrice price={this.props.price} />
        <AddPhone buy={this.props.buy} />
      </section>
    );
  }
}
PhoneFooter.propTypes = {
  price: PropTypes.string,
  buy: PropTypes.func,
};
export default PhoneFooter;
