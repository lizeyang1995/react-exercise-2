import React from 'react';
import PropTypes from 'prop-types';
import Phone from '../phone/Phone';

const url = 'http://localhost:3000/products';
class HuaWeiPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneModel: [{ category: '', price: '', name: '' }],
    };
  }

  componentDidMount() {
    fetch(url)
      .then((result) => result.json())
      .then((json) => {
        const result = json.filter((item) => item.category === 'HUAWEI');
        this.setState({
          phoneModel: result,
        });
      });
  }

  render() {
    return (
      <section className="huawei-part">
        <h2>HUAWEI</h2>
        <article>
          {this.state.phoneModel.map((phone) => (
            <Phone
              id={phone.name}
              key={phone.name}
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
