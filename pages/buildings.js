import Layout from '../components/Layout.js';
import ImageSlider from '../components/Slider';
import ImageFader from '../components/Fader';
import BeforeAfter from '../components/BeforeAfter';
import { testArray, testBefore, testAfter } from '../data/test.js';

const BuildingsPage = () => (
  <Layout title="Buildings">
    <p>Buildings Next.js</p>
    <ImageFader imgArray={testArray} />
    <ImageSlider imgArray={testArray} showQuotes={true} />
    <BeforeAfter before={testBefore} after={testAfter} />
  </Layout>
);

export default BuildingsPage;
