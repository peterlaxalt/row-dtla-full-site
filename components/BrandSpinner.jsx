import React from 'react';
import styled from 'styled-components';
import Context from '../config/Context';
import { mediaMin } from '../styles/MediaQueries';

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
  width: 100%;
  height: 260px;
  position: relative;
  margin-bottom: 10px;
  ${mediaMin.tabletLandscape`
    height: 320px;
  `}
`;

const PosZero = `${-150}px, 0`;
const PosFive = `${-150}px, -220px`;
const PosOne = width => {
  return `${width * -0.2 - 150}px, -36px`;
};

const PosNine = width => {
  return `${width * 0.2 - 150}px, -36px`;
};
const PosTwo = width => {
  return `${width * -0.3 - 150}px, -100px`;
};
const PosEight = width => {
  return `${width * 0.3 - 150}px, -100px`;
};
const PosThree = width => {
  return `${width * -0.25 - 150}px, -164px`;
};
const PosSeven = width => {
  return `${width * 0.25 - 150}px, -164px`;
};
const PosFour = width => {
  return `${width * -0.125 - 150}px, -200px`;
};
const PosSix = width => {
  return `${width * 0.125 - 150}px, -200px`;
};

const PosZeroMobile = `${-75}px, 0`;
const PosFiveMobile = `${-75}px, -220px`;
const PosOneMobile = width => {
  return `${width * -0.2 - 75}px, -36px`;
};
const PosNineMobile = width => {
  return `${width * 0.2 - 75}px, -36px`;
};
const PosTwoMobile = width => {
  return `${width * -0.3 - 75}px, -100px`;
};
const PosEightMobile = width => {
  return `${width * 0.3 - 75}px, -100px`;
};
const PosThreeMobile = width => {
  return `${width * -0.25 - 75}px, -164px`;
};
const PosSevenMobile = width => {
  return `${width * 0.25 - 75}px, -164px`;
};
const PosFourMobile = width => {
  return `${width * -0.125 - 75}px, -200px`;
};
const PosSixMobile = width => {
  return `${width * 0.125 - 75}px, -200px`;
};

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
      case 1:
        return `transform: translate(${PosOne(props.width)}) scale(.8);`;
      case 2:
        return `transform: translate(${PosTwo(props.width)}) scale(.6);`;
      case 3:
        return `transform: translate(${PosThree(props.width)}) scale(.5);`;
      case 4:
        return `transform: translate(${PosFour(props.width)}) scale(.45);`;
      case 5:
        return `transform: translate(${PosFive}) scale(.4);`;
      case 6:
        return `transform: translate(${PosSix(props.width)}) scale(.45);`;
      case 7:
        return `transform: translate(${PosSeven(props.width)}) scale(.5);`;
      case 8:
        return `transform: translate(${PosEight(props.width)}) scale(.6);`;
      case 9:
        return `transform: translate(${PosNine(props.width)}) scale(.8);`;
    }
  }};
  @media screen and (max-width: 1024px) {
    height: 50px;
    width: 150px;
    ${props => {
      switch (props.position) {
        case 0:
          return `transform: translate(${PosZeroMobile});`;
        case 1:
          return `transform: translate(${PosOneMobile(props.width)}) scale(.8);`;
        case 2:
          return `transform: translate(${PosTwoMobile(props.width)}) scale(.6);`;
        case 3:
          return `transform: translate(${PosThreeMobile(props.width)}) scale(.5);`;
        case 4:
          return `transform: translate(${PosFourMobile(props.width)}) scale(.45);`;
        case 5:
          return `transform: translate(${PosFiveMobile}) scale(.4);`;
        case 6:
          return `transform: translate(${PosSixMobile(props.width)}) scale(.45);`;
        case 7:
          return `transform: translate(${PosSevenMobile(props.width)}) scale(.5);`;
        case 8:
          return `transform: translate(${PosEightMobile(props.width)}) scale(.6);`;
        case 9:
          return `transform: translate(${PosNineMobile(props.width)}) scale(.8);`;
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
  createBrandItems = width => {
    return BrandArray.map((el, idx) => {
      return (
        <BrandItem
          src={el.path}
          alt={el.alt}
          key={idx}
          width={width}
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
      <Context.Consumer>
        {context => {
          const width = context.state.windowDimensions.width;
          return (
            <BrandSpinnerContainer>{this.createBrandItems(width > 768 ? width * 0.75 : width)}</BrandSpinnerContainer>
          );
        }}
      </Context.Consumer>
    );
  }
}
