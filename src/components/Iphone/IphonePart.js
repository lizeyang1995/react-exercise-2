import React from 'react';
import Phone from '../phone/Phone';

class IphonePart extends React.Component {
  constructor(props) {
    super(props);
    this.phoneModel = ['iPhone11', 'iPhoneXS', 'iPhoneSE'];
  }

  render() {
    return (
      <section className="iphone-part">
        <h2>iPhone</h2>
        <article>
          {this.phoneModel.map((phone) => (
            <Phone id={phone} key={phone} />
          ))}
        </article>
      </section>
    );
  }
}
export default IphonePart;
