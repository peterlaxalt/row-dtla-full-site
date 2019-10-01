import Link from 'next/link';
import styled from 'styled-components';

import HomeFader from '~/components/pages/home/HomeFader';
import { indexArray, mobileIndexArray } from '~/data/home.js';
import ScrollUp from '~/components/ScrollUp';
import Context from '~/config/Context';
import { mediaMin } from '~/styles/MediaQueries';

const Copyright = styled.div`
  z-index: 100;
  color: #000;
  font-size: 11px;
  width: 100%;
  text-align: center;
  position: relative;
  padding: 42px 5% 10px 5%;
  a {
    &:hover {
      text-decoration: underline;
    }
  }
  ${mediaMin.tabletLandscape`
    color: #fff;
    position: fixed;
    bottom: 2.5%;
    padding: 10px 5%;
  `}
`;

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, 1000);
  }

  render() {
    const { loaded } = this.state;
    return (
      <Context.Consumer>
        {context => {
          return (
            <React.Fragment>
              <HomeFader
                loaded={loaded}
                indexArray={indexArray}
                mobileArray={mobileIndexArray}
                windowWidth={context.state.windowDimensions.width}
              />
              <ScrollUp />
              <Copyright>
                Copyright © 2019. No part of this website (eg. pictures, graphs, logos and others designing material)
                may be copied, disseminated or published for commercial or advertising use without the prior written
                permission from Hudson Square Properties. |{' '}
                <Link href="/accessibility">
                  {/* eslint-disable-next-line */}
                  <a>Accessibility Statement</a>
                </Link>
              </Copyright>
            </React.Fragment>
          );
        }}
      </Context.Consumer>
    );
  }
}
