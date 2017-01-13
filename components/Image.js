import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  onImageLoad = () => {
    this.setState({ loaded: true });
  }
  componentDidMount() {
    const imgTag = ReactDOM.findDOMNode(this.refs.img);
    const imgSrc = imgTag.getAttribute('src');
    // You may want to rename the component if the <Image> definition
    // overrides window.Image
    let img = new window.Image();
    img.onload = this.onImageLoad;
    img.src = imgSrc;
  }
  render() {
    var { className, ...props } = this.props;
    var imgClasses = 'image';
    var rootClassName = classNames(className, 'image', {
      'image-loaded': this.state.loaded,
    });
    return (
      <img ref="img" {...props} className={rootClassName} />
    );
  }
}

export default Image;