import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import Fade from 'react-reveal/Fade';

import Layout from '~/components/layouts/default';
import ImageSlider from '~/components/NonResponsiveSlider';
import Context from '~/config/Context';
import CopyrightFooter from '~/components/CopyrightFooter';
import ScrollUp from '~/components/ScrollUp';
import ArtProgram from '~/components/ArtProgram';
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

const Article = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 15px;
  ${mediaMin.tabletLandscape`
  padding: 0 30px;
  `}
`;

const ArticleTitle = styled.h2`
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  padding-bottom: 30px;
  border-bottom: 3px solid black;
  margin-top: 40px;
  ${mediaMin.tabletLandscape`
    margin-top: 50px;
    font-size: 30px;
  `}
`;

const ArticleBody = styled.p`
  width: 100%;
  margin-bottom: 60px;
  font-size: 17px;
  line-height: 25px;
  ${mediaMin.tabletLandscape`
  font-size: 19px;
  line-height: 28px;
  `}
  a {
    color: #369bf7;
    &:hover {
      text-decoration: underline;
    }
  }
  blockquote {
    padding: 20px 25px;
    border: 1px solid #0000001a;
    font-size: 17px;
    line-height: 25px;
    margin-left: 0;
    margin-right: 0;
    ${mediaMin.tabletLandscape`
    font-size: 24px;
    line-height: 36px;
    `}
  }
  h5 {
    font-size: 16px;
    line-height: 17px;
    font-weight: 500;
    margin: 2px 0;
    ${mediaMin.tabletLandscape`
    font-size: 17px;
    `}
  }
`;

const NewsArticleContainer = props => {
  return (
    <Context.Consumer>
      {context => <NewsArticle context={context} slug={props.router.query.slug} title={props.router.query.title} />}
    </Context.Consumer>
  );
};

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
  constructor(props) {
    super(props);
    this.state = {
      articleData: false
    };
  }
  componentDidMount() {
    if (this.props.context.newsData !== [] && this.state.articleData === false) {
      if (this.props.title !== undefined) {
        let articleData = this.getCurrentData(this.props.context.newsData, this.createSlug(this.props.title));
        this.setState({
          articleData
        });
      } else {
        let articleData = this.getCurrentData(this.props.context.newsData, this.props.slug);
        this.setState({
          articleData
        });
      }
    }
  }
  componentDidUpdate() {
    if (this.props.context.newsData !== [] && this.state.articleData == false) {
      if (this.props.title !== undefined) {
        let articleData = this.getCurrentData(this.props.context.newsData, this.createSlug(this.props.title));
        if (articleData) {
          this.setState({
            articleData
          });
        }
      } else {
        let articleData = this.getCurrentData(this.props.context.newsData, this.props.slug);
        if (articleData) {
          this.setState({
            articleData
          });
        }
      }
    }
  }

  createSlug = string => {
    return string
      .toLowerCase()
      .split(' ')
      .join('-');
  };

  getCurrentData = (allNewsItems, slug) => {
    for (let i = 0; i < allNewsItems.length; i++) {
      if (this.createSlug(allNewsItems[i].title) == slug) {
        if (allNewsItems[i] !== undefined) {
          return allNewsItems[i];
        } else {
          return false;
        }
      }
    }
    return false;
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
    if (this.state.articleData) {
      return (
        <Layout>
          <BackButton />
          {this.state.articleData.title !== 'Hudson Square Properties Lobby Art Program' ? (
            <Fade>
              <ImageSlider
                imgArray={this.createImageArray(this.state.articleData)}
                showQuotes={false}
                autoPlay
                height="75vh"
              />
            </Fade>
          ) : (
            ''
          )}
          <Article>
            <Fade>
              <ArticleTitle>{this.state.articleData.title}</ArticleTitle>
            </Fade>
            <Fade>
              <ArticleBody
                dangerouslySetInnerHTML={{
                  __html: this.state.articleData.body
                }}
              />
            </Fade>
            {this.state.articleData.title == 'Hudson Square Properties Lobby Art Program' ? <ArtProgram /> : ''}
          </Article>
          <ScrollUp />
          <CopyrightFooter />
        </Layout>
      );
    } else {
      return <div />;
    }
  }
}
export default withRouter(NewsArticleContainer);
