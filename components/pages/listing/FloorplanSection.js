import { Component } from 'react';
import styled from 'styled-components';
import variables from '~/styles/Variables';
import { mediaMin } from '~/styles/MediaQueries';

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

const FloorplanSectionWrapper = styled.div`
  .floorplan-nav {
    border-bottom: 3px solid black;
    padding: 10px 0;
    display: flex;
    position: relative;
    margin-bottom: 15px;
    button {
      font-family: ${variables.typography.default};
      font-weight: 500;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.2rem;
      border-right: 3px solid black;
      padding: 0 1em;
      font-size: 1rem;
      ${mediaMin.desktopSmall`
        font-size: 1.2rem;
      `}
      &:nth-last-child(2) {
        border-right: none;
      }
      &.first {
        padding: 0 1em 0 0;
      }
      &.active {
        color: ${variables.colors.babyBlue};
      }
    }
    a {
      position: absolute;
      right: 0;
      color: #369bf7;
      padding: 5px 0;
      font-size: 1.2rem;
      ${mediaMin.tablet`
        right: 20%;
      `}
      ${mediaMin.desktop`
        right: 50%;
        transform: translateX(50%);
      `}
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .floorplan-container {
    position: relative;
    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 200ms ease;
      max-width: 100%;
      &:nth-child(1) {
        position: relative;
      }

      &.active {
        opacity: 1;
      }
    }
  }
  .mobile-link {
    color: ${variables.colors.babyBlue};
    font-size: 0.8rem;
    ${mediaMin.desktopSmall`
      display: none;
    `}
  }
  .desktop-link {
    display: none;
    ${mediaMin.desktopSmall`
      display: initial;
    `}
  }
`;

class FloorplanSection extends Component {
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

    let availableSections = possibleBtnValues.filter(value => listing[value.slug]);

    // Set initial active section
    let activeSection = availableSections[0].slug;

    this.setState({ availableSections, activeSection });
  }

  componentDidMount() {
    this.findAvailableSections();
  }

  generateButtons() {
    const { activeSection, availableSections } = this.state;

    const buttons = availableSections.map((value, idx) => {
      const { slug } = value;

      return (
        <button
          className={`${activeSection === slug ? 'active' : ''} ${idx === 0 ? 'first' : ''}`}
          key={slug}
          onClick={() => this.setState({ activeSection: slug })}
        >
          {value.title}
        </button>
      );
    });

    return <React.Fragment>{buttons}</React.Fragment>;
  }

  renderImages() {
    const { activeSection, availableSections } = this.state;

    return availableSections.map(section => {
      const { slug, title } = section;
      const { listing } = this.props;
      return (
        <img
          className={activeSection === slug ? 'active' : null}
          key={`floorplan-img-${slug}`}
          src={listing[slug]}
          alt={listing[title]}
        />
      );
    });
  }

  render() {
    const { pdf_download } = this.props.listing;

    return (
      <FloorplanSectionWrapper>
        <div className="floorplan-nav">
          {this.generateButtons()}
          <a className="desktop-link" href={pdf_download} target="_blank" rel="noopener noreferrer">
            View / Download Floor Plans and Detailed Specs
          </a>
        </div>
        <a className="mobile-link" href={pdf_download} target="_blank" rel="noopener noreferrer">
          View / Download Floor Plans and Detailed Specs
        </a>
        <div className="floorplan-container">{this.renderImages()}</div>
      </FloorplanSectionWrapper>
    );
  }
}

export default FloorplanSection;
