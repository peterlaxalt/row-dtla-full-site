import ImageSlider from '../components/Slider';
import ImageFader from '../components/Fader';
import BeforeAfter from '../components/BeforeAfter';
import ScrollUp from '../components/ScrollUp';
import BrandSpinner from '../components/BrandSpinner';
import { testArray, testBefore, testAfter } from '../data/test.js';

const Buildings = () => (
  <div>
    <p>Buildings Next.js</p>
    <ImageFader imgArray={testArray} autoPlay={true} />
    <ImageSlider imgArray={testArray} showQuotes={true} autoPlay={true} />
    <BeforeAfter before={testBefore} after={testAfter} />
    <BrandSpinner />
    <ScrollUp />
  </div>
);

export default Buildings;
