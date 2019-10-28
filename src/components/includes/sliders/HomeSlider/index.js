/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { mediaMin } from '~/styles/mediaQueries';
import Slide from './Slide';
import LeftArrow from '~/images/icons/arrow-left.svg';
import RightArrow from '~/images/icons/arrow-right.svg';

const NextArrow = ({ className, onClick }) => (
  <img src={RightArrow} alt="next arrow" className={className} onClick={onClick} />
);

const PrevArrow = ({ className, onClick }) => (
  <img src={LeftArrow} alt="previous arrow" className={className} onClick={onClick} />
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

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
          height: 100%;
          ${mediaMin('tabletLandscape')} {
            height: 90%;
          }
          div {
            height: 100%;
          }
        }
      }
    }
    .slick-arrow {
      display: block;
      z-index: 10;
      top: initial;
      width: 10px;
      bottom: 0%;
      ${mediaMin('tabletLandscape')} {
        bottom: 5%;
        transform: translate(200%, 50%);
      }
    }
    .slick-next {
      right: calc(10% - 20px);
      ${mediaMin('tabletLandscape')} {
        left: 2em;
      }
    }
    .slick-prev {
      right: calc(10% + 20px);
      ${mediaMin('tabletLandscape')} {
        right: 2em;
      }
    }
  }
`;

const HomeSlider = ({ slideArray }) => {
  const SliderRef = useRef(null);

  const generateSlides = () => {
    return slideArray.reverse().map(slide => <Slide slide={slide} key={slide.contentful_id} />);
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
