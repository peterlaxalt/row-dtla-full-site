import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ResponsiveImage from './ResponsiveImage';
import { mediaMin } from '../styles/MediaQueries';

const SliderContainer = styled.div`
  opacity: ${props => (props.loaded ? 1 : 0)};
  transition: 1s opacity ease-in-out;
`;

// Mobile
const MobileSliderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .mobile-slide {
    margin-bottom: 1.5vh;
    height: 55vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .responsive-image {
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }

    a.slide-link {
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

      &:visited, &:focus {
        color: ${props => (props.titleText === 'AVAILABILITY' ? '#000' : '#fff')};
      }
    }
  }
`;

// Desktop
const DesktopSliderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: grey;

  .desktop-outer-slide {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 1s ease;
    &.active {
      opacity: 1;
      visibility: visible;
    }
    a.slide-link {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      z-index: 10;
      font-weight: 600;
      letter-spacing: 3px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      font-size: 36px;
      &.white {
        color: #fff;
        &:visited,
        &:focus {
          color: #fff;
        }
      }

      &.black {
        color: #000;
        &:visited,
        &:focus {
          color: #000;
        }
      }

      ${mediaMin.tabletLandscape`
        font-size: 110px;
      `}
    }
  }
`;

export default class HomeSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
      paused: false
    };
  }

  componentDidMount() {
    this.startRotation();
  }

  componentWillUnmount() {
    this.stopRotation();
  }

  startRotation = () => {
    this.sliderInterval = setTimeout(this.nextSlide, 9000);
  };

  nextSlide = () => {
    const nextSlide = this.state.currentSlide === 0 ? 1 : 0;
    this.setState({ currentSlide: nextSlide });
  };

  stopRotation = () => {
    clearInterval(this.sliderInterval);

    this.setState({
      currentSlide: 0,
      paused: true
    });
  };

  createSlides() {
    const { currentSlide } = this.state;

    return (
      <React.Fragment>
        <div className={`desktop-outer-slide ${currentSlide === 0 ? 'active' : ''}`}>
          <InnerFader imgArray={this.props.indexArray[0].imgArray} active={currentSlide === 0} />
          <Link href="#" passHref>
            {/* eslint-disable-next-line */}
            <a
              className={`slide-link ${currentSlide === 0 ? 'active' : ''} ${
                this.props.indexArray[0].titleText !== 'AVAILABILITY' ? 'white' : 'black'
              }`}
            >
              {this.props.indexArray[0].titleText}
            </a>
          </Link>
        </div>
        <div className={`desktop-outer-slide ${currentSlide === 1 ? 'active' : ''}`}>
          <InnerFader imgArray={this.props.indexArray[1].imgArray} active={currentSlide === 1} />
          <Link href="#" passHref>
            {/* eslint-disable-next-line */}
            <a
              className={`slide-link ${currentSlide === 1 ? 'active' : ''} ${
                this.props.indexArray[1].titleText !== 'AVAILABILITY' ? 'white' : 'black'
              }`}
            >
              {this.props.indexArray[1].titleText}
            </a>
          </Link>
        </div>
      </React.Fragment>
    );
    // return this.props.imgArray.map((el, idx) => {
    //   return (
    //     <SliderSlide key={idx}>
    //       <InnerFader imgArray={el.imgArray} active={this.state.currentSlide === idx} />
    //       <Link href={el.link}>
    //         {el.titleImg !== undefined ? (
    //           <TitleImage src={el.titleImg} />
    //         ) : (
    //           <TitleLink showTitle={this.state.showTitle} titleText={el.titleText}>
    //             {el.titleText}
    //           </TitleLink>
    //         )}
    //       </Link>
    //     </SliderSlide>
    //   );
    // });
  }

  createMobileSlides() {
    return <h1>Hello</h1>;
    // return this.props.mobileArray.map((el, idx) => {
    //   return (
    //     <Link key={`home-slider-link-${idx}`} href={el.link}>
    //       <div className="mobile-slide">
    //         <ResponsiveImage srcPath={el.imgUrl} imgAlt={el.imgAlt} />
    //         {/* eslint-disable-next-line */}
    //         <a className="slide-link" showTitle={this.state.showTitle} titleText={el.titleText}>
    //           {el.titleText}
    //         </a>
    //       </div>
    //     </Link>
    //   );
    // });
  }

  render() {
    const { loaded } = this.props;
    return (
      <SliderContainer loaded={loaded}>
        {this.props.windowWidth > 1024 ? (
          <DesktopSliderContainer>{this.createSlides()}</DesktopSliderContainer>
        ) : (
          <MobileSliderContainer>{this.createMobileSlides()}</MobileSliderContainer>
        )}
      </SliderContainer>
    );
  }
}

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

class InnerFader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0
    };
  }

  componentDidMount() {
    this.startRotation();
  }

  componentWillUnmount() {
    this.stopRotation();
  }

  startRotation = () => {
    this.sliderInterval = setInterval(this.nextImage, 3000);
  };

  nextImage = () => {
    // Stop the image once it reaches the end of the cycle
    // if (this.state.currentImage === this.props.imgArray.length - 1) {
    //   clearInterval(this.sliderInterval);
    //   setTimeout(() => {
    //     this.setState({ currentImage: 0 });
    //   }, 2000);
    //   return;
    // }

    this.setState({
      currentImage: (this.state.currentImage + 1) % this.props.imgArray.length
    });
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
