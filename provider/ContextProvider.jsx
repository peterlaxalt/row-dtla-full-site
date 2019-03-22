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
        buildingNavActive: false,
        activeSubNav: ''
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
    let results = [];
    const res = await fetch(
      'https://cms.dbox.com/wp-json/wp/v2/hsp_availability'
    );
    const pages = res.headers.get('x-wp-totalpages');
    for (var i = 1; i <= pages; i++) {
      results.push(
        await fetch(
          'https://cms.dbox.com/wp-json/wp/v2/hsp_availability?page=' + i
        ).then(res => {
          return res.json();
        })
      );
    }
    results = results.flat();
    results = results.map(el => {
      return el.acf;
    });

    this.setState({
      availabilityData: results
    });
  };

  isomorphicFetchPress = async function() {
    let results = [];
    const res = await fetch('https://cms.dbox.com/wp-json/wp/v2/hsp_press');
    const pages = res.headers.get('x-wp-totalpages');
    for (var i = 1; i <= pages; i++) {
      results.push(
        await fetch(
          'https://cms.dbox.com/wp-json/wp/v2/hsp_press?page=' + i
        ).then(res => {
          return res.json();
        })
      );
    }
    results = results.flat();
    results = results.map(el => {
      return el.acf;
    });

    this.setState({
      pressData: results
    });
  };

  isomorphicFetchNews = async function() {
    let results = [];
    const res = await fetch('https://cms.dbox.com/wp-json/wp/v2/hsp_news');
    const pages = res.headers.get('x-wp-totalpages');
    for (var i = 1; i <= pages; i++) {
      results.push(
        await fetch(
          'https://cms.dbox.com/wp-json/wp/v2/hsp_news?page=' + i
        ).then(res => {
          return res.json();
        })
      );
    }
    results = results.flat();
    results = results.map(el => {
      return el.acf;
    });

    this.setState({
      newsData: results
    });
  };

  render() {
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
          }),
          toggleSubNav: section => {
            let activeSection = this.state.navigation.activeSubNav === section ? false : section;
            this.setState({
              navigation: {
                ...this.state.navigation,
                activeSubNav: activeSection
              }
            });
          }
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
