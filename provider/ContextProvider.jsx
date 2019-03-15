import React, { Component } from 'react';
import Context from '../config/Context';
import fetch from 'isomorphic-unfetch';

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowDimensions: {
        height: null,
        width: null
      },
      navigation: {
        homeNavActive: false,
        buildingNavActive: false
      },
      availabilityData: [],
      pressData: [],
      newsData: []
    };
  }
  componentDidMount() {
    this.updateWindowDimensions();
    this.isomorphicFetchAvailability();
    this.isomorphicFetchNews();
    this.isomorphicFetchPress();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      windowDimensions: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    });
  };

  isomorphicFetchAvailability = async function() {
    const res = await fetch(
      'https://cms.dbox.com/wp-json/wp/v2/hsp_availability'
    );
    const data = await res.json();

    this.setState({
      availabilityData: data.map(el => {
        return el.acf;
      })
    });
  };

  isomorphicFetchPress = async function() {
    const res = await fetch('https://cms.dbox.com/wp-json/wp/v2/hsp_press');
    const data = await res.json();

    this.setState({
      pressData: data.map(el => {
        return el.acf;
      })
    });
  };

  isomorphicFetchNews = async function() {
    const res = await fetch('https://cms.dbox.com/wp-json/wp/v2/hsp_news');
    const data = await res.json();

    this.setState({
      newsData: data.map(el => {
        return el.acf;
      })
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          updateWindowDimensions: () => this.updateWindowDimensions()
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
