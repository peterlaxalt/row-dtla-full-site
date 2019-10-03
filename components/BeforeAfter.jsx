import React from 'react';
import TwentyTwenty from 'react-twentytwenty';
import styled from 'styled-components';
import ResponsiveImage from '~/components/images/ResponsiveImage';

const BeforeAfterContainer = styled.div`
  width: 100%;
  margin-bottom: 35px;
  .responsive-image {
    width: 100%;
  }
`;

const SliderIconContainer = styled.div`
  height: 100%;
  width: 2px;
  background-color: #fff;
  cursor: col-resize;
`;

const Slider = styled.img`
  top: 50%;
  height: 65px;
  width: 65px;
  position: absolute;
  transform: translate(-50%, -50%);
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
              <Slider src="/static/images/icons/slider-compare-control.svg" alt="slider handle" />
            </SliderIconContainer>
          }
        />
      </BeforeAfterContainer>
    );
  }
}
