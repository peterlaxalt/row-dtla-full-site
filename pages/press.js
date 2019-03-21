import React from 'react';
import styled from 'styled-components';
import Context from '../config/Context';
import Link from 'next/link';

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
    &:hover {
      text-decoration: underline;
    }
  }
`;

const PressList = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 25px;
`;

const PressItem = styled.a`
  display: flex;
  flex-direction: column;
  width: calc(50% - 50px);
  background-color: #f7f7f7;
  border: 1px solid #eaeaea;
  padding: 28px;
  margin: 0 25px;
`;

const Publication = styled.span`
font-size: 25px;
line-height: 44px
margin-bottom: 10px;`;

const Title = styled.span`
  line-height: 30px;
  font-size: 12px;
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
    console.log(pressData);
    return pressData.map((el, idx) => {
      return (
        <PressItem href={el.link} target="_blank">
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
            <PressList>
              {this.createPressItems(context.state.pressData)}
            </PressList>
          </React.Fragment>
        )}
      </Context.Consumer>
    );
  }
}
