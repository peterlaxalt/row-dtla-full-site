import Layout from '../components/layouts/default.js';
import ImageSlider from '../components/Slider';
import ImageFader from '../components/Fader';
import BeforeAfter from '../components/BeforeAfter';
import ScrollUp from '../components/ScrollUp';
import { testArray, testBefore, testAfter } from '../data/test.js';

const BuildingsPage = () => (
  <Layout title="Buildings">
    <p>Buildings Next.js</p>
    <ImageFader imgArray={testArray} autoPlay={true} />
    <ImageSlider imgArray={testArray} showQuotes={true} autoPlay={true} />
    <BeforeAfter before={testBefore} after={testAfter} />
    <ScrollUp />
  </Layout>
);

export default BuildingsPage;
