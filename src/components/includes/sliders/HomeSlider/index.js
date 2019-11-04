/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { mediaMin } from '~/styles/mediaQueries';
import Slide from './Slide';
import LeftArrow from '~/assets/images/icons/arrow-left.svg';
import RightArrow from '~/assets/images/icons/arrow-right.svg';

const NextArrow = ({ className, onClick }) => (
  <img src={RightArrow} alt="next arrow" className={className} onClick={onClick} />
);

const PrevArrow = ({ className, onClick }) => (
  <img src={LeftArrow} alt="previous arrow" className={className} onClick={onClick} />
);

const SliderContainer = styled.div`
  ${mediaMin('tabletLandscape')} {
    height: calc(100vh - 100px);
  }
  .slick-slider {
    width: 100%;
    height: 100%;
    .slick-list {
      margin: 0 auto;
      height: 100%;
      width: 100%;
      .slick-track {
        height: 100%;
        .slick-slide {
          visibility: hidden;
          ${mediaMin('tabletLandscape')} {
            height: 90%;
          }
          div {
            height: 100%;
          }
        }
        .slick-active {
          visibility: visible;
        }
      }
    }
    .slick-arrow {
      display: block;
      z-index: 10;
      top: initial;
      width: 10px;
      bottom: 5%;
      left: unset;
      right: 20%;
      ${mediaMin('tabletLandscape')} {
        right: unset;
        left: 1%;
        bottom: 4%;
      }
    }
    .slick-next {
      transform: translateX(10px);
    }
    .slick-prev {
      transform: translateX(-10px);
    }
  }
`;

const HomeSlider = ({ slideArray }) => {
  const SliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // lazyLoad: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const generateSlides = () => {
    return slideArray.map(slide => <Slide slide={slide} arrayLength={slideArray.length} key={slide.contentful_id} />);
  };

  return (
    <SliderContainer>
      <Slider ref={SliderRef} {...settings}>
        {generateSlides()}
      </Slider>
    </SliderContainer>
  );
};

export default HomeSlider;
