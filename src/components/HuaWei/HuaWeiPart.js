import React from 'react';
import PropTypes from 'prop-types';
import Phone from '../phone/Phone';

class HuaWeiPart extends React.Component {
  constructor(props) {
    super(props);
    this.phoneModel = [
      { model: 'HUAWEI P40 Pro+', price: 7999 },
      { model: 'HUAWEI Mate 30', price: 5000 },
      { model: 'HUAWEI nova 7', price: 4000 },
    ];
  }

  render() {
    return (
      <section className="huawei-part">
        <h2>HUAWEI</h2>
        <article>
          {this.phoneModel.map((phone) => (
            <Phone
              id={phone.model}
              key={phone.model}
              price={phone.price}
              buy={this.props.buy}
            />
          ))}
        </article>
      </section>
    );
  }
}
HuaWeiPart.propTypes = {
  buy: PropTypes.func,
};
export default HuaWeiPart;
