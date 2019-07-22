import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

import Context from '~/config/Context';
import CopyrightFooter from '~/components/CopyrightFooter';
import ScrollUp from '~/components/ScrollUp';
import { mediaMin } from '~/styles/MediaQueries';

const MobileHeading = styled.h2`
  margin: 0;
  height: 30px;
  font-weight: 500;
  padding: 10px 0;
  margin: 0 15px 30px 15px;
  border-bottom: 3px solid black;
  box-sizing: content-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${mediaMin.tabletLandscape`
    display: none;
  `}
`;

const NewsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 15px 60px 15px;
  ${mediaMin.tabletLandscape`
  padding: 60px 40px;
  `}
`;

const ListItem = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  ${mediaMin.tabletLandscape`
    width: 50%;
    margin-bottom: 0;
    height: 55vh;
    padding: 15px 25px;
  `}
  div {
    width: 100%;
    height: 30vh;
    background-image: url(${props => props.imgURL});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    z-index: 1;
    position: relative;
    ${mediaMin.tablet`
    height: 40vh;
    `}
    ${mediaMin.tabletLandscape`
    height: 100%;
    `}
    &::before,
    &::after {
      content: '';
      background-color: rgba(54, 155, 247);
      opacity: 0;
      z-index: 100;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      transition: 0.25s opacity ease-in-out;
    }
    &:hover {
      &::before,
      &::after {
        content: '';
        background-color: rgba(54, 155, 247);
        opacity: 0.25;
        z-index: 100;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }
    }
  }
  span {
    width: 100%;
    text-align: left;
    font-size: 22px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 1px;
    margin-top: 20px;
    min-height: 60px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: #369bf7;
    }
  }
`;

export default class News extends React.Component {
  createSlug = string => {
    return string
      .toLowerCase()
      .split(' ')
      .join('-');
  };

  createListItems = newsData => {
    return newsData.map((el, idx) => {
      const { preview_image } = el;

      return (
        <ListItem imgURL={el[`image_${preview_image}`].url} key={idx}>
          <Link as={`/news/${this.createSlug(el.title)}`} href={`/newsarticle?title=${el.title}`}>
            <div alt={'Picture of ' + el.title} />
          </Link>
          <Link as={`/news/${this.createSlug(el.title)}`} href={`/newsarticle?title=${el.title}`}>
            <span>{el.title}</span>
          </Link>
        </ListItem>
      );
    });
  };

  render() {
    return (
      <Context.Consumer>
        {context => (
          <React.Fragment>
            <Fade>
              <MobileHeading>News</MobileHeading>
            </Fade>
            <Fade>
              <NewsList>{this.createListItems(context.newsData)}</NewsList>
            </Fade>
            <ScrollUp />
            <CopyrightFooter />
          </React.Fragment>
        )}
      </Context.Consumer>
    );
  }
}
