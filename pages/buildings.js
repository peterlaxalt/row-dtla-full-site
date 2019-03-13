import ImageSlider from '../components/Slider';
import ImageFader from '../components/Fader';
import BeforeAfter from '../components/BeforeAfter';
import { testArray, testBefore, testAfter } from '../data/test.js';

const BuildingsPage = () => (
  <div>
    <p>Buildings Next.js</p>
    <ImageFader imgArray={testArray} autoPlay={true} />
    <ImageSlider imgArray={testArray} showQuotes={true} autoPlay={true} />
    <BeforeAfter before={testBefore} after={testAfter} />
  </div>
);

export default BuildingsPage;
