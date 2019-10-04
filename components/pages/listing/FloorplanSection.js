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
    slug: 'as_built_test_fit',
    title: 'As-Built Test Fit'
  },
  {
    slug: 'pre_built_test_fit',
    title: 'Pre-Built Test Fit'
  }
];

const FloorplanSectionWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  .floorplan-nav {
    width: 100%;
    border-bottom: 3px solid black;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 15px;
    .button-wrapper {
      height: 20px;
      display: flex;
      flex-direction: row;
      button {
        font-family: ${variables.typography.default};
        font-weight: 500;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        border-right: 3px solid black;
        padding: 0 10px;
        font-size: 1rem;
        color: rgb(81, 81, 81);
        ${mediaMin.desktopSmall`
        font-size: 1.2rem;
        `}
        &:last-child {
          border-right: none;
        }
        &.first {
          padding: 0 1em 0 0;
        }
        &.active {
          color: #000;
        }
      }
    }
    a {
      color: #369bf7;
      padding: 5px 0;
      box-sizing: border-box;
      font-size: 1.2rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .floorplan-container {
    position: relative;
    img {
      padding: 15px 15px;
      box-sizing: border-box;
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
    let availableSections = possibleBtnValues.filter(value => {
      return listing[value.slug];
    });

    // Set initial active section
    let activeSection = availableSections.length > 0 ? availableSections[0].slug : null;

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

    return <div className="button-wrapper">{buttons}</div>;
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
          {pdf_download && (
            <a className="desktop-link" href={pdf_download} target="_blank" rel="noopener noreferrer">
              View / Download Floor Plans and Detailed Specs
            </a>
          )}
        </div>
        {pdf_download && (
          <a className="mobile-link" href={pdf_download} target="_blank" rel="noopener noreferrer">
            View / Download Floor Plans and Detailed Specs
          </a>
        )}
        <div className="floorplan-container">{this.renderImages()}</div>
      </FloorplanSectionWrapper>
    );
  }
}

export default FloorplanSection;
