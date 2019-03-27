import React from 'react';
import TwentyTwenty from 'react-twentytwenty';
import styled from 'styled-components';
import ResponsiveImage from './ResponsiveImage';

const BeforeAfterContainer = styled.div`
  height: 90vh;
  div {
    height: 100%;
  }
  .responsive-image {
    min-width: 100%;
    min-height: 100%;
  }
  @media screen and (max-width: 1024px) {
    height: 40vh;
  }
`;

const SliderIconContainer = styled.div`
  height: 100%;
  width: 2px;
  background-color: #fff;
`;

const Slider = styled.img`
  top: 50%;
  position: absolute;
  transform: translate(-50%, 0);
  cursor: pointer;
`;

export default class BeforeAfter extends React.Component {
  render() {
    const { before, after } = this.props;
    return (
      <BeforeAfterContainer>
        <TwentyTwenty
          left={<ResponsiveImage srcPath={before.path} imgAlt={before.alt} />}
          right={<ResponsiveImage srcPath={after.path} imgAlt={after.alt} />}
          slider={
            <SliderIconContainer>
              <Slider src="/static/images/test/close.svg" alt="slider handle" />
            </SliderIconContainer>
          }
        />
      </BeforeAfterContainer>
    );
  }
}
