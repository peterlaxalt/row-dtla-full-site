import Layout from '../components/layouts/default';
import ImageSlider from '../components/Slider';
import AvailabilityList from '../components/AvailabilityList';
const imageArray = [
  {
    imgUrl: '/static/images/availability/1_Landing_Carousel/1-availability.jpg',
    imgAlt: '155 Avenue of the Americas white boxed space'
  },
  {
    imgUrl: '/static/images/availability/1_Landing_Carousel/2-availability.jpg',
    imgAlt: '435 Hudson Street white boxed space'
  },
  {
    imgUrl: '/static/images/availability/1_Landing_Carousel/3-availability.jpg',
    imgAlt: '205 Hudson Street pre-built space'
  }
];
const AvailabilityPage = () => (
  <Layout title="Availability">
    <ImageSlider imgArray={imageArray} showQuotes={true} autoPlay={true} />
    <AvailabilityList hasFilter={true} />
  </Layout>
);

export default AvailabilityPage;
