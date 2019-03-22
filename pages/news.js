import React from 'react';
import styled from 'styled-components';
import Context from '../config/Context';
import Link from 'next/link';
import CopyrightFooter from '../components/CopyrightFooter';
import ScrollUp from '../components/ScrollUp';

const createSlug = string => {
  return string
    .toLowerCase()
    .split(' ')
    .join('-');
};

const NewsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 60px 15px;
`;

const ListItem = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 55vh;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 1024px) {
    height: 40vh;
    width: 100%;
    padding: 0;
  }
  div {
    width: 100%;
    height: 100%;
    background-image: url(${props => {
      return props.imgURL;
    }});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    z-index: 1;
    position: relative;
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
      return (
        <ListItem imgURL={el.image_1.url} key={idx}>
          <Link
            as={`/news/${this.createSlug(el.title)}`}
            href={`/newsarticle?title=${el.title}`}
          >
            <div alt={'Picture of ' + el.title} />
          </Link>
          <Link
            as={`/news/${this.createSlug(el.title)}`}
            href={`/newsarticle?title=${el.title}`}
          >
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
            <NewsList>{this.createListItems(context.state.newsData)}</NewsList>
            <ScrollUp />
            <CopyrightFooter />
          </React.Fragment>
        )}
      </Context.Consumer>
    );
  }
}
