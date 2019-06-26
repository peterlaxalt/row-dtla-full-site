import React from 'react';
import styled from 'styled-components';
import { mediaMin } from '../styles/MediaQueries';

const ScrollUpButton = styled.button`
  width: 42px;
  height: 42px;
  margin: 0 auto;
  cursor: pointer;
  text-align: center;
  position: relative;
  color: #000;
  bottom: 1%;
  right: 1%;
  z-index: 100;
  margin: 32px 0 -32px 0;
  ${props => (props.showButton ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;')}
  transition: 0.25s all ease-in-out;
  ${mediaMin.tabletLandscape`
  margin: 0;
  position: fixed;
  `}
  img {
    height: 100%;
    width: 100%;
  }
`;

export default class ScrollUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
      lastScroll: 1000000000
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }
  scrollHandler = () => {
    if (window.pageYOffset > 150 && !this.state.showButton) {
      this.setState({
        showButton: true
      });
    }
    if (window.pageYOffset <= 150 && this.state.showButton) {
      this.setState({
        showButton: false
      });
    }
  };
  scrollStep = () => {
    this.setState({
      lastScroll: window.pageYOffset
    });
    if (window.pageYOffset === 0 || window.pageYOffset > this.state.lastScroll) {
      clearInterval(this.state.intervalId);
      this.setState({
        lastScroll: 1000000000
      });
    }
    window.scroll(0, window.pageYOffset - 75);
  };

  scrollToTop = () => {
    let intervalId = setInterval(this.scrollStep, 10);
    this.setState({ intervalId: intervalId });
  };

  render() {
    return (
      <ScrollUpButton showButton={this.state.showButton} onClick={this.scrollToTop}>
        <img src="/static/images/icons/back-to-top.svg" alt="scroll to top" />
      </ScrollUpButton>
    );
  }
}
