import CopyrightFooter from '../components/CopyrightFooter';
import Layout from '../components/layouts/default';
import ImageSlider from '../components/Slider';
import AvailabilityList from '../components/AvailabilityList';
import ScrollUp from '../components/ScrollUp';
import styled from 'styled-components';
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
  padding: 0 40px;
`;

const AvailabilityPage = () => (
  <Layout title="Availability">
    <ImageSlider imgArray={imageArray} showQuotes={true} autoPlay={true} />
    <PaddingCol>
      <AvailabilityList hasFilter={true} />
    </PaddingCol>
    <ScrollUp />
    <CopyrightFooter />
  </Layout>
);

export default AvailabilityPage;
