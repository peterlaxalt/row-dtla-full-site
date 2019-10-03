import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ResponsiveImage from '~/components/images/ResponsiveImage';

const FaderContainer = styled.div`
  & > .slick-slider {
    height: 90vh;
    width: 100%;
    @media screen and (max-width: 1024px) {
      height: 30vh;
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
    bottom: 2%;
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
  & > .slick-slider > .slick-prev {
    display: block;
    height: 100%;
    width: 10%;
    left: 0;
    background: rgba(256, 256, 256, 0);
    &:hover {
      background: linear-gradient(to left, rgba(256,256,256,0), rgba(54,155,247,0.3));
    }
    &::before {
      font: normal normal normal 14px/1 FontAwesome;
      content: '\\f104';
      font-size: 32px;
      position: absolute;
      right: 50%;
    }
  }
  & > .slick-slider > .slick-next {
    display: block;
    height: 100%;
    width: 10%;
    right: 0;
    background: rgba(256, 256, 256, 0);
    &:hover {
      background: linear-gradient(to right, rgba(256,256,256,0), rgba(54,155,247,0.3));
    }
    &::before {
      font: normal normal normal 14px/1 FontAwesome;
      content: '\\f105';
      font-size: 32px;
      position: absolute;
      left: 50%;
    }
  }
`;

const FaderSlide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const FaderDot = styled.a`
  height: 15px;
  width: 15px;
`;

const FaderDotInner = styled.div`
  height: 15px;
  width: 15px;
  opacity: 0;
`;

export default class ImageFader extends React.Component {
  render() {
    const sliderContent = this.props.imgArray.map((el, idx) => {
      return (
        <FaderSlide key={idx}>
          <ResponsiveImage srcPath={el.imgUrl} imgAlt={el.imgAlt} />
        </FaderSlide>
      );
    });
    var settings = {
      customPaging: function(i) {
        return (
          <FaderDot>
            <FaderDotInner>{i}</FaderDotInner>
          </FaderDot>
        );
      },
      lazyLoad: true,
      dots: true,
      infinite: true,
      fade: true,
      autoplay: this.props.autoPlay,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <FaderContainer>
        <Slider {...settings}>{sliderContent}</Slider>
      </FaderContainer>
    );
  }
}
