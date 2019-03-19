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
        mobileNavActive: true,
        desktopNavActive: true,
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
    let data = await res.json();
    data = data.map(el => {
      return el.acf;
    });
    this.setState({
      availabilityData: data
    });
  };

  isomorphicFetchPress = async function() {
    const res = await fetch('https://cms.dbox.com/wp-json/wp/v2/hsp_press');
    let data = await res.json();

    data = data.map(el => {
      return el.acf;
    });
    data = data.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    this.setState({
      pressData: data
    });
  };

  isomorphicFetchNews = async function() {
    const res = await fetch('https://cms.dbox.com/wp-json/wp/v2/hsp_news');
    let data = await res.json();

    data = data.map(el => {
      return el.acf;
    });
    data = data.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    this.setState({
      newsData: data
    });
  };

  render() {
    console.log(this.state.availabilityData);
    return (
      <Context.Provider
        value={{
          state: this.state,
          toggleMobileNav: () => this.setState({ 
            navigation: {
              ...this.state.navigation,
              mobileNavActive: !this.state.navigation.mobileNavActive,
            }
          }),
          toggleDesktopNav: () => this.setState({ 
            navigation: {
              ...this.state.navigation,
              desktopNavActive: !this.state.navigation.desktopNavActive,
            }
          }),
          toggleBuildingNav: () => this.setState({ 
            navigation: {
              ...this.state.navigation,
              buildingNavActive: !this.state.navigation.buildingNavActive,
            }
          })
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
