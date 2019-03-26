import React from 'react';

export default class ResponsiveImage extends React.Component {
  render() {
    return (
      <img
        src={`${this.props.srcPath}.jpg`}
        srcSet={`${this.props.srcPath}_400.jpg 400w, ${
          this.props.srcPath
        }_600.jpg 600w, ${this.props.srcPath}_800.jpg 800w, ${
          this.props.srcPath
        }_1100.jpg 1100w, ${this.props.srcPath}_1500.jpg 1500w, ${
          this.props.srcPath
        }_2000.jpg 2000w, ${this.props.srcPath}_2500.jpg 2500w`}
        alt={this.props.imgAlt}
        className={`responsive-image ${this.props.imgClass}`}
        onClick={this.props.onClickProp}
      />
    );
  }
}
