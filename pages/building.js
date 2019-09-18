import { withRouter } from 'next/router';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import { buildings } from '~/data/buildings';
import BuildingHeader from '~/components/pages/building/BuildingHeader';
import AvailabilityList from '~/components/AvailabilityList';
import ImageSlider from '~/components/Slider';
import BeforeAfter from '~/components/BeforeAfter';
import CopyrightFooter from '~/components/CopyrightFooter';
import ScrollUp from '~/components/ScrollUp';
import ResponsiveImage from '~/components/ResponsiveImage';
import MiniMap from '~/components/MiniMap';
import variables from '~/styles/Variables';
import ContactCard from '~/components/ContactCard';
import { mediaMin } from '../styles/MediaQueries';
import Context from '../config/Context';

const { colors } = variables;

const BuildingCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  .building-img {
    min-height: 100%;
    width: 100%;
  }
`;

const PaddingCol = styled.div`
  width: 100%;
  padding: 0 15px;
  ${mediaMin.tabletLandscape`
    padding: 0 40px;
  `}
`;

const Spacer = styled.div`
  width: 100%;
  min-height: ${props => (props.customHeight ? props.customHeight : '50px')};
`;

const FooterOverlay = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 19px;
  line-height: 28px;
  align-self: flex-end;
  margin-right: 20vw;
  transform: translate(0, -150%);
  z-index: 100;
  span {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .link {
    color: #369bf7;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 1024px) {
    font-size: 17px;
    line-height: 1.5;
    transform: translate(0, 0);
    align-self: flex-start;
    padding: 0 15px;
  }
`;

const ContactRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 0 0;
  padding: 0 0 30px 0;
  width: 100%;
`;

const RowTitle = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: #000;
  text-decoration: none;
  padding: 0 0 30px 0;
  margin: 30px 0 0 0;
  border-bottom: 3px solid black;
  font-size: 22px;
  font-weight: 500;
`;

const RowBody = styled.div`
  display: block;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-sizing: content-box;
  padding-top: 30px;
  padding-bottom: 30px;
  transition: max-height 0.25s ease-in-out, padding 0.25s ease-in-out;
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h3 {
    font-weight: 500;
    font-style: normal;
    border-bottom: 3px solid black;
    width: 100%;
    font-size: 24px;
    padding-bottom: 12px;
    margin-bottom: 12px;
  }
  p {
    margin-bottom: 40px;
    font-size: 17px;
    line-height: 25px;
    ${mediaMin.tabletLandscape`
      font-size: 19px;
      line-height: 29px;
    `}
  }
`;

const MapLink = styled.a`
  text-align: right;
  margin: 24px 0;
  cursor: pointer;
  color: ${colors.babyBlue};
  &:hover {
    text-decoration: underline;
  }
  &:visited {
    color: ${colors.babyBlue};
  }
`;

const FactRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${mediaMin.tabletLandscape`
    flex-direction: row;
  `}
`;

const FactRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  ${mediaMin.tabletLandscape`
    min-width: 65%;
  `}
`;

const Fact = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 17px;
  line-height: 25px;
  width: ${props => (props.fullWidth ? '100%' : '50%')};
  ${mediaMin.tabletLandscape`
  font-size: 19px;
  line-height: 25px;
    width: 33%;
  `}
  a {
    padding-top: 20px;
    color: ${variables.colors.babyBlue};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const createContactList = contactArray => {
  let contactListItems = contactArray.map((el, idx) => {
    return <ContactCard key={`contact-card-${idx}`} cardData={el} />;
  });
  return <ContactInfoList>{contactListItems}</ContactInfoList>;
};

const Building = props => {
  const { building } = props;

  const context = React.useContext(Context);

  let leasingContactArray = [];
  let retailLeasingContactArray = [];

  let contactData = context.contactData || context.state.appData.contactData;

  contactData.forEach(contact => {
    if (contact.buildings.includes(building.slug) && !contact.retail_leasing_inquiries) {
      leasingContactArray.push(contact);
    }
    if (contact.buildings.includes(building.slug) && contact.retail_leasing_inquiries) {
      retailLeasingContactArray.push(contact);
    }
  });

  const factInfoContainer = React.useRef(null);

  return (
    <BuildingCol>
      <Fade>
        <BuildingHeader headerInfo={building.header} />
      </Fade>
      <PaddingCol>
        <AboutSection>
          <h3>About {building.title}</h3>
          <p>{building.about}</p>
          <FactRowContainer ref={factInfoContainer} id="fact-row-container">
            <FactRow>
              <Fact>
                <span>Year Constructed:</span>
                <span>{building.yearConstructed}</span>
              </Fact>
              <Fact>
                <span>Total Building Area:</span>
                <span>{building.totalBuildingArea}</span>
              </Fact>
              <Fact className="ceiling-height">
                <span>Ceiling Heights:</span>
                {building.ceilingHeights.map(el => {
                  return <span key={el}>{el}</span>;
                })}
              </Fact>
              <Fact>
                <span>Number of Floors:</span>
                <span>{building.numFloors}</span>
              </Fact>
              <Fact>
                <span>Floor Sizes:</span>
                <span>{building.floorSizes}</span>
              </Fact>
              <Fact fullWidth>
                <a href={building.factSheet} target="_blank" rel="noopener noreferrer">
                  View Floor Plans and Detailed Specs
                </a>
              </Fact>
            </FactRow>
            <MiniMap mapCenter={building.mapCenter} building={building.title} factInfoContainer={factInfoContainer} />
          </FactRowContainer>
          <Link href="/neighborhood-map" passHref>
            <MapLink>View Full Map</MapLink>
          </Link>
        </AboutSection>
      </PaddingCol>
      <Spacer />
      <Fade>
        <ImageSlider height="80vh" imgArray={building.sliderArray} showQuotes={true} />
      </Fade>
      <Spacer customHeight="35px" />
      {building.beforeAfter === false ? (
        ''
      ) : (
        <Fade>
          <BeforeAfter before={building.beforeAfter.before} after={building.beforeAfter.after} />
        </Fade>
      )}
      <ResponsiveImage
        imgClass="building-img"
        srcPath={building.footerImage.imgUrl}
        imgAlt={building.footerImage.imgAlt}
      />
      <FooterOverlay>
        <span>{building.footerImage.footerText}</span>
        <Link href={building.footerImage.footerLink} passHref>
          {/* eslint-disable-next-line */}
          <a>
            <span className="link">Discover the Neighborhood</span>
          </a>
        </Link>
      </FooterOverlay>
      <PaddingCol>
        {leasingContactArray.length > 0 && (
          <Fade>
            <ContactRow>
              <RowTitle>Leasing Contacts</RowTitle>
              <RowBody numChildren={leasingContactArray.length}>{createContactList(leasingContactArray)}</RowBody>
            </ContactRow>
          </Fade>
        )}
        {retailLeasingContactArray.length > 0 && (
          <Fade>
            <ContactRow>
              <RowTitle>Retail Leasing Contacts</RowTitle>
              <RowBody numChildren={retailLeasingContactArray.length}>
                {createContactList(retailLeasingContactArray)}
              </RowBody>
            </ContactRow>
          </Fade>
        )}
        <Fade>
          <AvailabilityList building={building.title} />
        </Fade>
      </PaddingCol>
      <ScrollUp />
      <CopyrightFooter />
    </BuildingCol>
  );
};

Building.getInitialProps = async function(context) {
  const { slug } = context.query;
  const building = buildings.find(building => building.slug === slug);

  return { building };
};

export default withRouter(Building);
