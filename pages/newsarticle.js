import { withRouter } from 'next/router';
import Layout from '../components/layouts/default';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import ImageSlider from '../components/Slider';
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

class NewsArticle extends React.Component {
  getCurrentData = (allNewsItems, title) => {
    for (let i = 0; i < allNewsItems.length; i++) {
      if (allNewsItems[i].title == title) {
        return allNewsItems[i];
      }
    }
  };

  createImageArray = articleData => {
    let imageArray = [];
    if (articleData.image_1.url) {
      imageArray.push({ imgUrl: articleData.image_1.url });
    }
    if (articleData.image_2.url) {
      imageArray.push({ imgUrl: articleData.image_2.url });
    }
    if (articleData.image_3.url) {
      imageArray.push({ imgUrl: articleData.image_3.url });
    }
    if (articleData.image_4.url) {
      imageArray.push({ imgUrl: articleData.image_4.url });
    }
    if (articleData.image_5.url) {
      imageArray.push({ imgUrl: articleData.image_5.url });
    }
    return imageArray;
  };

  render() {
    return (
      <Context.Consumer>
        {context => {
          console.log(context);
          let articleData = this.getCurrentData(
            context.state.newsData,
            this.props.router.query.title
          );
          let imageArray = this.createImageArray(articleData);
          console.log(imageArray);
          return (
            <Layout>
              <BackButton />
              <ImageSlider
                imgArray={imageArray}
                showQuotes={true}
                autoPlay={true}
              />
              <h1>{articleData.title}</h1>
            </Layout>
          );
        }}
      </Context.Consumer>
    );
  }
}
export default withRouter(NewsArticle);
