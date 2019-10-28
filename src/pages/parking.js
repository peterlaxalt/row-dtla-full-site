import React, { useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';

import Context from '~/config/Context';
import BackArrow from '~/images/icons/arrow-back-white.svg';
import Layout from '~/components/layouts';
import SEO from '~/components/seo';
import { mediaMin } from '~/styles/mediaQueries';

const ParkingPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const ParkingContent = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  margin: 24px 0;
  ${mediaMin('tabletLandscape')} {
    margin: 64px 0 0 0;
    flex-direction: row;
  }
  h2 {
    margin: 0 0 32px 0;
    font-size: 40px;
    line-height: 44px;
    ${mediaMin('tabletLandscape')} {
      width: 35%;
      font-size: 72px;
      line-height: 80px;
    }
  }
`;

const TimeTable = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 21px;
    font-weight: 500;
    letter-spacing: -0.3px;
    line-height: 28px;
    margin: 40px 0 16px 0;
    &:first-child {
      margin-top: 0;
    }
  }
  span {
    font-size: 12px;
    letter-spacing: 0.4px;
    line-height: 18px;
    &.margin-bottom {
      margin-bottom: 8px;
    }
  }
  .row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    ${mediaMin('tabletLandscape')} {
      width: initial;
    }
  }
  .col {
    display: flex;
    flex-direction: column;
    ${mediaMin('tabletLandscape')} {
      margin-right: 64px;
    }
  }
`;

const Parking = props => {
  const context = useContext(Context);
  const { setDarkTheme } = context;

  useEffect(() => {
    setDarkTheme(true);
  }, []);

  return (
    <Layout>
      <SEO title="Parking" />
      <ParkingPage>
        <Link to="/">
          <img src={BackArrow} alt="back arrow" />
        </Link>
        <ParkingContent>
          <h2>
            Parking
            <br />
            Rates
          </h2>
          <TimeTable>
            <h4>Monday - Friday</h4>
            <div className="row">
              <div className="col">
                <span className="margin-bottom">WITH VALIDATION</span>
                <span>1st Hour: FREE</span>
                <span>2nd Hour: FREE</span>
                <span>3rd Hour: $2.50</span>
                <span>4th Hour: $5.00</span>
                <span>5th Hour: $8.00</span>
                <span>Daily Max Rate: $12.00</span>
              </div>
              <div className="col">
                <span className="margin-bottom">WITHOUT VALIDATION</span>
                <span>1st Hour: FREE</span>
                <span>2nd Hour: $10.00</span>
                <span>Daily Max Rate: $12.00</span>
              </div>
            </div>
            <h4>Saturday</h4>
            <div className="row">
              <div className="col">
                <span className="margin-bottom">WITH VALIDATION</span>
                <span>1st Hour: FREE</span>
                <span>2nd Hour: FREE</span>
                <span>3rd Hour: $2.50</span>
                <span>4th Hour: $5.00</span>
                <span>5th Hour: $8.00</span>
                <span>Daily Max Rate: $12.00</span>
              </div>
            </div>
            <h4>Sunday</h4>
            <div className="row">
              <div className="col">
                <span className="margin-bottom">WITH VALIDATION</span>
                <span>1st Hour: FREE</span>
                <span>2nd Hour: FREE</span>
                <span>3rd Hour: $2.50</span>
                <span>4th Hour: $5.00</span>
                <span>5th Hour: $8.00</span>
                <span>Daily Max Rate: $12.00</span>
              </div>
              <div className="col">
                <span className="margin-bottom">WITHOUT VALIDATION</span>
                <span>1st Hour: FREE</span>
                <span>2nd Hour: $2.00</span>
                <span>3rd Hour: $5.00</span>
                <span>4th Hour: $8.00</span>
                <span>Daily Max Rate: $12.00</span>
              </div>
            </div>
          </TimeTable>
        </ParkingContent>
      </ParkingPage>
    </Layout>
  );
};

export default Parking;
