import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Context from '../config/Context';
import variables from '~/styles/Variables';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { mediaMin } from '../styles/MediaQueries';

const { colors } = variables;

const AvailabilityListContainer = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  ${mediaMin.tabletLandscape`
    padding: 0 0 70px 0;
  `}
`;

const AvailabilityRow = styled.tr`
  display: flex;
  flex-direction: ${props => (props.filter ? 'column' : 'row')};
  min-height: 40px;
  border-bottom: ${props => (props.noBorder ? '' : '3px solid black')};
  width: 100%;
  margin: ${props => (props.filter ? '30px 0 0 0' : '10px 0 0 0')};
  padding: ${props => (props.filter ? '0 0 30px 0' : '0 0 10px 0')};
  ${mediaMin.tablet`
    margin: 30px 0 0 0;
    padding: 0 0 30px 0;
  `}
  .building,
  .suite,
  .floor,
  .sqft,
  .neighborhood,
  .type {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .building {
    width: 30%;
  }
  .suite {
    width: 10%;
  }
  .floor {
    width: 10%;
  }
  .sqft {
    width: 10%;
  }
  .neighborhood {
    width: 20%;
  }
  .type {
    width: 15%;
  }
  .details {
    width: 5%;

    @media screen and (max-width: 1024px) {
      border: 2px solid black;
      border-radius: 50%;
      height: 45px;
      width: 45px;
      box-sizing: content-box;
      padding: 18px;
    }
    @media screen and (max-width: 767px) {
      padding: 30px;
    }
  }
  @media screen and (max-width: 1024px) {
    justify-content: space-between;
  }
`;

const MobileCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.th`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  text-align: start;
  ${props => (props.listingsArrayLength && props.listingsArrayLength > 1 ? 'cursor: pointer;' : '')}
`;

const PlusMinus = styled.i`
height: 16px;
width: 16px;
display: flex;
flex-direction: row;
margin-right: 8px;
  &::before {
    content: ${props => (props.filterOpen ? "'\\f068';" : "'\\f067';")}
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 16px;
  }
  z-index: 1;
`;

const SortIcon = styled.i`  
  height: 20px;
  width: 20px;
  margin-left: 8px;
  &::before {
    position: absolute;
    content: ${props => {
      if (props.sortDirection === null || props.sortDirection === 'up') {
        return "'\\f0d8';";
      } else {
        return '';
      }
    }}
  font: normal normal normal 14px/1 FontAwesome;
  font-size: 16px;
  transform: translateY(-15%);
  }
  &::after {
    position: absolute;
    content: ${props => {
      if (props.sortDirection === null || props.sortDirection === 'down') {
        return "'\\f0dd';";
      } else {
        return '';
      }
    }}
  font: normal normal normal 14px/1 FontAwesome;
  font-size: 16px;
  transform: translateY(15%);
  }
  z-index: 1;
  ${props => (props.listingsArrayLength > 1 ? '' : 'display: none')};
`;

const AvailabilitySection = styled.td`
  font-size: 20px;
  font-weight: 500px;
  line-height: 30px;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    line-height: 22px;
  }
  svg {
    margin-left: 8px;
  }
`;

const AvailabilityLink = styled.a`
  font-size: 16px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 4vw !important;
  height: 4vw !important;
  cursor: pointer;
  ${mediaMin.tabletLandscape`
    color: ${colors.babyBlue};
    &:visited{
      color: ${colors.babyBlue};
    }
    `}s
  &:hover {
    padding: 30px;
    color: #000;
    border-radius: 50%;
    background: #369bf766;
    box-shadow: 0 0 20px #369bf7;
  }

  .details {
    width: 5%;
  }
`;

const FilterHeading = styled.span`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  color: #49a4f8;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const FilterBody = styled.div`
  display: block;
  overflow: hidden;
  max-height: ${props => (props.filterOpen ? '360px' : '0')};
  transition: 0.25s max-height ease-in-out;
  ${mediaMin.tabletLandscape`
  max-height: ${props => (props.filterOpen ? '234px' : '0')};
  `}
