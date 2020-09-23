import React from 'react';
import PropTypes from 'prop-types';
import Phone from '../phone/Phone';

const url = 'http://localhost:3000/products';
class IphonePart extends React.Component {
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
        const result = json.filter((item) => item.category === 'iPhone');
        this.setState({
          phoneModel: result,
        });
      });
  }

  render() {
    return (
      <section className="iphone-part">
        <h2>iPhone</h2>
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
IphonePart.propTypes = {
  buy: PropTypes.func,
};
export default IphonePart;
