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
        homeNavActive: true,
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

    console.log(results);
    this.setState({
      pressData: results
    });
  };

  isomorphicFetchNews = async function() {
    const res = await fetch('https://cms.dbox.com/wp-json/wp/v2/hsp_news');
    let data = await res.json();

    data = data.map(el => {
      return el.acf;
    });
    this.setState({
      newsData: data
    });
  };

  render() {
    // console.log(this.state);
    return (
      <Context.Provider
        value={{
          state: this.state,
          toggleDesktopNav: () =>
            this.setState({
              navigation: {
                ...this.state.navigation,
                homeNavActive: !this.state.navigation.homeNavActive
              }
            }),
          toggleBuildingNav: () =>
            this.setState({
              navigation: {
                ...this.state.navigation,
                buildingNavActive: !this.state.navigation.buildingNavActive
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
