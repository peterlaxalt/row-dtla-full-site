import { withRouter } from 'next/router';
import { buildings } from '../data/buildings';
import BuildingHeader from '../components/BuildingHeader';
import AvailabilityList from '../components/AvailabilityList';
import ImageSlider from '../components/Slider';
import BeforeAfter from '../components/BeforeAfter';
import styled from 'styled-components';
import ResponsiveImage from '../components/ResponsiveImage';
import Link from 'next/link';

const BuildingCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`;
const PaddingCol = styled.div`
  width: 100%;
  padding: 0 40px;
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
`;

const ContactRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 0 0;
  padding: 0 0 30px 0;
  border-bottom: 3px solid black;
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
  max-height: ${props => Math.ceil(props.numChildren / 4) * 116 + 97 + 'px'};
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
  .contact-name {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .contact-phone {
    margin-bottom: 10px;
    color: #000;
    font-weight: 100;
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
    font-weight: 100;
    &:hover {
      color: #369bf7;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

const createContactList = contactInfoArray => {
  let contactListItems = contactInfoArray.map((el, idx) => {
    return (
      <ContactListItem key={idx}>
        <span className="contact-name">{el.name}</span>
        <a
          href={`tel:${el.phone.split('.').join('')}`}
          className="contact-phone"
        >
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
      <ImageSlider imgArray={building.sliderArray} showQuotes={true} />
      {building.beforeAfter === false ? (
        ''
      ) : (
        <BeforeAfter
          before={building.beforeAfter.before}
          after={building.beforeAfter.after}
        />
      )}
      <ResponsiveImage
        srcPath={building.footerImage.imgUrl}
        imgAlt={building.footerImage.imgAlt}
      />
      <FooterOverlay>
        <span>{building.footerImage.footerText}</span>
        <Link href={building.footerImage.footerLink}>
          <span className="link">Discover the Neighborhood</span>
        </Link>
      </FooterOverlay>
      <PaddingCol>
        <ContactRow>
          <RowHeading>
            <RowTitle>Leasing Contacts</RowTitle>
          </RowHeading>
          <RowBody numChildren={building.contactArray.length}>
            {createContactList(building.contactArray)}
          </RowBody>
        </ContactRow>
        <AvailabilityList building={building.header.headerLogoAlt} />
      </PaddingCol>
    </BuildingCol>
  );
};

Building.getInitialProps = async function(context) {
  const { slug } = context.query;
  const building = buildings.find(building => building.slug === slug);

  return { building };
};

export default withRouter(Building);
