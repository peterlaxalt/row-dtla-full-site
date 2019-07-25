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
  .bullet-container {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    background: purple;
    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 0;
      li {
        height: 20px;
        width: 20px;
        background: ${props => (props.active ? '#000' : '#fff')};
        border: 3px solid black;
        border-radius: 50%;
        list-style-type: none;
        margin: 0 10px;
        cursor: pointer;

        &:hover {
          background: #000;
          transition: background 200ms ease;
        }
        &.active {
          background: #000;
          transition: background 500ms ease;
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
    this.sliderInterval = setInterval(this.nextSlide, 9000);
  };

  nextSlide = () => {
    const nextSlide = (this.state.currentSlide + 1) % this.props.indexArray.length;
    this.setState({ currentSlide: nextSlide });
  };

  stopRotation = () => {
    clearInterval(this.sliderInterval);

    this.setState({
      currentSlide: 0
    });
  };

  createSlides() {
    const { currentSlide } = this.state;

    return this.props.indexArray.map((slide, idx) => (
      <div key={`home-slide-${idx}`} className={`desktop-outer-slide ${currentSlide === idx ? 'active' : ''}`}>
        <InnerFader imgArray={slide.imgArray} active={currentSlide === idx} />
        <Link href="#" passHref>
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

  changeSlide() {
    console.log('clicked');
  }

  createBullets = () => {
    const { currentSlide } = this.state;

    const bullets = [];

    for (let idx = 0; idx < this.props.indexArray.length; idx++) {
      let bullet = (
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
          <DesktopSliderContainer>
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
    this.sliderInterval = setInterval(this.nextImage, 3000);
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
