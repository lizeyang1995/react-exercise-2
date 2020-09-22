import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../assets/product_image_placeholder.png';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <h3 className="model">{this.props.id}</h3>
        <img className="image-size" alt="product_image" src={Image}></img>
      </section>
    );
  }
}
Phone.propTypes = {
  id: PropTypes.string,
};
export default Phone;
