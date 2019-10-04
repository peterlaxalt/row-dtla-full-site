import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import Context from '~/config/Context';

import retailSlider from '~/data/retail';

import ImageSlider from '~/components/sliders/Slider';
import AvailabilityList from '~/components/AvailabilityList';
import CopyrightFooter from '~/components/CopyrightFooter';
import ScrollUp from '~/components/ScrollUp';
import ResponsiveImage from '~/components/images/ResponsiveImage';
import ContactCard from '~/components/ContactCard';
import { mediaMin } from '~/styles/MediaQueries';

const RetailCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MainCol = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 200px;
`;

const InnerCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  .responsive-image {
    max-height: 100%;
    max-width: 100%;
  }
`;

const PaddingCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  ${mediaMin.tabletLandscape`
    padding: 0 40px;
  `}
`;

const TextSection = styled.div`
  padding: 25px 0 0 0;
  ${mediaMin.tabletLandscape`
    padding: 200px 40px 0 40px;
  `}
  .text-heading {
    font-size: 34px;
    font-weight: 500;
    width: 100%;
    text-align: center;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .text-body {
    font-size: 19px;
    line-height: 28px;
  }
`;

const ContactRow = styled.div`
  width: 100%;
  margin-bottom: 80px;
`;

const ContactHeading = styled.h2`
  margin: 0;
  height: 30px;
  font-weight: 500;
  padding-bottom: 20px;
  border-bottom: 3px solid black;
  box-sizing: content-box;
`;

const MobileHeading = styled.h2`
  line-height: 30px;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  padding: 12px 0;
  border-bottom: 3px solid black;
  margin: 0 0 30px 0;
  ${mediaMin.tabletLandscape`
    font-size: 24px;
    line-height: 24px;
    padding: 20px 0;
  `}
`;

const contactInfo = {
  full_name: 'Frank Reiser',
  phone_number: '914.714.0444',
  email_address: 'freiser@tungstenproperty.com'
};

const Retail = () => (
  <Context.Consumer>
    {context =>
      context.state.windowDimensions.width > 1024 ? (
        /* DESKTOP */
        <RetailCol>
          <Fade>
            <ImageSlider imgArray={retailSlider} autoPlay showQuotes />
          </Fade>
          <Fade>
            <MainCol>
              <InnerCol>
                <TextSection>
                  <h2 className="text-heading">RETAIL</h2>
                  <p className="text-body">
                    Hudson Square is set to be the next big New York City focal point. Formerly a 19th-century
                    manufacturing district, the blocks between West Village, Tribeca, Soho, and the Hudson River are
                    fast becoming a hub of 21st-century creative industries. High ceilings and striking architectural
                    details draw tenants looking to establish or expand a flagship presence mixing destination-level
                    tenants with established New York favorites.
                    <br />
                    <br />
                    Hudson Square Properties offers an active retail leasing environment of spaces available and coming
                    to market. We believe retail leasing is a form of partnership that should be handled strategically.
                    While our neighborhood provides outstanding opportunities for companies to grow in a flourishing
                    market, our ethos ensures long-term relationships that bring innovative spaces to fruition. Come
                    join us.
                  </p>
                </TextSection>
                <ResponsiveImage srcPath="/static/images/retail/retail-banner-left" />
              </InnerCol>
              <InnerCol>
                <ResponsiveImage srcPath="/static/images/retail/retail-banner-right" />
              </InnerCol>
            </MainCol>
          </Fade>
          <PaddingCol>
            <Fade>
              <ContactRow>
                <ContactHeading>Retail Leasing Inquiries</ContactHeading>
                <ContactCard cardData={contactInfo} />
              </ContactRow>
            </Fade>
            <Fade>
              <AvailabilityList retail />
            </Fade>
          </PaddingCol>
          <ScrollUp />
          <CopyrightFooter />
        </RetailCol>
      ) : (
        /* MOBILE */
        <RetailCol>
          <PaddingCol>
            <MobileHeading>Retail</MobileHeading>
          </PaddingCol>
          <Fade>
            <ImageSlider imgArray={retailSlider} autoPlay showQuotes />
          </Fade>
          <PaddingCol>
            <Fade>
              <TextSection>
                <h2 className="text-heading">Retail</h2>
                <p className="text-body">
                  Hudson Square is set to be the next big New York City focal point. Formerly a 19th-century
                  manufacturing district, the blocks between West Village, Tribeca, Soho, and the Hudson River are fast
                  becoming a hub of 21st-century creative industries. High ceilings and striking architectural details
                  draw tenants looking to establish or expand a flagship presence mixing destination-level tenants with
                  established New York favorites.
                  <br />
                  <br />
                  Hudson Square Properties offers an active retail leasing environment of spaces available and coming to
                  market. We believe retail leasing is a form of partnership that should be handled strategically. While
                  our neighborhood provides outstanding opportunities for companies to grow in a flourishing market, our
                  ethos ensures long-term relationships that bring innovative spaces to fruition. Come join us.
                </p>
              </TextSection>
            </Fade>
            <Fade>
              <ResponsiveImage srcPath="/static/images/retail/retail-banner-mobile" width="100%" />
            </Fade>
            <Fade>
              <ContactRow>
                <ContactHeading>Retail Leasing Inquiries</ContactHeading>
                <ContactCard cardData={contactInfo} />
              </ContactRow>
            </Fade>
            <Fade>
              <AvailabilityList retail />
            </Fade>
          </PaddingCol>
          <ScrollUp />
          <CopyrightFooter />
        </RetailCol>
      )
    }
  </Context.Consumer>
);

export default Retail;
