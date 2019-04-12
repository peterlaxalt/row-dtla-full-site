import { withRouter } from 'next/router';
import { buildings } from '../data/buildings';
import BuildingHeader from '../components/BuildingHeader';
import AvailabilityList from '../components/AvailabilityList';
import ImageSlider from '../components/Slider';
import BeforeAfter from '../components/BeforeAfter';
import CopyrightFooter from '../components/CopyrightFooter';
import ScrollUp from '../components/ScrollUp';
import styled from 'styled-components';
import ResponsiveImage from '../components/ResponsiveImage';
import Link from 'next/link';
import { colors } from '../styles/Colors';
import MiniMap from '../components/MiniMap';

const BuildingCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`;
const PaddingCol = styled.div`
  width: 100%;
  padding: 0 40px;
  @media screen and (max-width: 1024px) {
    padding: 0 15px;
  }
`;

const Spacer = styled.div`
  width: 100%;
  height: ${props => (props.height ? props.height : '50px')};
`;

const FooterOverlay = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 19px;
  line-height: 28px;
  align-self: flex-end;
  margin-right: 20vw;
  transform: translate(0, -150%);
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

const RowHeading = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: #000;
  text-decoration: none;
  padding: 0 0 30px 0;
  margin: 30px 0 0 0;
  border-bottom: 3px solid black;
  &:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

const RowTitle = styled.span`
  font-size: 22px;
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

const ContactListItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 81px;
  width: 25%;
  font-size: 18px;
  margin-bottom: 30px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  .contact-name {
    font-weight: 500;
    margin-bottom: 10px;
  }
  .contact-phone {
    margin-bottom: 10px;
    color: #000;
    font-weight: 400;
    text-decoration: none;
    &:hover {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  }
  .contact-email {
    color: #369bf7;
    text-decoration: none;
    font-weight: 400;
    &:hover {
      color: #369bf7;
      text-decoration: underline;
      cursor: pointer;
    }
  }
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
    font-size: 19px;
    line-height: 29px;
    margin-bottom: 40px;
  }
`;

const MapLink = styled.a`
  text-align: end;
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
  flex-direction: row;
  width: 100%;
`;

const FactRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 65%;
`;

const Fact = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 19px;
  line-height: 29px;
  width: 33%;
  margin-bottom: 40px;
  a {
    color: ${colors.babyBlue};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const createContactList = contactInfoArray => {
  let contactListItems = contactInfoArray.map((el, idx) => {
    return (
      <ContactListItem key={idx}>
        <span className="contact-name">{el.name}</span>
        <a href={`tel:${el.phone.split('.').join('')}`} className="contact-phone">
          {el.phone}
        </a>
        <a href={`mailto:${el.email}`} className="contact-email">
          {el.email}
        </a>
      </ContactListItem>
    );
  });
  return <ContactInfoList>{contactListItems}</ContactInfoList>;
};

const Building = props => {
  const { building } = props;

  return (
    <BuildingCol>
      <BuildingHeader headerInfo={building.header} />
      <PaddingCol>
        <AboutSection>
          <h3>About {building.title}</h3>
          <p>{building.about}</p>
          <FactRowContainer>
            <FactRow>
              <Fact>
                <span>Year Constructed:</span>
                <span>{building.yearConstructed}</span>
              </Fact>
              <Fact>
                <span>Total Building Area:</span>
                <span>{building.totalBuildingArea}</span>
              </Fact>
              <Fact>
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
              <Fact>
                <a href={building.factSheet} target="_blank" rel="noopener noreferrer">
                  View Floor Plans and Detailed Specs
                </a>
              </Fact>
            </FactRow>
            <MiniMap mapCenter={building.mapCenter} building={building.title} />
          </FactRowContainer>
          <MapLink href="/map">View Full Map</MapLink>
        </AboutSection>
      </PaddingCol>
      <Spacer />
      <ImageSlider height="70vh" imgArray={building.sliderArray} showQuotes={true} />
      <Spacer />
      {building.beforeAfter === false ? (
        ''
      ) : (
        <BeforeAfter before={building.beforeAfter.before} after={building.beforeAfter.after} />
      )}
      <Spacer />
      <ResponsiveImage srcPath={building.footerImage.imgUrl} imgAlt={building.footerImage.imgAlt} />
      <FooterOverlay>
        <span>{building.footerImage.footerText}</span>
        <Link href={building.footerImage.footerLink}>
          <span className="link">Discover the Neighborhood</span>
        </Link>
      </FooterOverlay>
      <PaddingCol>
        {building.contactArray === false ? (
          ''
        ) : (
          <ContactRow>
            <RowHeading>
              <RowTitle>Leasing Contacts</RowTitle>
            </RowHeading>
            <RowBody numChildren={building.contactArray.length}>{createContactList(building.contactArray)}</RowBody>
          </ContactRow>
        )}
        <AvailabilityList building={building.header.headerLogoAlt} />
      </PaddingCol>
      <CopyrightFooter />
      <ScrollUp />
    </BuildingCol>
  );
};

Building.getInitialProps = async function(context) {
  const { slug } = context.query;
  const building = buildings.find(building => building.slug === slug);

  return { building };
};

export default withRouter(Building);
