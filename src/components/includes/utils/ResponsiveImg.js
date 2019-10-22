/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';

const ResponsiveImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ResponsiveImage = ({
  ariaHidden,
  srcPath,
  imgClass,
  imgAlt,
  onClickProp,
  onLoadProp,
  refProp,
}) => {
  const defaultPath = require(`~/images/${srcPath}.jpg`);

  const srcSetPaths = {
    '400w': require(`~/images/${srcPath}_400.jpg`),
    '800w': require(`~/images/${srcPath}_800.jpg`),
    '1100w': require(`~/images/${srcPath}_1100.jpg`),
    '1500w': require(`~/images/${srcPath}_1500.jpg`),
    '2000w': require(`~/images/${srcPath}_2000.jpg`),
    '2500w': require(`~/images/${srcPath}_2500.jpg`),
  };

  const srcSet = Object.entries(srcSetPaths)
    .map(([name, path]) => `${path} ${name}`)
    .join(', ');

  // console.log(srcSet)

  return (
    <ResponsiveImg
      src={defaultPath}
      srcSet={srcSet}
      alt={imgAlt}
      ref={refProp || null}
      className={`responsive-image ${imgClass} `}
      onClick={onClickProp}
      aria-hidden={ariaHidden === undefined ? false : ariaHidden}
      onLoad={onLoadProp}
    />
  );
};
export default ResponsiveImage;
