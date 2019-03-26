import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layouts/default';
import CopyrightFooter from '../components/CopyrightFooter';
import {
  SeventyFiveVarick,
  OneSixtyVarick,
  ThreeFortyFiveHudson,
  ThreeFiftyHudson,
  ThreeSeventyFiveHudson,
  OneHundredAvenue,
  OneFiftyFiveAvenue,
  TwoHundredHudson,
  TwoOFiveHudson,
  TwoTwentyFiveVarick,
  FourThirtyFiveHudson,
  RetailLeasing
} from '../data/contact';

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
  &:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

const RowTitle = styled.span`
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
  max-height: ${props =>
    props.openRow ? Math.ceil(props.numChildren / 4) * 116 + 97 + 'px' : '0'};
`;

const BodyTitle = styled.span`
  font-size: 17px;
  font-weight: bold;
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

const ContactListItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 81px;
  width: 25%;
  font-size: 18px;
  margin-bottom: ${props => (props.marginBottom ? '30px' : '0')};
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

  createContactList = contactInfoArray => {
    let contactListItems = contactInfoArray.map((el, idx) => {
      return (
        <ContactListItem key={idx} marginBottom={contactInfoArray.length > 4}>
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

  render() {
    return (
      <Layout title="Contact">
        <ContactList>
          <ContactRow>
            <RowHeading
              href="#75-varick-street"
              onClick={
                this.state.openRow === 0
                  ? this.closeRow
                  : () => this.expandRow(0)
              }
            >
              <RowTitle>75 Varick Street</RowTitle>
              <RowIcon openRow={this.state.openRow === 0} />
            </RowHeading>
            <RowBody
              openRow={this.state.openRow === 0}
              numChildren={SeventyFiveVarick.length}
              paddingBottom={SeventyFiveVarick.length > 4}
            >
              <BodyTitle>Exclusive Leasing Agents</BodyTitle>
              {this.createContactList(SeventyFiveVarick)}
            </RowBody>
          </ContactRow>
          <ContactRow>
            <RowHeading
              href="#160-varick-street"
              onClick={
                this.state.openRow === 1
                  ? this.closeRow
                  : () => this.expandRow(1)
              }
            >
              <RowTitle>160 Varick Street</RowTitle>
              <RowIcon openRow={this.state.openRow === 1} />
            </RowHeading>
            <RowBody
              openRow={this.state.openRow === 1}
              numChildren={OneSixtyVarick.length}
              paddingBottom={OneSixtyVarick.length > 4}
            >
              <BodyTitle>Exclusive Leasing Agents</BodyTitle>
              {this.createContactList(OneSixtyVarick)}
            </RowBody>
          </ContactRow>
          <ContactRow>
            <RowHeading
              href="#345-hudson-street"
              onClick={
                this.state.openRow === 2
                  ? this.closeRow
                  : () => this.expandRow(2)
              }
            >
              <RowTitle>345 Hudson Street</RowTitle>
              <RowIcon openRow={this.state.openRow === 2} />
            </RowHeading>
            <RowBody
              openRow={this.state.openRow === 2}
              numChildren={ThreeFortyFiveHudson.length}
              paddingBottom={ThreeFortyFiveHudson.length > 4}
            >
              <BodyTitle>Exclusive Leasing Agents</BodyTitle>
              {this.createContactList(ThreeFortyFiveHudson)}
            </RowBody>
          </ContactRow>
          <ContactRow>
            <RowHeading
              href="#350-hudson-street"
              onClick={
                this.state.openRow === 3
                  ? this.closeRow
                  : () => this.expandRow(3)
              }
            >
              <RowTitle>350 Hudson Street</RowTitle>
              <RowIcon openRow={this.state.openRow === 3} />
            </RowHeading>
            <RowBody
              openRow={this.state.openRow === 3}
              numChildren={ThreeFiftyHudson.length}
              paddingBottom={ThreeFiftyHudson.length > 4}
            >
              <BodyTitle>Exclusive Leasing Agents</BodyTitle>
              {this.createContactList(ThreeFiftyHudson)}
            </RowBody>
          </ContactRow>
          <ContactRow>
            <RowHeading
              href="#375-hudson-street"
              onClick={
                this.state.openRow === 4
                  ? this.closeRow
                  : () => this.expandRow(4)
              }
            >
              <RowTitle>375 Hudson Street</RowTitle>
              <RowIcon openRow={this.state.openRow === 4} />
            </RowHeading>
            <RowBody
              openRow={this.state.openRow === 4}
              numChildren={ThreeSeventyFiveHudson.length}
              paddingBottom={ThreeSeventyFiveHudson.length > 4}
            >
              <BodyTitle>Exclusive Leasing Agents</BodyTitle>
              {this.createContactList(ThreeSeventyFiveHudson)}
            </RowBody>
          </ContactRow>
          <ContactRow>
            <RowHeading
              href="#100-avenue-of-the-americas"
              onClick={
                this.state.openRow === 5
                  ? this.closeRow
                  : () => this.expandRow(5)
              }
            >
              <RowTitle>100 Avenue of the Americas</RowTitle>
              <RowIcon openRow={this.state.openRow === 5} />
            </RowHeading>
            <RowBody
              openRow={this.state.openRow === 5}
              numChildren={OneHundredAvenue.length}
              paddingBottom={OneHundredAvenue.length > 4}
            >
              <BodyTitle>Exclusive Leasing Agents</BodyTitle>
              {this.createContactList(OneHundredAvenue)}
            </RowBody>
          </ContactRow>
          <ContactRow>
            <RowHeading
              href="#155-avenue-of-the-americas"
              onClick={
                this.state.openRow === 6
                  ? this.closeRow
                  : () => this.expandRow(6)
              }
            >
              <RowTitle>155 Avenue of the Americas</RowTitle>
              <RowIcon openRow={this.state.openRow === 6} />
            </RowHeading>
            <RowBody
              openRow={this.state.openRow === 6}
              numChildren={OneFiftyFiveAvenue.length}
              paddingBottom={OneFiftyFiveAvenue.length > 4}
            >
              <BodyTitle>Exclusive Leasing Agents</BodyTitle>
              {this.createContactList(OneFiftyFiveAvenue)}
            </RowBody>
          </ContactRow>
          <ContactRow>
            <RowHeading
              href="#200-hudson-street"
              onClick={
                this.state.openRow === 7
                  ? this.closeRow
                  : () => this.expandRow(7)
              }
            >
              <RowTitle>200 Hudson Street</RowTitle>
              <RowIcon openRow={this.state.openRow === 7} />
            </RowHeading>
            <RowBody
              openRow={this.state.openRow === 7}
              numChildren={TwoHundredHudson.length}
              paddingBottom={TwoHundredHudson.length > 4}
            >
              <BodyTitle>Exclusive Leasing Agents</BodyTitle>
              {this.createContactList(TwoHundredHudson)}
            </RowBody>
          </ContactRow>
          <ContactRow>
            <RowHeading
              href="#205-hudson-street"
              onClick={
                this.state.openRow === 8
                  ? this.closeRow
                  : () => this.expandRow(8)
              }
            >
              <RowTitle>205 Hudson Street</RowTitle>
              <RowIcon openRow={this.state.openRow === 8} />
            </RowHeading>
            <RowBody
              openRow={this.state.openRow === 8}
              numChildren={TwoOFiveHudson.length}
              paddingBottom={TwoOFiveHudson.length > 4}
            >
              <BodyTitle>Exclusive Leasing Agents</BodyTitle>
              {this.createContactList(TwoOFiveHudson)}
            </RowBody>
          </ContactRow>
          <ContactRow>
            <RowHeading
              href="#225-varick-street"
              onClick={
                this.state.openRow === 9
                  ? this.closeRow
                  : () => this.expandRow(9)
              }
            >
              <RowTitle>225 Varick Street</RowTitle>
              <RowIcon openRow={this.state.openRow === 9} />
            </RowHeading>
            <RowBody
              openRow={this.state.openRow === 9}
              numChildren={TwoTwentyFiveVarick.length}
              paddingBottom={TwoTwentyFiveVarick.length > 4}
            >
              <BodyTitle>Exclusive Leasing Agents</BodyTitle>
              {this.createContactList(TwoTwentyFiveVarick)}
            </RowBody>
          </ContactRow>
          <ContactRow>
            <RowHeading
              href="#435-hudson-street"
              onClick={
                this.state.openRow === 10
                  ? this.closeRow
                  : () => this.expandRow(10)
              }
            >
              <RowTitle>435 Hudson Street</RowTitle>
              <RowIcon openRow={this.state.openRow === 10} />
            </RowHeading>
            <RowBody
              openRow={this.state.openRow === 10}
              numChildren={FourThirtyFiveHudson.length}
              paddingBottom={FourThirtyFiveHudson.length > 4}
            >
              <BodyTitle>Exclusive Leasing Agents</BodyTitle>
              {this.createContactList(FourThirtyFiveHudson)}
            </RowBody>
          </ContactRow>
          <ContactRow>
            <RowHeading
              href="#retail-leasing-inquiries"
              onClick={
                this.state.openRow === 11
                  ? this.closeRow
                  : () => this.expandRow(11)
              }
            >
              <RowTitle>Retail Leasing Inquiries</RowTitle>
              <RowIcon openRow={this.state.openRow === 11} />
            </RowHeading>
            <RowBody
              openRow={this.state.openRow === 11}
              numChildren={RetailLeasing.length}
              paddingBottom={RetailLeasing.length > 4}
            >
              {this.createContactList(RetailLeasing)}
            </RowBody>
          </ContactRow>
        </ContactList>
        <CopyrightFooter />
      </Layout>
    );
  }
}
