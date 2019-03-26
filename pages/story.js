import styled from 'styled-components';
import ImageSlider from '../components/Slider';
import BeforeAfter from '../components/BeforeAfter';
import ScrollUp from '../components/ScrollUp';
import CopyrightFooter from '../components/CopyrightFooter';
import Context from '../config/Context';
import ResponsiveImage from '../components/ResponsiveImage';

const beforeAfterOne = {
  before: {
    path: '/static/images/story/1_Slider/1_Aerial_Now_Aligned',
    alt: ''
  },
  after: {
    path: '/static/images/story/1_Slider/1_Aerial_Then_Aligned',
    alt: ''
  }
};

const beforeAfterTwo = {
  before: {
    path: '',
    alt: ''
  },
  after: {
    path: '',
    alt: ''
  }
};

const Heading = styled.h2`
  font-size: 34px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 1px;
  text-align: center;
`;

const Story = () => (
  <div>
    <Heading>
      Hudson Square Properties is a joint venture of Trinity Church Wall Street
      and Norges Bank Real Estate Management with Hines, the operating partner,
      of a 12 building portfolio of approximately 6 million rentable square
      feet.
    </Heading>
    <BeforeAfter before={beforeAfterOne.before} after={beforeAfterOne.after} />
    <ScrollUp />
    <CopyrightFooter />
  </div>
);

export default Story;
