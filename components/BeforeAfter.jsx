import React from 'react';
import TwentyTwenty from 'react-twentytwenty';
import styled from 'styled-components';
import ResponsiveImage from './ResponsiveImage';

const BeforeAfterContainer = styled.div`
  width: 100%;
  margin-bottom: 35px;
`;

const SliderIconContainer = styled.div`
  height: 100%;
  width: 2px;
  background-color: #fff;
`;

const Slider = styled.img`
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
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