`;

const FormRow = styled.div`
  padding-top: 14px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`;

const FilterCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  ${mediaMin.tabletLandscape`
  width: 33%;
  `}
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
  .form-title {
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    ${mediaMin.tabletLandscape`
      font-size: 24px;
      line-height: 30px;
    `}
  }
  .form-options {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 10px;
    .form-label {
      display: flex;
      width: 100%;
      margin-bottom: 8px;
      ${mediaMin.tabletLandscape`
        width: 50%;
      `}
    }
    .form-option {
      height: 16px;
      width: 16px;
      -webkit-appearance: none;
      background-color: #fff;
      border: 2px solid #000;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
      padding: 9px;
      border-radius: 0;
      display: inline-block;
      position: relative;
      margin-right: 16px;
      &:checked:after {
        content: '✕';
        font-size: 26px;
        top: -7px;
        left: -1.5px;
        position: absolute;
        color: #000;
        height: 16px;
        ${mediaMin.tabletLandscape`
        left: -0.5px;
        `}
      }
    }
  }
`;

export default class AvailabilityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingsArrayLength: 0,
      filters: {
        neighborhood: ['West Village', 'SoHo', 'Hudson Square', 'Tribeca'],
        type: ['Retail', 'Office', 'Office / Pre-Built'],
        squareFootage: ['5,000-10,000', '10,000-15,000', '15,000-20,000', 'More than 20,000']
      },
      sorting: {
        building: null,
        floor: null,
        sqft: null,
        neighborhood: null
      }
    };
  }
  componentDidMount() {
    if (this.props.retail) {
      this.setState({
        filters: {
          neighborhood: ['West Village', 'SoHo', 'Hudson Square', 'Tribeca'],
          type: ['Retail'],
          squareFootage: ['5,000-10,000', '10,000-15,000', '15,000-20,000', 'More than 20,000']
        }
      });
    }
  }

  numberWithCommas = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  sortColumn = column => {
    let newSort = {
      building: null,
      floor: null,
      sqft: null,
      neighborhood: null
    };
    if (this.state.sorting[column] === 'up') {
      newSort[column] = 'down';
    } else if (this.state.sorting[column] === 'down') {
      newSort[column] = 'up';
    } else {
      newSort[column] = 'up';
    }
    this.setState({
      sorting: newSort
    });
  };

  checkFilters = filterObj => {
    if (filterObj.neighborhood.length === 0) {
      return 'neighborhood';
    } else if (filterObj.type.length === 0) {
      return 'type';
    } else if (filterObj.squareFootage.length === 0) {
      return 'squareFootage';
    } else {
      return filterObj.neighborhood.length === 4 && filterObj.type.length === 3 && filterObj.squareFootage.length === 4;
    }
  };

  updateFilter = (parent, value) => {
    let stateCopy = this.state.filters;
    if (this.checkFilters(stateCopy)) {
      stateCopy[parent] = [value];
      this.setState({
        filters: stateCopy
      });
    } else {
      if (parent === 'neighborhood' && stateCopy[parent].length === 4) {
        stateCopy[parent] = [value];
      } else if (parent === 'type' && stateCopy[parent].length === 3) {
        stateCopy[parent] = [value];
      } else if (parent === 'squareFootage' && stateCopy[parent].length === 4) {
        stateCopy[parent] = [value];
      } else {
        if (stateCopy[parent].includes(value)) {
          let index = stateCopy[parent].indexOf(value);
          stateCopy[parent].splice(index, 1);
        } else {
          stateCopy[parent].push(value);
        }
      }
      if (this.checkFilters(stateCopy) === 'neighborhood') {
        stateCopy['neighborhood'] = ['West Village', 'SoHo', 'Hudson Square', 'Tribeca'];
      } else if (this.checkFilters(stateCopy) === 'type') {
        stateCopy['type'] = ['Retail', 'Office', 'Office / Pre-Built'];
      } else if (this.checkFilters(stateCopy) === 'squareFootage') {
        stateCopy['squareFootage'] = ['5,000-10,000', '10,000-15,000', '15,000-20,000', 'More than 20,000'];
      }
      this.setState({
        filters: stateCopy
      });
    }
  };

  createListingRows = (data, building, windowWidth) => {
    if (data.length > 0) {
      let sortedAndFiltered = data;
      //Filter to Specific Building
      if (building) {
        sortedAndFiltered = sortedAndFiltered.filter(el => {
          return el.building === building;
        });
      }

      //Filtering
      sortedAndFiltered = sortedAndFiltered.filter(el => {
        return this.state.filters['neighborhood'].includes(el.neighborhood);
      });
      sortedAndFiltered = sortedAndFiltered.filter(el => {
        return this.state.filters['type'].includes(el.type);
      });
      let filterSQFT = [];
      if (this.state.filters.squareFootage.length !== 4) {
        sortedAndFiltered.forEach(el => {
          if (this.state.filters.squareFootage.includes('5,000-10,000')) {
            if (el.sqft >= 5000 && el.sqft <= 10000) {
              filterSQFT.push(el);
            }
          }
          if (this.state.filters.squareFootage.includes('10,000-15,000')) {
            if (el.sqft >= 10000 && el.sqft <= 15000) {
              filterSQFT.push(el);
            }
          }
          if (this.state.filters.squareFootage.includes('15,000-20,000')) {
            if (el.sqft >= 15000 && el.sqft <= 20000) {
              filterSQFT.push(el);
            }
          }
          if (this.state.filters.squareFootage.includes('More than 20,000')) {
            if (el.sqft > 20000) {
              filterSQFT.push(el);
            }
          }
        });
        sortedAndFiltered = filterSQFT;
      }

      //Sorting
      if (this.state.sorting.building !== null) {
        if (this.state.sorting.building === 'up') {
          sortedAndFiltered = sortedAndFiltered.sort((a, b) => {
            return a['building'].localeCompare(b['building']);
          });
        } else {
          sortedAndFiltered = sortedAndFiltered.sort((a, b) => {
            return b['building'].localeCompare(a['building']);
          });
        }
      }
      if (this.state.sorting.floor !== null) {
        if (this.state.sorting.floor === 'up') {
          sortedAndFiltered = sortedAndFiltered.sort((a, b) => {
            let aCompare;
            let bCompare;
            a['floor'] === 'Ground' ? (aCompare = 1) : (aCompare = a['floor']);
            b['floor'] === 'Ground' ? (bCompare = 1) : (bCompare = b['floor']);
            return aCompare - bCompare;
          });
        } else {
          sortedAndFiltered = sortedAndFiltered.sort((a, b) => {
            let aCompare;
            let bCompare;
            a['floor'] === 'Ground' ? (aCompare = 1) : (aCompare = a['floor']);
            b['floor'] === 'Ground' ? (bCompare = 1) : (bCompare = b['floor']);
            return bCompare - aCompare;
          });
        }
      }
      if (this.state.sorting.sqft !== null) {
        if (this.state.sorting.sqft === 'up') {
          sortedAndFiltered = sortedAndFiltered.sort((a, b) => {
            return a['sqft'] - b['sqft'];
          });
        } else {
          sortedAndFiltered = sortedAndFiltered.sort((a, b) => {
            return b['sqft'] - a['sqft'];
          });
        }
      }
      if (this.state.sorting.neighborhood !== null) {
        if (this.state.sorting.neighborhood === 'up') {
          sortedAndFiltered = sortedAndFiltered.sort((a, b) => {
            return a['neighborhood'].localeCompare(b['neighborhood']);
          });
        } else {
          sortedAndFiltered = sortedAndFiltered.sort((a, b) => {
            return b['neighborhood'].localeCompare(a['neighborhood']);
          });
        }
      }

      //Updating Length in state for sort icons
      if (this.state.listingsArrayLength !== sortedAndFiltered.length) {
        this.setState({
          listingsArrayLength: sortedAndFiltered.length
        });
      }
      if (sortedAndFiltered.length !== 0) {
        if (windowWidth > 1024) {
          return sortedAndFiltered.map((el, idx) => {
            return (
              <AvailabilityRow key={idx}>
                <AvailabilitySection className="building">
                  {el.building} <FaMapMarkerAlt />
                </AvailabilitySection>
                <AvailabilitySection className="suite">{el.suite}</AvailabilitySection>
                <AvailabilitySection className="floor">{el.floor}</AvailabilitySection>
                <AvailabilitySection className="sqft">{this.numberWithCommas(el.sqft)}</AvailabilitySection>
                <AvailabilitySection className="neighborhood">{el.neighborhood}</AvailabilitySection>
                <AvailabilitySection className="type">{el.type}</AvailabilitySection>
                <Link
                  as={`/buildings/${el.building_slug}/${el.suite_floor_slug}`}
                  href={`/listing?building_slug=${el.building_slug}&suite_floor_slug=${el.suite_floor_slug}`}
                  passHref
                >
                  <AvailabilityLink className="details">
                    <span>View</span>
                    <span>Details</span>
                  </AvailabilityLink>
                </Link>
              </AvailabilityRow>
            );
          });
        } else {
          return sortedAndFiltered.map((el, idx) => {
            return (
              <AvailabilityRow noBorder={true} key={idx}>
                <MobileCol>
                  <AvailabilitySection>{el.building}</AvailabilitySection>
                  <AvailabilitySection>{el.suite}</AvailabilitySection>
                  <AvailabilitySection>{'SF: ' + this.numberWithCommas(el.sqft)}</AvailabilitySection>
                  <AvailabilitySection>{'Neighborhood: ' + el.neighborhood}</AvailabilitySection>
                </MobileCol>
                <MobileCol>
                  <Link
                    as={`/buildings/${el.building_slug}/${el.suite_floor_slug}`}
                    href={`/listing?building_slug=${el.building_slug}&suite_floor_slug=${el.suite_floor_slug}`}
                    passHref
                  >
                    <AvailabilityLink className="details">
                      <span>View</span>
                      <span>Details</span>
                    </AvailabilityLink>
                  </Link>
                </MobileCol>
              </AvailabilityRow>
            );
          });
        }
      } else {
        return <AvailabilityRow>No matching records found</AvailabilityRow>;
      }
    }
  };

  render() {
    return (
      <Context.Consumer>
        {context => (
          <AvailabilityListContainer>
            <AvailabilityRow>
              <Heading>Availability</Heading>
            </AvailabilityRow>
            {this.props.hasFilter ? <FilterRow updateFilter={this.updateFilter} /> : ''}
            {context.state.windowDimensions.width > 1024 ? (
              <AvailabilityRow>
                <Heading
                  className="building"
                  listingsArrayLength={this.state.listingsArrayLength}
                  onClick={() => this.sortColumn('building')}
                >
                  Building
                  <SortIcon
                    listingsArrayLength={this.state.listingsArrayLength}
                    sortDirection={this.state.sorting.building}
                  />
                </Heading>
                <Heading className="suite">Suite</Heading>
                <Heading
                  className="floor"
                  listingsArrayLength={this.state.listingsArrayLength}
                  onClick={() => this.sortColumn('floor')}
                >
                  Floor
                  <SortIcon
                    listingsArrayLength={this.state.listingsArrayLength}
                    sortDirection={this.state.sorting.floor}
                  />
                </Heading>
                <Heading
                  className="sqft"
                  listingsArrayLength={this.state.listingsArrayLength}
                  onClick={() => this.sortColumn('sqft')}
                >
                  Sq. ft.
                  <SortIcon
                    listingsArrayLength={this.state.listingsArrayLength}
                    sortDirection={this.state.sorting.sqft}
                  />
                </Heading>
                <Heading
                  className="neighborhood"
                  listingsArrayLength={this.state.listingsArrayLength}
                  onClick={() => this.sortColumn('neighborhood')}
                >
                  Neighborhood
                  <SortIcon
                    listingsArrayLength={this.state.listingsArrayLength}
                    sortDirection={this.state.sorting.neighborhood}
                  />
                </Heading>
                <Heading className="type">Type</Heading>
                <Heading className="details" />
              </AvailabilityRow>
            ) : (
              ''
            )}
            {this.createListingRows(
              context.availabilityData,
              this.props.building,
              context.state.windowDimensions.width
            )}
          </AvailabilityListContainer>
        )}
      </Context.Consumer>
    );
  }
}

class FilterRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOpen: false
    };
  }

  toggleFilter = () => {
    this.setState({
      filterOpen: !this.state.filterOpen
    });
  };
  handleChange = (parent, value) => {
    if (value === 'Office') {
      this.props.updateFilter(parent, 'Office / Pre-Built');
    }
    this.props.updateFilter(parent, value);
  };
  render() {
    return (
      <AvailabilityRow filter>
        <FilterHeading onClick={this.toggleFilter}>
          <PlusMinus filterOpen={this.state.filterOpen} /> Filters
        </FilterHeading>
        <FilterBody filterOpen={this.state.filterOpen}>
          <FormRow>
            <FilterCol>
              <FormSection>
                <div className="form-title">Neighborhood</div>
                <div className="form-options">
                  <label className="form-label">
                    <input
                      onChange={() => this.handleChange('neighborhood', 'West Village')}
                      className="form-option"
                      type="checkbox"
                      value="West Village"
                    />
                    West Village
                  </label>
                  <label className="form-label">
                    <input
                      onChange={() => this.handleChange('neighborhood', 'SoHo')}
                      className="form-option"
                      type="checkbox"
                      value="SoHo"
                    />
                    SoHo
                  </label>
                  <label className="form-label">
                    <input
                      onChange={() => this.handleChange('neighborhood', 'Hudson Square')}
                      className="form-option"
                      type="checkbox"
                      value="Hudson Square"
                    />
                    Hudson Square
                  </label>
                  <label className="form-label">
                    <input
                      onChange={() => this.handleChange('neighborhood', 'Tribeca')}
                      className="form-option"
                      type="checkbox"
                      value="Tribeca"
                    />
                    Tribeca
                  </label>
                </div>
              </FormSection>
              <FormSection>
                <div className="form-title">Type</div>
                <div className="form-options">
                  <label className="form-label">
                    <input
                      onChange={() => this.handleChange('type', 'Retail')}
                      className="form-option"
                      type="checkbox"
                      value="Retail"
                    />
                    Retail
                  </label>
                  <label className="form-label">
                    <input
                      onChange={() => this.handleChange('type', 'Office')}
                      className="form-option"
                      type="checkbox"
                      value="Office"
                    />
                    Office
                  </label>
                </div>
              </FormSection>
            </FilterCol>
            <FilterCol>
              <FormSection>
                <div className="form-title">Square Footage</div>
                <div className="form-options">
                  <label className="form-label">
                    <input
                      onChange={() => this.handleChange('squareFootage', '5,000-10,000')}
                      className="form-option"
                      type="checkbox"
                      value="5,000-10,000"
                    />
                    5,000-10,000
                  </label>
                  <label className="form-label">
                    <input
                      onChange={() => this.handleChange('squareFootage', '10,000-15,000')}
                      className="form-option"
                      type="checkbox"
                      value="10,000-15,000"
                    />
                    10,000-15,000
                  </label>
                  <label className="form-label">
                    <input
                      onChange={() => this.handleChange('squareFootage', '15,000-20,000')}
                      className="form-option"
                      type="checkbox"
                      value="15,000-20,000"
                    />
                    15,000-20,000
                  </label>
                  <label className="form-label">
                    <input
                      onChange={() => this.handleChange('squareFootage', 'More than 20,000')}
                      className="form-option"
                      type="checkbox"
                      value="More than 20,000"
                    />
                    More than 20,000
                  </label>
                </div>
              </FormSection>
            </FilterCol>
          </FormRow>
        </FilterBody>
      </AvailabilityRow>
    );
  }
}
