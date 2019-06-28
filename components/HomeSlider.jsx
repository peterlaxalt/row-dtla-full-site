import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Link from 'next/link';
import ResponsiveImage from './ResponsiveImage';
import { mediaMin } from '../styles/MediaQueries';

const SliderContainer = styled.div`
  opacity: ${props => (props.loaded ? '1' : '0')};
  transition: 1s opacity ease-in-out;
  & > .slick-slider {
    position: fixed;
    top: 0;
    height: 100vh;
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
    bottom: 7%;
    @media screen and (max-width: 1024px) {
      bottom: 17%;
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
  margin-bottom: 1.5vh;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .responsive-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  ${mediaMin.tabletLandscape`
    height: 100%;
    margin-bottom: 0;
  `}
  @media screen and (max-width: 1024px) {
  }
`;

const TitleText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 10;
  color: ${props => (props.titleText === 'AVAILABILITY' ? '#000' : '#fff')};
  font-weight: 600;
  letter-spacing: 3px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 36px;
  ${mediaMin.tabletLandscape`
  font-size: 110px;
`}
`;

const TitleImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
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

const InnerImageFader = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 0;
  .responsive-image {
    opacity: 0;
    transition: 1.5s opacity ease-in-out;
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .active {
    opacity: 1;
  }
`;

const MobileSlideList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default class HomeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  createSlides = () => {
    return this.props.imgArray.map((el, idx) => {
      return (
        <SliderSlide key={idx}>
          <InnerFader imgArray={el.imgArray} active={this.state.currentIndex === idx} />
          <Link href={el.link}>
            {el.titleImg !== undefined ? (
              <TitleImage src={el.titleImg} />
            ) : (
              <TitleText showTitle={this.state.showTitle} titleText={el.titleText}>
                {el.titleText}
              </TitleText>
            )}
          </Link>
        </SliderSlide>
      );
    });
  };

  createMobileSlides = () => {
    return this.props.mobileArray.map((el, idx) => {
      return (
        <Link key={`home-slider-link-${idx}`} href={el.link}>
          <SliderSlide>
            <ResponsiveImage srcPath={el.imgUrl} imgAlt={el.imgAlt} />
            <TitleText showTitle={this.state.showTitle} titleText={el.titleText}>
              {el.titleText}
            </TitleText>
          </SliderSlide>
        </Link>
      );
    });
  };
  render() {
    const { loaded } = this.props;
    var settings = {
      customPaging: function(i) {
        return (
          <SliderDot>
            <SliderDotInner>{i}</SliderDotInner>
          </SliderDot>
        );
      },
      lazyLoad: true,
      fade: true,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 9999,
      easing: true,
      speed: 3333,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: index => {
        this.setState({
          currentIndex: index
        });
      }
    };
    return (
      <SliderContainer loaded={loaded}>
        {this.props.windowWidth > 1024 ? (
          <Slider {...settings}>{this.createSlides()}</Slider>
        ) : (
          <MobileSlideList>{this.createMobileSlides()}</MobileSlideList>
        )}
      </SliderContainer>
    );
  }
}

class InnerFader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      intervalRef: null
    };
  }

  componentDidMount() {
    this.startRotation();
  }

  componentWillUnmount() {
    this.stopRotation();
  }

  nextImage = () => {
    this.setState({
      currentImage: (this.state.currentImage + 1) % this.props.imgArray.length
    });
  };

  startRotation = () => {
    this.sliderInterval = setInterval(this.nextImage, 4000);
  };

  stopRotation = () => {
    clearInterval(this.sliderInterval);

    this.setState({
      currentImage: 0,
      paused: true
    });
  };

  createImages = () => {
    return this.props.imgArray.map((el, key) => {
      return (
        <ResponsiveImage
          key={key}
          imgClass={this.state.currentImage >= key ? 'active' : ''}
          srcPath={el.imgUrl}
          imgAlt={el.alt}
        />
      );
    });
  };

  render() {
    return <InnerImageFader>{this.createImages()}</InnerImageFader>;
  }
}
