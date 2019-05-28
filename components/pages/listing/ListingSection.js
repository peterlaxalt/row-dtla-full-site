import React, { Component } from 'react';

const possibleBtnValues = [
  {
    slug: 'core_shell',
    title: 'Core & Shell'
  },
  {
    slug: 'floorplan',
    title: 'Floorplan'
  },
  {
    slug: 'test_fit',
    title: 'Test Fit'
  },
  {
    slug: 'full_renovation_test_fit',
    title: 'Full Renovation Test Fit'
  },
  {
    slug: 'as_built_test_Fit',
    title: 'As-Built Test Fit'
  },
  {
    slug: 'pre_built_test_fit',
    title: 'Pre-Built Test Fit'
  }
];

class ListingSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availableSections: [],
      activeSection: ''
    };

    this.availableSections = [];
  }

  findAvailableSections() {
    const { listing } = this.props;

    let availableSections = possibleBtnValues.filter(value => {
      const { slug } = value;

      if (listing[slug]) {
        return true;
      }
    });

    // Set initial active section
    let activeSection = availableSections[0].slug;

    this.setState({ availableSections, activeSection });
  }

  componentDidMount() {
    this.findAvailableSections();
  }

  generateButtons() {
    const { availableSections } = this.state;

    const buttons = availableSections.map(value => {
      const { slug } = value;

      return (
        <button key={value.slug} onClick={() => this.setState({ activeSection: slug })}>
          {value.title}
        </button>
      );
    });

    return <React.Fragment>{buttons}</React.Fragment>;
  }

  render() {
    return <div>{this.generateButtons()}</div>;
  }
}

export default ListingSection;
