import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Link from 'next/link';

import Context from '~/config/Context';

import ResponsiveImage from './ResponsiveImage';
import BackgroundImage from '~/components/BackgroundImage';

import { mediaMin } from '~/styles/MediaQueries';

const SliderContainer = styled.div`
  & > .slick-slider {
    height: 70vh;
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
    @media screen and (max-width: 1024px) {
      bottom: 2%;
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
    height: 100%;
    width: 10%;
    right: 0;
    top: 0;
    bottom: 0;
    transform: translate(0, 0);
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
      ${props => (props.showQuotes ? 'height: 85%;' : 'height: 100%;')}
      ${props => (props.showQuotes ? 'top: 42.5%;' : '')}
    }
  }
  & > .slick-slider > .slick-prev {
    display: block;
    ${props => (props.showQuotes ? 'height: 95%;' : 'height: 100%;')}
    ${props => (props.showQuotes ? 'top: 47.5%;' : '')}
    width: 10%;
    left: 0;
    top: 0;
    bottom: 0;
    transform: translate(0, 0);
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
      ${props => (props.showQuotes ? 'height: 85%;' : 'height: 100%;')}
      ${props => (props.showQuotes ? 'top: 42.5%;' : '')}
    }
  }
`;

const SliderSlide = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  margin-bottom: 1.5vh;
  align-items: center;
  justify-content: center;
  position: relative;
  .responsive-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  ${mediaMin.tablet`
    height: 40vh;
  `}
  ${mediaMin.tabletLandscape`
    height: 100%;
    margin-bottom: 0;
  `}
`;

const TitleText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  color: #fff;
  font-size: 110px;
  font-weight: 700;
  letter-spacing: 3px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TitleImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  width: 90%;
  ${mediaMin.tablet`
    height: 20%;
  `}
  ${mediaMin.tabletLandscape`
    height: 15%;
  `}
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

const MobileSlideList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default class ClickSlider extends React.Component {
  createSlides = (context = false) => {
    const browserName = context ? context.browserName || context.state.appData.browserName : false;

    if (browserName && browserName === 'IE') {
      return this.props.imgArray.map((el, idx) => (
        <SliderSlide key={idx}>
          <BackgroundImage className="active" srcPath={el.imgUrl} imgAlt={el.imgAlt} />
          <Link href={el.link}>
            {el.titleImg !== undefined ? <TitleImage src={el.titleImg} /> : <TitleText>{el.titleText}</TitleText>}
          </Link>
        </SliderSlide>
      ));
    } else {
      return this.props.imgArray.map((el, idx) => (
        <SliderSlide key={idx}>
          <ResponsiveImage srcPath={el.imgUrl} imgAlt={el.imgAlt} />
          <Link href={el.link}>
            {el.titleImg !== undefined ? <TitleImage src={el.titleImg} /> : <TitleText>{el.titleText}</TitleText>}
          </Link>
        </SliderSlide>
      ));
    }
  };

  render() {
    var settings = {
      customPaging: function(i) {
        return (
          <SliderDot>
            <SliderDotInner>{i}</SliderDotInner>
          </SliderDot>
        );
      },
      lazyLoad: true,
      dots: true,
      infinite: true,
      autoplay: this.props.autoPlay,
      autoplaySpeed: 2000,
      easing: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Context.Consumer>
        {context => {
          return (
            <SliderContainer index={this.props.index}>
              {this.props.windowWidth > 1024 ? (
                <Slider {...settings}>{this.createSlides(context)}</Slider>
              ) : (
                <MobileSlideList>{this.createSlides()}</MobileSlideList>
              )}
            </SliderContainer>
          );
        }}
      </Context.Consumer>
    );
  }
}
