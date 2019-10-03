import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

import Context from '~/config/Context';

import CopyrightFooter from '~/components/CopyrightFooter';
import ScrollUp from '~/components/ScrollUp';
import { mediaMin } from '~/styles/MediaQueries';

const BackButtonInnner = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #222;
  color: #fff;
  span {
    cursor: pointer;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: 1px;
    &:hover {
      border-bottom: 1px solid #fff;
    }
  }
`;

const PressList = styled.div`
  display: flex;
  width: 100%;
  padding: 0 25px;
  margin: 0 0 60px 0;
  flex-direction: column;
  flex-wrap: no-wrap;
  ${mediaMin.tabletLandscape`
  margin: 60px 0;
  flex-direction: row;
  flex-wrap: wrap;
  `}
`;

const PressItem = styled.a`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  border: 1px solid #eaeaea;
  padding: 28px;
  width: 100%;
  margin: 15px 0;
  ${mediaMin.tabletLandscape`
    width: calc(50% - 50px);
    margin: 0 25px 25px 25px;
  `}
`;

const Publication = styled.span`
  font-size: 25px;
  font-weight: 500;
  line-height: 44px
  min-height: 44px;
  margin-bottom: 10px;
`;

const Title = styled.span`
  line-height: 30px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const BackButton = () => {
  return (
    <Link href="/news">
      <BackButtonInnner>
        <span>Back to our News</span>
      </BackButtonInnner>
    </Link>
  );
};
export default class Press extends React.Component {
  createPressItems = pressData => {
    return pressData.map((el, idx) => {
      return (
        <PressItem key={`press-item-${idx}`} href={el.link} target="_blank">
          <Publication>{el.publication}</Publication>
          <Title>{el.title}</Title>
        </PressItem>
      );
    });
  };

  render() {
    return (
      <Context.Consumer>
        {context => (
          <React.Fragment>
            <BackButton />
            <Fade>
              <PressList>{this.createPressItems(context.pressData)}</PressList>
            </Fade>
            <ScrollUp />
            <CopyrightFooter />
          </React.Fragment>
        )}
      </Context.Consumer>
    );
  }
}
