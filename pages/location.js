import styled from 'styled-components';
import ImageSlider from '../components/Slider';
import ScrollUp from '../components/ScrollUp';
import CopyrightFooter from '../components/CopyrightFooter';
import Context from '../config/Context';
import ResponsiveImage from '../components/ResponsiveImage';
import {
  locationArrayOne,
  locationArrayTwo,
  locationArrayThree,
  locationArrayFour,
  locationArrayFive
} from '../data/location';

const MainCol = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 200px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const InnerCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  img,
  .responsive-image {
    max-width: 100%;
    max-height: 100%;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
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

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;

const BrandHeading = styled.div`
  font-size: 19px;
  font-weight: 700;
  line-height: 28px;
  padding: 0 0 10px 0;
  margin: 0 0 30px 0;
  border-bottom: 3px solid black;
`;

const BrandRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
  img {
    width: 20%;
    height: 100px;
    object-fit: scale-down;
    @media screen and (max-width: 1024px) {
      width: 40%;
    }
  }
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Location = () => (
  <Context.Consumer>
    {context => (
      <div>
        <ImageSlider
          height="95vh"
          imgArray={locationArrayOne}
          autoPlay={true}
          showQuotes={true}
          fade={true}
        />
        <ImageSlider
          height="95vh"
          imgArray={locationArrayTwo}
          autoPlay={true}
          showQuotes={true}
        />
        {context.state.windowDimensions.width > 1024 ? (
          <MainCol id="section-neighborhood-hudson">
            <InnerCol>
              <TextSection>
                <h2 className="text-heading">HUDSON SQUARE</h2>
                <p className="text-body">
                  Hudson Square is situated between the Hudson River and Avenue
                  of the Americas, from Houston Street to Canal Street. Once
                  known as New York City’s Printing District, this tiny pocket
                  of enormous 19th- and early 20th-century former printing
                  houses has evolved alongside the publishing industry. Today
                  all that old-school architecture houses an impressive array of
                  high-profile media, advertising and communications companies,
                  from Google to Horizon Media. Join us as we continue to
                  transform the area into a vibrant, 24-hour destination.
                </p>
              </TextSection>
              <ResponsiveImage srcPath="/static/images/location/2_Hudson_Square_Carousel/neighborhood-hudson-banner-left" />
            </InnerCol>
            <InnerCol>
              <ResponsiveImage srcPath="/static/images/location/2_Hudson_Square_Carousel/neighborhood-hudson-banner-right" />
            </InnerCol>
          </MainCol>
        ) : (
          <MainCol id="section-neighborhood-hudson">
            <InnerCol>
              <TextSection>
                <h2 className="text-heading">HUDSON SQUARE</h2>
                <p className="text-body">
                  Hudson Square is situated between the Hudson River and Avenue
                  of the Americas, from Houston Street to Canal Street. Once
                  known as New York City’s Printing District, this tiny pocket
                  of enormous 19th- and early 20th-century former printing
                  houses has evolved alongside the publishing industry. Today
                  all that old-school architecture houses an impressive array of
                  high-profile media, advertising and communications companies,
                  from Google to Horizon Media. Join us as we continue to
                  transform the area into a vibrant, 24-hour destination.
                </p>
              </TextSection>
              <img src="/static/images/location/2_Hudson_Square_Carousel/neighborhood-hudson-banner-mobile.png" />
            </InnerCol>
          </MainCol>
        )}
        <BrandSection>
          <BrandHeading>
            Some of our current tenants in Hudson Square
          </BrandHeading>
          <BrandRow>
            <img
              src="/static/images/tenants/logo-tenant-viacom.png"
              alt="viacom"
            />
            <img
              src="/static/images/tenants/logo-tenant-harrys.png"
              alt="harry's"
            />
            <img
              src="/static/images/tenants/logo-tenant-medidata.png"
              alt="medidata"
            />
            <img
              src="/static/images/tenants/logo-tenant-horizonmedia.png"
              alt="horizon media"
            />
          </BrandRow>
        </BrandSection>
        <ImageSlider
          height="95vh"
          imgArray={locationArrayThree}
          autoPlay={true}
          showQuotes={true}
        />
        {context.state.windowDimensions.width > 1024 ? (
          <MainCol id="section-neighborhood-soho">
            <InnerCol>
              <ResponsiveImage srcPath="/static/images/location/3_Soho_Carousel/neighborhood-soho-banner-left" />
            </InnerCol>
            <InnerCol>
              <TextSection>
                <h2 className="text-heading">SOHO</h2>
                <p className="text-body">
                  The storied area east of Avenue of the Americas, between
                  Houston and Canal streets, was dubbed Soho in the early 1970s,
                  when it emerged as an art mecca. Today all these historic
                  Queen Anne and cast-iron buildings house more high-end
                  clothing stores than artists’ lofts, but the creative spirit
                  of this former art mecca lives on. Top-tier makers in
                  beautifully designed spaces draw ever-revolving crowds who
                  spark with new ideas and perspectives.
                </p>
              </TextSection>
              <ResponsiveImage srcPath="/static/images/location/3_Soho_Carousel/neighborhood-soho-banner-right" />
            </InnerCol>
          </MainCol>
        ) : (
          <MainCol id="section-neighborhood-soho">
            <InnerCol>
              <TextSection>
                <h2 className="text-heading">SOHO</h2>
                <p className="text-body">
                  The storied area east of Avenue of the Americas, between
                  Houston and Canal streets, was dubbed Soho in the early 1970s,
                  when it emerged as an art mecca. Today all these historic
                  Queen Anne and cast-iron buildings house more high-end
                  clothing stores than artists’ lofts, but the creative spirit
                  of this former art mecca lives on. Top-tier makers in
                  beautifully designed spaces draw ever-revolving crowds who
                  spark with new ideas and perspectives.
                </p>
              </TextSection>
              <img src="/static/images/location/3_Soho_Carousel/neighborhood-soho-banner-mobile.png" />
            </InnerCol>
          </MainCol>
        )}
        <BrandSection>
          <BrandHeading>Some of our current tenants in Soho</BrandHeading>
          <BrandRow>
            <img
              src="/static/images/tenants/logo-tenant-ducati.png"
              alt="ducati"
            />
            <img
              src="/static/images/tenants/logo-tenant-accenture.png"
              alt="accenture"
            />
            <img
              src="/static/images/tenants/logo-tenant-twosigma.png"
              alt="two sigma"
            />
            <img
              src="/static/images/tenants/logo-tenant-cafealtroparadiso.png"
              alt="cafe altro paradiso"
            />
          </BrandRow>
        </BrandSection>
        <ImageSlider
          height="95vh"
          imgArray={locationArrayFour}
          autoPlay={true}
          showQuotes={true}
        />
        {context.state.windowDimensions.width > 1024 ? (
          <MainCol id="section-neighborhood-tribeca">
            <InnerCol>
              <TextSection>
                <h2 className="text-heading">TRIBECA</h2>
                <p className="text-body">
                  Tucked between Canal Street, Broadway, and the Hudson River,
                  Tribeca has an intimate air. Former warehouses and industrial
                  buildings, artfully converted, create a street-level
                  spaciousness, making its eclectic mix of shops, businesses,
                  and residences seem almost tranquil. No wonder it’s one of
                  Manhattan’s most desirable neighborhoods.
                </p>
              </TextSection>
              <ResponsiveImage srcPath="/static/images/location/4_Tribeca_Carousel/neighborhood-tribeca-banner-left" />
            </InnerCol>
            <InnerCol>
              <ResponsiveImage srcPath="/static/images/location/4_Tribeca_Carousel/neighborhood-tribeca-banner-right" />
            </InnerCol>
          </MainCol>
        ) : (
          <MainCol id="section-neighborhood-tribeca">
            <InnerCol>
              <TextSection>
                <h2 className="text-heading">TRIBECA</h2>
                <p className="text-body">
                  Tucked between Canal Street, Broadway, and the Hudson River,
                  Tribeca has an intimate air. Former warehouses and industrial
                  buildings, artfully converted, create a street-level
                  spaciousness, making its eclectic mix of shops, businesses,
                  and residences seem almost tranquil. No wonder it’s one of
                  Manhattan’s most desirable neighborhoods.
                </p>
              </TextSection>
              <img src="/static/images/location/4_Tribeca_Carousel/neighborhood-tribeca-banner-mobile.png" />
            </InnerCol>
          </MainCol>
        )}
        <BrandSection>
          <BrandHeading>Some of our current tenants in Tribeca</BrandHeading>
          <BrandRow>
            <img
              src="/static/images/tenants/logo-tenant-havas.png"
              alt="havas"
            />
            <img
              src="/static/images/tenants/logo-tenant-wework.png"
              alt="we work"
            />
            <img
              src="/static/images/tenants/logo-tenant-arrojo.png"
              alt="arrojo"
            />
            <img
              src="/static/images/tenants/logo-tenant-maman.png"
              alt="maman"
            />
          </BrandRow>
        </BrandSection>
        <ImageSlider
          height="95vh"
          imgArray={locationArrayFive}
          autoPlay={true}
          showQuotes={true}
        />
        {context.state.windowDimensions.width > 1024 ? (
          <MainCol id="section-neighborhood-west-village">
            <InnerCol>
              <TextSection>
                <h2 className="text-heading">WEST VILLAGE</h2>
                <p className="text-body">
                  The small, lively blocks between Houston Street and 14th
                  Street give the West Village the same village-like feel that
                  could be found 20, 50, and even 100 years ago. Elegant
                  red-brick townhouses line leafy streets dotted with small
                  shops and cafes, drawing New Yorkers night and day.
                </p>
              </TextSection>
              <ResponsiveImage srcPath="/static/images/location/5_West_Village/neighborhood-west-village-banner-left" />
            </InnerCol>
            <InnerCol>
              <ResponsiveImage srcPath="/static/images/location/5_West_Village/neighborhood-west-village-banner-right" />
            </InnerCol>
          </MainCol>
        ) : (
          <MainCol id="section-neighborhood-west-village">
            <InnerCol>
              <TextSection>
                <h2 className="text-heading">WEST VILLAGE</h2>
                <p className="text-body">
                  The small, lively blocks between Houston Street and 14th
                  Street give the West Village the same village-like feel that
                  could be found 20, 50, and even 100 years ago. Elegant
                  red-brick townhouses line leafy streets dotted with small
                  shops and cafes, drawing New Yorkers night and day.
                </p>
              </TextSection>
              <img src="/static/images/location/5_West_Village/neighborhood-west-village-banner-mobile.png" />
            </InnerCol>
          </MainCol>
        )}
        <ScrollUp />
        <CopyrightFooter />
      </div>
    )}
  </Context.Consumer>
);

export default Location;
