import React from 'react';
import styled from 'styled-components';
import CopyrightFooter from '../components/CopyrightFooter';
import Context from '../config/Context';
import { buildings } from '~/data/buildings';

import ContactCard from '~/components/ContactCard';

// import {
//   SeventyFiveVarick,
//   OneSixtyVarick,
//   ThreeFortyFiveHudson,
//   ThreeFiftyHudson,
//   ThreeSeventyFiveHudson,
//   OneHundredAvenue,
//   OneFiftyFiveAvenue,
//   TwoHundredHudson,
//   TwoOFiveHudson,
//   TwoTwentyFiveVarick,
//   FourThirtyFiveHudson,
//   RetailLeasing
// } from '../data/contacts';

const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 5% 0 5%;
  z-index: 1;
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
  font-weight: 600;
  &:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

const RowTitle = styled.span`
  font-weight: 500;
  font-size: 22px;
`;

const RowIcon = styled.i`
  height: 20px;
  width: 20px;
  &::before {
    position: absolute;
    content: ${props => (props.openRow ? "'\\f068';" : "'\\f067';")}
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 32px;
    transform: translateX(-50%);
  }
  z-index: 1;
`;

const RowBody = styled.div`
  display: block;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-sizing: content-box;
  padding-top: ${props => (props.openRow ? '30px' : '0')};
  padding-bottom: ${props => {
    if (props.paddingBottom) {
      return '0';
    } else if (props.openRow) {
      return '30px';
    } else {
      return '0';
    }
  }};
  transition: max-height 0.25s ease-in-out, padding 0.25s ease-in-out;
  max-height: ${props => (props.openRow ? Math.ceil(props.numChildren / 4) * 116 + 97 + 'px' : '0')};
  @media screen and (max-width: 1024px) {
    max-height: ${props => (props.openRow ? Math.ceil(props.numChildren) * 116 + 97 + 'px' : '0')};
  }
`;

const BodyTitle = styled.span`
  font-size: 17px;
  font-weight: 600;
  height: 37px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openRow: null
    };
  }

  componentDidMount() {
    let startURL = window.location.href.split('#');
    switch (startURL[1]) {
      case undefined:
        break;

      case '75-varick-street':
        this.setState({
          openRow: 0
        });
        break;

      case '160-varick-street':
        this.setState({
          openRow: 1
        });
        break;

      case '345-hudson-street':
        this.setState({
          openRow: 2
        });
        break;

      case '350-hudson-street':
        this.setState({
          openRow: 3
        });
        break;

      case '375-hudson-street':
        this.setState({
          openRow: 4
        });
        break;

      case '100-avenue-of-the-americas':
        this.setState({
          openRow: 5
        });
        break;

      case '155-avenue-of-the-americas':
        this.setState({
          openRow: 6
        });
        break;

      case '200-hudson-street':
        this.setState({
          openRow: 7
        });
        break;

      case '205-hudson-street':
        this.setState({
          openRow: 8
        });
        break;

      case '225-varick-street':
        this.setState({
          openRow: 9
        });
        break;

      case '435-hudson-street':
        this.setState({
          openRow: 10
        });
        break;

      case 'retail-leasing-inquiries':
        this.setState({
          openRow: 11
        });
        break;
    }
  }

  expandRow = rowIndex => {
    this.setState({
      openRow: rowIndex
    });
  };

  closeRow = () => {
    this.setState({
      openRow: null
    });
  };

  createContactCards = contactInfoArray => {
    let contactListItems = contactInfoArray.map((contact, idx) => {
      return <ContactCard key={idx} cardData={contact} />;
    });
    return <ContactInfoList>{contactListItems}</ContactInfoList>;
  };

  generateContacts(context) {
    const buildingsArray = buildings.map(building => building.slug);

    let buildingContacts = {};
    buildingsArray.forEach(building => (buildingContacts[building] = []));
    // Append Retail Leasing Contacts Section
    buildingContacts['retail-leasing-contacts'] = [];

    context.contactData.forEach(contact => {
      if (contact.retail_leasing_inquiries) {
        // Append Retail Leasing Contacts Section
        buildingContacts['retail-leasing-contacts'].push(contact);
      } else if (Array.isArray(contact.buildings) && contact.buildings.length > 0) {
        contact.buildings.forEach(building => buildingContacts[building].push(contact));
      }
    });

    let contactRowArray = buildings.map((building, idx) => {
      return (
        <ContactRow key={`contact-row-${building.slug}`}>
          <RowHeading
            href={`#${building.slug}`}
            onClick={this.state.openRow === idx ? this.closeRow : () => this.expandRow(idx)}
          >
            <RowTitle>{building.title}</RowTitle>
            <RowIcon openRow={this.state.openRow === idx} />
          </RowHeading>
          <RowBody
            openRow={this.state.openRow === idx}
            numChildren={buildingContacts[building.slug].length}
            paddingBottom={buildingContacts[building.slug].length > 4}
          >
            <BodyTitle>Exclusive Leasing Agents</BodyTitle>
            {this.createContactCards(buildingContacts[building.slug])}
          </RowBody>
        </ContactRow>
      );
    });

    // Append Retail Leasing Contacts Section
    contactRowArray.push(
      <ContactRow key={`contact-row-retail-leasing`}>
        <RowHeading
          href={`#retail-leasing-inquiries`}
          onClick={this.state.openRow === buildings.length ? this.closeRow : () => this.expandRow(buildings.length)}
        >
          <RowTitle>Retail Leasing Inquiries</RowTitle>
          <RowIcon openRow={this.state.openRow === buildings.length} />
        </RowHeading>
        <RowBody
          openRow={this.state.openRow === buildings.length}
          numChildren={buildingContacts['retail-leasing-contacts'].length}
          paddingBottom={buildingContacts['retail-leasing-contacts'].length > 4}
        >
          {this.createContactCards(buildingContacts['retail-leasing-contacts'])}
        </RowBody>
      </ContactRow>
    );

    return contactRowArray;
  }

  render() {
    return (
      <Context.Consumer>
        {context => (
          <React.Fragment>
            <ContactList>
              {this.generateContacts(context)}
              {/* <ContactRow>
                <RowHeading
                  href={`#retail-leasing-inquiries`}
                  onClick={
                    this.state.openRow === buildings.length ? this.closeRow : () => this.expandRow(buildings.length)
                  }
                >
                  <RowTitle>Retail Leasing Contacts</RowTitle>
                  <RowIcon openRow={this.state.openRow === idx} />
                </RowHeading>
                <RowBody
                  openRow={this.state.openRow === buildings.length}
                  numChildren={buildingContacts[building.slug].length}
                  paddingBottom={buildingContacts[building.slug].length > 4}
                >
                  {this.createContactCards(buildingContacts[building.slug])}
                </RowBody>
              </ContactRow> */}
            </ContactList>
            <CopyrightFooter />
          </React.Fragment>
        )}
      </Context.Consumer>
    );
  }
}
