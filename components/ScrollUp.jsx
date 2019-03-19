import React from 'react';
import styled from 'styled-components';

const ScrollUpButton = styled.div`
  &::before {
    content: '\\f139';
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 32px;
  }
  position: fixed;
  cursor: pointer;
  color: #000;
  bottom: 1%;
  right: 1%;
  ${props =>
    props.showButton
      ? 'opacity: 1; visibility: visible;'
      : 'opacity: 0; visibility: hidden;'}
  transition: 0.25s all ease-in-out;
  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;
    position: relative;
    margin: 0 auto;
  }
`;

export default class ScrollUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false
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
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 75);
  };

  scrollToTop = () => {
    let intervalId = setInterval(this.scrollStep, 10);
    this.setState({ intervalId: intervalId });
  };

  render() {
    return (
      <ScrollUpButton
        showButton={this.state.showButton}
        onClick={this.scrollToTop}
      />
    );
  }
}
