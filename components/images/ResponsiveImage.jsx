import React from 'react';
import styled from 'styled-components';

const ResponsiveImageContainer = styled.img`
  max-width: 100%;
  ${props => props.imgWidth && `width: ${props.imgWidth}`}
`;

const ResponsiveImage = props => {
  return (
    <ResponsiveImageContainer
      imgWidth={props.width}
      src={`${props.srcPath}.jpg`}
      srcSet={`${props.srcPath}_400.jpg 400w, ${props.srcPath}_600.jpg 600w, ${props.srcPath}_800.jpg 800w, ${
        props.srcPath
      }_1100.jpg 1100w, ${props.srcPath}_1500.jpg 1500w, ${props.srcPath}_2000.jpg 2000w, ${
        props.srcPath
      }_2500.jpg 2500w`}
      alt={props.imgAlt}
      className={`responsive-image ${props.imgClass}`}
      onClick={props.onClickProp}
    />
  );
};

export default ResponsiveImage;
