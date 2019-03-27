import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ResponsiveImage from './ResponsiveImage';

const SliderContainer = styled.div`
  & > .slick-slider {
    height: ${props => (props.height ? props.height : '90vh')};
    width: 100%;
    @media screen and (max-width: 1024px) {
      height: 40vh;
    }
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
    bottom: ${props => (props.showQuotes ? '7%' : '2%')};
    @media screen and (max-width: 1024px) {
      bottom: ${props => (props.showQuotes ? '20%' : '2%')};
    }
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
    @media screen and (max-width: 1024px) {
      height: 8px;
      width: 8px;
      margin: 0 10px;
    }
  }
  & > .slick-slider > .slick-dots > .slick-active {
    box-shadow: 0 0 0 2px #000;
    &:hover {
      background-color: #fff;
    }
  }
  & > .slick-slider > .slick-arrow {
    z-index: 10;
  }
  & > .slick-slider > .slick-next {
    display: block;
    ${props => (props.showQuotes ? 'height: 95%;' : 'height: 100%;')}
    ${props => (props.showQuotes ? 'top: 47.5%;' : '')}
    width: 10%;
    right: 0;
    &:hover {
      background-image: linear-gradient(to left, #03a8f442, #ffff0000);
    }
    &::before {
      font: normal normal normal 14px/1 FontAwesome;
      content: '\\f105';
      font-size: 32px;
      position: absolute;
      left: 50%;
    }
    @media screen and (max-width: 1024px) {
      ${props => (props.showQuotes ? 'height: 80%;' : 'height: 100%;')}
      ${props => (props.showQuotes ? 'top: 40%;' : '')}
    }
  }
  & > .slick-slider > .slick-prev {
    display: block;
    ${props => (props.showQuotes ? 'height: 95%;' : 'height: 100%;')}
    ${props => (props.showQuotes ? 'top: 47.5%;' : '')}
    width: 10%;
    left: 0;
    &:hover {
      background-image: linear-gradient(to right, #03a8f442, #ffff0000);
    }
    &::before {
      font: normal normal normal 14px/1 FontAwesome;
      content: '\\f104';
      font-size: 32px;
      position: absolute;
      right: 50%;
    }
    @media screen and (max-width: 1024px) {
      ${props => (props.showQuotes ? 'height: 80%;' : 'height: 100%;')}
      ${props => (props.showQuotes ? 'top: 40%;' : '')}
    }
  }
`;

const SliderSlide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    ${props => (props.showQuotes ? 'height: 95%;' : 'height: 100%;')}
    width: 100%;
    object-fit: cover;
    @media screen and (max-width: 1024px) {
      ${props => (props.showQuotes ? 'height: 80%;' : 'height: 100%;')}
    }
  }
`;

const SliderQuote = styled.div`
  height: 5%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 1024px) {
    height: 20%;
    padding: 0 15px;
  }
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
        <SliderSlide key={idx} showQuotes={this.props.showQuotes}>
          <img src={el.imgUrl} alt={el.imgAlt} />
          {this.props.showQuotes ? <SliderQuote>{el.imgAlt}</SliderQuote> : ''}
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
      lazyLoad: true,
      fade: this.props.fade ? true : false,
      dots: true,
      infinite: true,
      autoplay: this.props.autoPlay,
      autoplaySpeed: 5000,
      easing: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <SliderContainer
        height={this.props.height}
        showQuotes={this.props.showQuotes}
      >
        <Slider {...settings}>{sliderContent}</Slider>
      </SliderContainer>
    );
  }
}
