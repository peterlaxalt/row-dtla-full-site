import ClickSlider from '../components/ClickSlider';
import ImageFader from '../components/Fader';
import BeforeAfter from '../components/BeforeAfter';
import ScrollUp from '../components/ScrollUp';
import BrandSpinner from '../components/BrandSpinner';
import {
  testArray,
  testTitleArray,
  testBefore,
  testAfter
} from '../data/test.js';

const Buildings = () => (
  <div>
    <p>Buildings Next.js</p>
    <ClickSlider imgArray={testTitleArray} index={true} autoPlay={true} />
    <ImageFader imgArray={testArray} autoPlay={true} />
    <BeforeAfter before={testBefore} after={testAfter} />
    <BrandSpinner />
    <ScrollUp />
  </div>
);

export default Buildings;
