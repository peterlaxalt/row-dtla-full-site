import React from 'react';
import TwentyTwenty from 'react-twentytwenty';
import styled from 'styled-components';

const BeforeAfterContainer = styled.div`
  height: 90vh;
  & > div {
    height: 100%;
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
          left={<img src={before.path} alt={before.alt} />}
          right={<img src={after.path} alt={after.alt} />}
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
