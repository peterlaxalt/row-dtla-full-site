import styled from 'styled-components';
import ImageSlider from '../components/Slider';
import retailSlider from '../data/retail';
import AvailabilityList from '../components/AvailabilityList';
import CopyrightFooter from '../components/CopyrightFooter';
import ScrollUp from '../components/ScrollUp';
import Context from '../config/Context';
import ResponsiveImage from '../components/ResponsiveImage';

const MobileCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
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

const TextSection = styled.div`
  padding: 200px 40px 0 40px;
  .text-heading {
    font-size: 34px;
    font-weight: 500;
    width: 100%;
    text-align: center;
  }
  .text-body {
    font-size: 19px;
    line-height: 28px;
  }
  @media screen and (max-width: 1024px) {
    padding: 100px 15px 0 15px;
  }
`;

const BottomCol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  @media screen and (max-width: 1024px) {
    padding: 0 15px;
  }
`;

const ContactRow = styled.div`
  margin-bottom: 80px;
`;

const ContactHeading = styled.h2`
  margin: 0;
  height: 30px;
  padding-bottom: 20px;
  border-bottom: 3px solid black;
  box-sizing: content-box;
`;

const MobileHeading = styled.h2`
  margin: 0;
  height: 30px;
  padding: 10px 0;
  margin: 0 15px 30px 15px;
  border-bottom: 3px solid black;
  box-sizing: content-box;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContactBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  .name,
  .phone {
    margin-bottom: 10px;
  }
  .name {
    font-weight: bold;
  }
`;

const Retail = () => (
  <Context.Consumer>
    {context =>
      context.state.windowDimensions.width > 1024 ? (
        /* DESKTOP */
        <div title="Retail">
          <ImageSlider
            imgArray={retailSlider}
            autoPlay={true}
            showQuotes={true}
          />
          <MainCol>
            <InnerCol>
              <TextSection>
                <h2 className="text-heading">RETAIL</h2>
                <p className="text-body">
                  Hudson Square is set to be the next big New York City focal
                  point. Formerly a 19th-century manufacturing district, the
                  blocks between West Village, Tribeca, Soho, and the Hudson
                  River are fast becoming a hub of 21st-century creative
                  industries. High ceilings and striking architectural details
                  draw tenants looking to establish or expand a flagship
                  presence mixing destination-level tenants with established New
                  York favorites.
                  <br />
                  <br />
                  Hudson Square Properties offers an active retail leasing
                  environment of spaces available and coming to market. We
                  believe retail leasing is a form of partnership that should be
                  handled strategically. While our neighborhood provides
                  outstanding opportunities for companies to grow in a
                  flourishing market, our ethos ensures long-term relationships
                  that bring innovative spaces to fruition. Come join us.
                </p>
              </TextSection>
              <ResponsiveImage srcPath="/static/images/retail/retail-banner-left" />
            </InnerCol>
            <InnerCol>
              <ResponsiveImage srcPath="/static/images/retail/retail-banner-right" />
            </InnerCol>
          </MainCol>
          <BottomCol>
            <ContactRow>
              <ContactHeading>Retail Leasing Inquiries</ContactHeading>
              <ContactBody>
                <span className="name">Frank Reiser</span>
                <a className="phone" href="tel:9147140444">
                  914.714.0444
                </a>
                <a className="email" href="mailto:freiser@tungstenproperty.com">
                  freiser@tungstenproperty.com
                </a>
              </ContactBody>
            </ContactRow>
            <AvailabilityList retail={true} />
          </BottomCol>
          <ScrollUp />
          <CopyrightFooter />
        </div>
      ) : (
        /* MOBILE */
        <div title="Retail">
          <MobileHeading>Retail</MobileHeading>
          <ImageSlider
            imgArray={retailSlider}
            autoPlay={true}
            showQuotes={true}
          />
          <MobileCol>
            <TextSection>
              <h2 className="text-heading">RETAIL</h2>
              <p className="text-body">
                Hudson Square is set to be the next big New York City focal
                point. Formerly a 19th-century manufacturing district, the
                blocks between West Village, Tribeca, Soho, and the Hudson River
                are fast becoming a hub of 21st-century creative industries.
                High ceilings and striking architectural details draw tenants
                looking to establish or expand a flagship presence mixing
                destination-level tenants with established New York favorites.
                <br />
                <br />
                Hudson Square Properties offers an active retail leasing
                environment of spaces available and coming to market. We believe
                retail leasing is a form of partnership that should be handled
                strategically. While our neighborhood provides outstanding
                opportunities for companies to grow in a flourishing market, our
                ethos ensures long-term relationships that bring innovative
                spaces to fruition. Come join us.
              </p>
            </TextSection>
            <ResponsiveImage srcPath="/static/images/retail/retail-banner-mobile" />
          </MobileCol>
          <BottomCol>
            <ContactRow>
              <ContactHeading>Retail Leasing Inquiries</ContactHeading>
              <ContactBody>
                <span className="name">Frank Reiser</span>
                <a className="phone" href="tel:9147140444">
                  914.714.0444
                </a>
                <a className="email" href="mailto:freiser@tungstenproperty.com">
                  freiser@tungstenproperty.com
                </a>
              </ContactBody>
            </ContactRow>
            <AvailabilityList retail={true} />
          </BottomCol>
          <ScrollUp />
          <CopyrightFooter />
        </div>
      )
    }
  </Context.Consumer>
);

export default Retail;
