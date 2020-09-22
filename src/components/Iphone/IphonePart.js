import React from 'react';
import Phone from '../phone/Phone';

class IphonePart extends React.Component {
  constructor(props) {
    super(props);
    this.phoneModel = [
      { model: 'iPhone11', price: 5999 },
      { model: 'iPhoneXS', price: 5399 },
      { model: 'iPhoneSE', price: 3599 },
    ];
  }

  render() {
    return (
      <section className="iphone-part">
        <h2>iPhone</h2>
        <article>
          {this.phoneModel.map((phone) => (
            <Phone id={phone.model} key={phone.model} price={phone.price} />
          ))}
        </article>
      </section>
    );
  }
}
export default IphonePart;
