import React from 'react';
import styled from 'styled-components';

const BrandArray = [
  {
    path: '/static/images/tenants/logo-tenant-accenture.png',
    alt: 'Accenture'
  },
  { path: '/static/images/tenants/logo-tenant-google.png', alt: 'Google' },
  { path: '/static/images/tenants/logo-tenant-havas.png', alt: 'HAVAS' },
  {
    path: '/static/images/tenants/logo-tenant-horizonmedia.png',
    alt: 'accenture'
  },
  { path: '/static/images/tenants/logo-tenant-medidata.png', alt: 'Medidata' },
  { path: '/static/images/tenants/logo-tenant-npr.png', alt: 'NPR' },
  { path: '/static/images/tenants/logo-tenant-pepsi.png', alt: 'Pepsi' },
  {
    path: '/static/images/tenants/logo-tenant-shakeshack.png',
    alt: 'Shake Shack'
  },
  {
    path: '/static/images/tenants/logo-tenant-squarespace.png',
    alt: 'Squarespace'
  },
  { path: '/static/images/tenants/logo-tenant-wework.png', alt: 'WeWork' }
];

const BrandSpinnerContainer = styled.div`
  height: 320px;
  width: 100%;
  position: relative;
`;

const PosZero = `${-150}px, 0`;
const PosFive = `${-150}px, -220px`;
const PosOne = `${window.innerWidth * -0.2 - 150}px, -36px`;
const PosNine = `${window.innerWidth * 0.2 - 150}px, -36px`;
const PosTwo = `${window.innerWidth * -0.3 - 150}px, -100px`;
const PosEight = `${window.innerWidth * 0.3 - 150}px, -100px`;
const PosThree = `${window.innerWidth * -0.25 - 150}px, -164px`;
const PosSeven = `${window.innerWidth * 0.25 - 150}px, -164px`;
const PosFour = `${window.innerWidth * -0.125 - 150}px, -200px`;
const PosSix = `${window.innerWidth * 0.125 - 150}px, -200px`;

const PosZeroMobile = `${-75}px, 0`;
const PosFiveMobile = `${-75}px, -220px`;
const PosOneMobile = `${window.innerWidth * -0.2 - 75}px, -36px`;
const PosNineMobile = `${window.innerWidth * 0.2 - 75}px, -36px`;
const PosTwoMobile = `${window.innerWidth * -0.3 - 75}px, -100px`;
const PosEightMobile = `${window.innerWidth * 0.3 - 75}px, -100px`;
const PosThreeMobile = `${window.innerWidth * -0.25 - 75}px, -164px`;
const PosSevenMobile = `${window.innerWidth * 0.25 - 75}px, -164px`;
const PosFourMobile = `${window.innerWidth * -0.125 - 75}px, -200px`;
const PosSixMobile = `${window.innerWidth * 0.125 - 75}px, -200px`;

const BrandItem = styled.img`
  position: absolute;
  height: 100px;
  width: 300px;
  bottom: 0;
  left: 50%;
  object-fit: scale-down;
  transition: transform 0.5s ease;
  ${props => {
    switch (props.position) {
      case 0:
        return `transform: translate(${PosZero});`;
        break;
      case 1:
        return `transform: translate(${PosOne}) scale(.8);`;
        break;
      case 2:
        return `transform: translate(${PosTwo}) scale(.6);`;
        break;
      case 3:
        return `transform: translate(${PosThree}) scale(.5);`;
        break;
      case 4:
        return `transform: translate(${PosFour}) scale(.45);`;
        break;
      case 5:
        return `transform: translate(${PosFive}) scale(.4);`;
        break;
      case 6:
        return `transform: translate(${PosSix}) scale(.45);`;
        break;
      case 7:
        return `transform: translate(${PosSeven}) scale(.5);`;
        break;
      case 8:
        return `transform: translate(${PosEight}) scale(.6);`;
        break;
      case 9:
        return `transform: translate(${PosNine}) scale(.8);`;
        break;
    }
  }};
  @media screen and (max-width: 1024px) {
    height: 50px;
    width: 150px;
    ${props => {
      switch (props.position) {
        case 0:
          return `transform: translate(${PosZeroMobile});`;
          break;
        case 1:
          return `transform: translate(${PosOneMobile}) scale(.8);`;
          break;
        case 2:
          return `transform: translate(${PosTwoMobile}) scale(.6);`;
          break;
        case 3:
          return `transform: translate(${PosThreeMobile}) scale(.5);`;
          break;
        case 4:
          return `transform: translate(${PosFourMobile}) scale(.45);`;
          break;
        case 5:
          return `transform: translate(${PosFiveMobile}) scale(.4);`;
          break;
        case 6:
          return `transform: translate(${PosSixMobile}) scale(.45);`;
          break;
        case 7:
          return `transform: translate(${PosSevenMobile}) scale(.5);`;
          break;
        case 8:
          return `transform: translate(${PosEightMobile}) scale(.6);`;
          break;
        case 9:
          return `transform: translate(${PosNineMobile}) scale(.8);`;
          break;
      }
    }};
  }
`;

export default class BrandSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinnerPosition: 0
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(this.rotateSpinner, 2500);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  createBrandItems = () => {
    return BrandArray.map((el, idx) => {
      return (
        <BrandItem
          src={el.path}
          alt={el.alt}
          key={idx}
          position={(idx + this.state.spinnerPosition) % BrandArray.length}
        />
      );
    });
  };
  rotateSpinner = () => {
    this.setState({
      spinnerPosition: (this.state.spinnerPosition + 1) % BrandArray.length
    });
  };
  render() {
    return (
      <BrandSpinnerContainer>{this.createBrandItems()}</BrandSpinnerContainer>
    );
  }
}
