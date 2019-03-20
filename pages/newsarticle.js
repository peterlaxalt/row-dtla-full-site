import { withRouter } from 'next/router';
import Layout from '../components/layouts/default';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Slider from '../components/Slider';
import Context from '../config/Context';

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
  }
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

const getCurrentData = (allNewsItems, title) => {
  for (let i = 0; i < allNewsItems.length; i++) {
    if (allNewsItems[i].title == title) {
      return allNewsItems[i];
    }
  }
};

const NewsArticle = props => {
  console.log(props);
  return (
    <Context.Provider>
      {context => (
        <Layout>
          <BackButton />
          <h1>{props.router.query.title}</h1>
        </Layout>
      )}
    </Context.Provider>
  );
};

// NewsArticle.getInitialProps = async function (context) {
//   const { slug } = context.query;
//   const article = buildings.find(building => building.slug === slug);

//   return { building };
// };

export default withRouter(NewsArticle);
