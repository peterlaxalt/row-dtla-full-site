import ClickSlider from '../components/ClickSlider';
import ImageFader from '../components/Fader';
import BeforeAfter from '../components/BeforeAfter';
import ScrollUp from '../components/ScrollUp';
import BrandSpinner from '../components/BrandSpinner';
import { buildingsSlider } from '../data/buildings';

const Buildings = () => (
  <div>
    <ClickSlider imgArray={buildingsSlider} autoPlay={true} />
    <BrandSpinner />
    <ScrollUp />
  </div>
);

export default Buildings;
