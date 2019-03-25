import HomeSlider from '../components/HomeSlider';
import { indexArray } from '../data/index.js';
import styled from 'styled-components';

const Copyright = styled.div`
  position: fixed;
  bottom: 2.5%;
  z-index: 100;
  color: #fff;
  font-size: 11px;
  width: 100%;
  text-align: center;
`;

const Index = () => (
  <React.Fragment>
    <HomeSlider imgArray={indexArray} autoPlay={true} />
    <Copyright>
      Copyright © 2019. No part of this website (eg. pictures, graphs, logos and
      others designing material) may be copied, disseminated or published for
      commercial or advertising use without the prior written permission from
      Hudson Square Properties.
    </Copyright>
  </React.Fragment>
);

export default Index;
