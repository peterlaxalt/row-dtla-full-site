import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import CopyrightFooter from '~/components/CopyrightFooter';
import Layout from '~/components/layouts/default';
import ImageSlider from '~/components/Slider';
import AvailabilityList from '~/components/AvailabilityList';
import ScrollUp from '~/components/ScrollUp';
import { mediaMin } from '~/styles/MediaQueries';

const imageArray = [
  {
    imgUrl: '/static/images/availability/1_Landing_Carousel/1-availability',
    imgAlt: '155 Avenue of the Americas white boxed space'
  },
  {
    imgUrl: '/static/images/availability/1_Landing_Carousel/2-availability',
    imgAlt: '435 Hudson Street white boxed space'
  },
  {
    imgUrl: '/static/images/availability/1_Landing_Carousel/3-availability',
    imgAlt: '205 Hudson Street pre-built space'
  }
];

const PaddingCol = styled.div`
  box-sizing: border-box;
  padding: 0 15px;
  ${mediaMin.tabletLandscape`
padding: 0 40px;
`}
`;

const AvailabilityPage = () => (
  <Layout title="Availability">
    <Fade>
      <ImageSlider imgArray={imageArray} showQuotes autoPlay />
    </Fade>
    <Fade>
      <PaddingCol>
        <AvailabilityList hasFilter />
      </PaddingCol>
    </Fade>
    <ScrollUp />
    <CopyrightFooter />
  </Layout>
);

export default AvailabilityPage;
