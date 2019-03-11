import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const SliderContainer = styled.div`
  & > .slick-slider {
    height: 90vh;
    width: 100%;
  }
  & > .slick-slider > .slick-list {
    height: 100%;
  }
  & > .slick-slider > .slick-list > .slick-track {
    height: 100%;
  }
  & > .slick-slider > .slick-list > .slick-track > .slick-slide {
    height: 100%;
  }
  & > .slick-slider > .slick-list > .slick-track > .slick-slide > div {
    height: 100%;
  }
  & > .slick-slider > .slick-dots {
    bottom: 12%;
  }
  & > .slick-slider > .slick-dots > li {
    height: 11px;
    width: 11px;
    border-radius: 100%;
    background-color: #fff;
    margin: 0 20px;
    box-sizing: border-box;
    &:hover {
      background-color: #000;
    }
  }
  & > .slick-slider > .slick-dots > .slick-active {
    height: 15px;
    width: 15px;
    border: 2px solid #000;
    &:hover {
      background-color: #fff;
    }
  }
  & > .slick-slider > .slick-arrow {
    z-index: 10;
  }
  & > .slick-slider > .slick-next {
    display: block;
    height: 100%;
    width: 10%;
    right: 0;
    &:hover {
      background-image: linear-gradient(to left, #03a8f442, #ffff0000);
    }
  }
  & > .slick-slider > .slick-prev {
    display: block;
    height: 100%;
    width: 10%;
    left: 0;
    &:hover {
      background-image: linear-gradient(to right, #03a8f442, #ffff0000);
    }
  }
`;

const SliderSlide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SliderImg = styled.img`
  height: 90%;
  width: 100%;
`;

const SliderQuote = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SliderDot = styled.a`
  height: 15px;
  width: 15px;
`;

const SliderDotInner = styled.div`
  height: 15px;
  width: 15px;
  opacity: 0;
`;

export default class ImageSlider extends React.Component {
  render() {
    const sliderContent = this.props.imgArray.map((el, idx) => {
      return (
        <SliderSlide key={idx}>
          <SliderImg src={el.imgUrl} alt={el.imgAlt} />
          <SliderQuote>{el.imgAlt}</SliderQuote>
        </SliderSlide>
      );
    });
    var settings = {
      customPaging: function(i) {
        return (
          <SliderDot>
            <SliderDotInner>{i}</SliderDotInner>
          </SliderDot>
        );
      },
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <SliderContainer>
        <Slider {...settings}>{sliderContent}</Slider>
      </SliderContainer>
    );
  }
}
