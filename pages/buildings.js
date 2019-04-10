import ClickSlider from '../components/ClickSlider';
import ScrollUp from '../components/ScrollUp';
import CopyrightFooter from '../components/CopyrightFooter';
import BrandSpinner from '../components/BrandSpinner';
import { buildingsSlider } from '../data/buildings';
import Context from '../config/Context';
import styled from 'styled-components';
import ResponsiveImage from '../components/ResponsiveImage';

const BuildingsCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PaddingCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 40px;
  .responsive-image {
    width: 75%;
    max-width: 100%;
    max-height: 100%;
  }
`;

const SectionHeader = styled.span`
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
  width: 100%;
  padding: 20px 0;
  border-bottom: 3px solid black;
  margin-bottom: 30px;
`;

const Buildings = () => (
  <Context.Consumer>
    {context => (
      <BuildingsCol>
        <ClickSlider
          imgArray={buildingsSlider}
          autoPlay={true}
          windowWidth={context.state.windowDimensions.width}
        />
        <PaddingCol>
          <SectionHeader>Our Tenants</SectionHeader>
          <BrandSpinner />
          <SectionHeader>Our Tenants by Industry</SectionHeader>
          <ResponsiveImage
            srcPath="static/images/buildings/DesktopTenantChart"
            imgAlt="Tenants"
          />
        </PaddingCol>
        <CopyrightFooter />
        <ScrollUp />
      </BuildingsCol>
    )}
  </Context.Consumer>
);

export default Buildings;
