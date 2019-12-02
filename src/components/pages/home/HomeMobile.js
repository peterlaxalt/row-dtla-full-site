import React from 'react';
import styled from '@emotion/styled';

import HomeSlideMobile from './HomeSlideMobile';

const HomeList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .masonry {
    margin: calc(64px / 3) 0 0 0;
    padding: 0;
    list-style-type: none;
    .gutter-sizer {
      width: calc(64px / 3);
    }
  }
`;

const HomeMobile = ({ slideArray }) => {
  const generateList = () => {
    return slideArray.map(slide => {
      return <HomeSlideMobile key={slide.contentful_id} slide={slide} />;
    });
  };

  return <HomeList>{generateList()}</HomeList>;
};

export default HomeMobile;
