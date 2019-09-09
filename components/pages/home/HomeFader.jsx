import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ResponsiveImage from '~/components/ResponsiveImage';
import { mediaMin } from '~/styles/MediaQueries';

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
    margin-bottom: 5px;
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

      &.white {
        color: #fff;
      }

      &.black {
        color: #000;
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
    transition: all 2s ease;
    &.active {
      opacity: 1;
      visibility: visible;
    }
    a.slide-link {
      display: block;
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      z-index: 10;
      font-weight: 600;
      letter-spacing: 3px;
      font-size: 36px;
      width: 100%;
      text-align: center;
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

  .prev-arrow,
  .next-arrow {
    position: absolute;
    top: 0;
    width: 80px;
    height: 100%;
    background: rgba(256, 256, 256, 0);
    cursor: pointer;
    z-index: 11;
  }

  .prev-arrow {
    left: 0;
    &:hover {
      background: linear-gradient(to right, #03a8f442, #ffff0000);
    }
  }

  .next-arrow {
    right: 0;
    &:hover {
      background: linear-gradient(to left, #03a8f442, #ffff0000);
    }
  }

  .bullet-container {
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 0;
      li {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        list-style-type: none;
        margin: 0 10px;
        cursor: pointer;
        background: #fff;
        border: 2px solid #fff;

        &:hover {
          background: #000;
          border: 2px solid #000;
          transition: all 150ms ease;
        }

        &.active {
          margin: -2px 10px 0;
          border: 2px solid #000;
          height: 14px;
          width: 14px;
        }
      }
    }
  }
`;

export default class HomeFader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0
    };
  }

  componentDidMount() {
    this.startRotation();
  }

  componentWillUnmount() {
    this.stopRotation();
  }

  startRotation = () => {
    this.outerFadeInterval = setInterval(this.nextSlide, 8100);
  };

  nextSlide = () => {
    const nextSlide = (this.state.currentSlide + 1) % this.props.indexArray.length;
    this.setState({ currentSlide: nextSlide });
  };

  stopRotation = (slide = 0) => {
    clearInterval(this.outerFadeInterval);

    this.setState({
      currentSlide: slide
    });
  };

  createSlides() {
    const { currentSlide } = this.state;

    return this.props.indexArray.map((slide, idx) => (
      <div key={`home-slide-${idx}`} className={`desktop-outer-slide ${currentSlide === idx ? 'active' : ''}`}>
        <InnerFader imgArray={slide.imgArray} active={currentSlide === idx} />
        <Link href={slide.link} passHref>
          {/* eslint-disable-next-line */}
          <a
            className={`slide-link ${currentSlide === idx ? 'active' : ''} ${
              this.props.indexArray[idx].titleText !== 'AVAILABILITY' ? 'white' : 'black'
            }`}
          >
            {this.props.indexArray[idx].titleText}
          </a>
        </Link>
      </div>
    ));
  }

  changeSlide(idx) {
    const { currentSlide } = this.state;

    if (idx === currentSlide) {
      return;
    }

    this.stopRotation(idx);
    this.startRotation();
  }

  createBullets = () => {
    const { currentSlide } = this.state;

    const bullets = [];

    for (let idx = 0; idx < this.props.indexArray.length; idx++) {
      let bullet = (
        // eslint-disable-next-line
        <li
          className={`${currentSlide === idx ? 'active' : ''}`}
          key={`home-slider-bullet-${idx}`}
          onClick={() => this.changeSlide(idx)}
        />
      );
      bullets.push(bullet);
    }

    return (
      <div className="bullet-container">
        <ul>{bullets}</ul>
      </div>
    );
  };

  createPrevNextArrows = () => {
    const { currentSlide } = this.state;
    const numSlides = this.props.indexArray.length;
    let prevSlide, nextSlide;

    if (currentSlide === 0) {
      prevSlide = numSlides - 1;
      nextSlide = currentSlide + 1;
    } else if (currentSlide === numSlides - 1) {
      prevSlide = numSlides - 1;
      nextSlide = 0;
    } else {
      prevSlide = currentSlide - 1;
      nextSlide = currentSlide + 1;
    }

    return (
      <React.Fragment>
        {/* eslint-disable-next-line */}
        <div className="prev-arrow" onClick={() => this.changeSlide(prevSlide)} />
        {/* eslint-disable-next-line */}
        <div className="next-arrow" onClick={() => this.changeSlide(nextSlide)} />
      </React.Fragment>
    );
  };

  createMobileSlides() {
    return this.props.mobileArray.map((slide, idx) => {
      return (
        <Link key={`home-slider-link-${idx}`} href={slide.link}>
          <div className="mobile-slide">
            <ResponsiveImage srcPath={slide.imgUrl} imgAlt={slide.imgAlt} />
            {/* eslint-disable-next-line */}
            <a className={`slide-link ${slide.titleText === 'AVAILABILITY' ? 'black' : 'white'}`}>{slide.titleText}</a>
          </div>
        </Link>
      );
    });
  }

  render() {
    const { loaded } = this.props;

    return (
      <SliderContainer loaded={loaded}>
        {this.props.windowWidth > 1024 ? (
          <DesktopSliderContainer>
            {this.createPrevNextArrows()}
            {this.createSlides()}
            {this.createBullets()}
          </DesktopSliderContainer>
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
      currentImage: 0,
      active: false
    };
  }

  componentDidMount() {
    const { active } = this.props;
    active && this.startRotation();
  }

  componentWillUnmount() {
    this.stopRotation();
  }

  componentDidUpdate() {
    if (this.props.active && !this.state.active) {
      this.startRotation();
    }
  }

  startRotation = () => {
    this.sliderInterval = setInterval(this.nextImage, 2700);
    this.setState({ active: true });
  };

  nextImage = () => {
    // Stop the image once it reaches the end of the cycle
    if (this.state.currentImage === this.props.imgArray.length - 1) {
      this.stopRotation();
      return;
    }

    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  stopRotation = () => {
    clearInterval(this.sliderInterval);

    this.setState({
      currentImage: 0,
      active: false
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
