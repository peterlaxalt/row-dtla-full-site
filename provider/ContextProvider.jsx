import React, { Component } from 'react';
import Context from '../config/Context';
import $ from 'jquery';

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowDimensions: {
        height: null,
        width: null
      },
      availabilityData: [],
      pressData: [],
      newsData: []
    };
  }
  componentDidMount() {
    this.updateWindowDimensions();
    this.fetchAvailability();
    this.fetchNews();
    this.fetchPress();
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

  fetchAvailability = () => {
    $.ajax({
      url: 'https://cms.dbox.com/wp-json/wp/v2/hsp_availability'
    }).then(data => {
      data = data.map((el, idx) => {
        return el.acf;
      });
      this.setState({
        availabilityData: data
      });
      console.log(data);
    });
  };

  fetchPress = () => {
    $.ajax({
      url: 'https://cms.dbox.com/wp-json/wp/v2/hsp_press'
    }).then(data => {
      data = data.map((el, idx) => {
        return el.acf;
      });
      data = data.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      this.setState({
        pressData: data
      });
      console.log(data);
    });
  };

  fetchNews = () => {
    $.ajax({
      url: 'https://cms.dbox.com/wp-json/wp/v2/hsp_news'
    }).then(data => {
      data = data.map((el, idx) => {
        return el.acf;
      });
      data = data.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      this.setState({
        newsData: data
      });
      console.log(data);
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
