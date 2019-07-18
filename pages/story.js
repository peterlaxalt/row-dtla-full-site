import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import BeforeAfter from '~/components/BeforeAfter';
import ScrollUp from '~/components/ScrollUp';
import CopyrightFooter from '~/components/CopyrightFooter';
import Context from '~/config/Context';
import ResponsiveImage from '~/components/ResponsiveImage';
import { mediaMin } from '~/styles/MediaQueries';

const beforeAfterOne = {
  before: {
    path: '/static/images/story/1_Slider/1_Aerial_Now_Aligned',
    alt: 'Hudson Square Now'
  },
  after: {
    path: '/static/images/story/1_Slider/1_Aerial_Then_Aligned',
    alt: 'Hudson Square Then'
  }
};

const beforeAfterTwo = {
  before: {
    path: '/static/images/story/3_Trinity/story-trinity-before',
    alt: 'Trinity Before'
  },
  after: {
    path: '/static/images/story/3_Trinity/story-trinity-after',
    alt: 'Trinity After'
  }
};

const Heading = styled.h2`
  font-size: 34px;
  font-weight: ${props => (props.bold ? '600' : '500')};
  line-height: 44px;
  letter-spacing: 1px;
  text-align: center;
  padding: 0 15% 40px 15%;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
    padding: 0 15px 15px;
  }
`;

const MobileHeading = styled.h2`
  margin: 0;
  height: 30px;
  font-weight: 500;
  padding: 10px 0;
  margin: 0 15px 30px 15px;
  border-bottom: 3px solid black;
  box-sizing: content-box;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SubHeading = styled.h3`
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
  text-align: center;
  padding: 40px 25px 20px 25px;
  @media screen and (max-width: 1024px) {
    font-size: 17px;
    font-weight: 400;
    line-height: 25px;
    padding: 0 15px 15px;
    text-align: left;
  }
`;

const MainCol = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 15px;
  margin-bottom: 50px;
  ${mediaMin.tabletLandscape`
    margin-bottom: 200px;
    flex-direction: row;
  `}
`;

const InnerCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${mediaMin.tabletLandscape`
    width: 50%;
  `}
  .responsive-image {
    max-height: 100%;
    max-width: 100%;
  }
`;

const Spacer = styled.div`
  height: ${props => (props.height ? props.height : '200px')};
  width: 100%;
`;

const TextSection = styled.div`
  padding: 50px 0 0 0;
  ${mediaMin.tabletLandscape`
    padding: 0 40px 0 40px;
  `}
  .text-heading {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    text-align: left;
    ${mediaMin.tabletLandscape`
      font-size: 24px;
      font-weight: 500;
    `}
  }
  .text-body {
    font-size: 17px;
    line-height: 25px;
    margin-bottom: 35px;
    ${mediaMin.tabletLandscape`
      font-size: 19px;
      line-height: 28px;
    `}
    a {
      color: #369bf7;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Story = () => (
  <Context.Consumer>
    {context =>
      context.state.windowDimensions.width > 1024 ? (
        /*DESKTOP*/
        <div>
          <Spacer height="100px" />
          <Fade>
            <Heading bold>
              Hudson Square Properties is a joint venture of Trinity Church Wall Street and Norges Bank Real Estate
              Management with Hines, the operating partner, of a 12 building portfolio of approximately 6 million
              rentable square feet.
            </Heading>
          </Fade>
          <Fade>
            <BeforeAfter height="80vh" before={beforeAfterOne.before} after={beforeAfterOne.after} />
          </Fade>
          <Fade>
            <MainCol>
              <InnerCol>
                <ResponsiveImage srcPath="/static/images/story/2_Hudson_Square/bg-story-hudson-square-left" imgAlt="" />
                <TextSection>
                  <p className="text-body">
                    Over the last decade, the portfolio has invested significantly in energy and sustainability
                    improvements, including switching from using fuel oil as a heating source to cleaner burning natural
                    gas, installing modern HVAC control systems and automatic water and energy meters.
                    <br />
                    <br /> More recently, the portfolio has chosen to respond to the Global Real Estate Sustainability
                    Benchmark (GRESB), which assesses the sustainability performance of leading real estate portfolios
                    and assets worldwide. Assessment participants receive comparative business intelligence on where
                    they stand against their peers, a roadmap with the actions they can take to improve their
                    Environmental Social and Governance performance and a communication platform to engage with
                    investors.
                    <br />
                    <br /> Most recently, the entire portfolio is pursuing LEED Gold certification using the LEED
                    Performance Score program which is expected in mid-2019.
                    <br />
                    <br /> Individual Building Sustainability and Energy Efficiency Accomplishments 75 Varick Street:
                    LEED Silver certified, LEED Gold certification in progress 345&nbsp;Hudson&nbsp;Street: LEED Gold
                    certification
                  </p>
                </TextSection>
              </InnerCol>
              <InnerCol>
                <Spacer />
                <TextSection>
                  <p className="text-body">
                    Trinity Church Wall Street has played a prominent role in lower Manhattan for more than 300 years.
                    Its history in the Hudson Square neighborhood dates back to the generous land grant given to the
                    church by Queen Anne in 1705. Today, Trinity owns 14 acres in the vibrant and growing neighborhood,
                    property that continues to provide resources for the church’s mission and ministries in New York
                    City and around the world.
                    <br />
                    <br />
                    In December 2015, Trinity and Norges Bank Real Estate Management formed a joint venture partnership
                    comprising 11 office buildings with 4.9 million square feet of commercial space in Hudson Square. In
                    April 2016, the joint venture selected Hines as the operating partner for the portfolio. The office
                    buildings on the properties are being redeveloped into a hub for creative industries and businesses
                    that are drawn by the energy of this vibrant neighborhood and the flexibility of the space.
                  </p>
                </TextSection>
                <ResponsiveImage
                  srcPath="/static/images/story/2_Hudson_Square/bg-story-hudson-square-right"
                  imgAlt=""
                />
              </InnerCol>
            </MainCol>
          </Fade>
          <Fade>
            <BeforeAfter before={beforeAfterTwo.before} after={beforeAfterTwo.after} />
          </Fade>
          <Spacer id="section-story-trinity" />
          <Fade>
            <Heading bold>TRINITY CHURCH WALL STREET</Heading>
            <SubHeading>
              “Trinity Church Wall Street has played a prominent role <br />
              in lower Manhattan for more than 300 years.”
            </SubHeading>
          </Fade>
          <Fade>
            <MainCol>
              <InnerCol>
                <ResponsiveImage srcPath="/static/images/story/3_Trinity/bg-story-trinity-left" imgAlt="" />
              </InnerCol>
              <InnerCol>
                <Spacer height="300px" />
                <TextSection>
                  <h3 className="text-heading">ABOUT TRINITY CHURCH WALL STREET</h3>
                  <p className="text-body">
                    Trinity Church Wall Street is a growing and inclusive Episcopal parish that seeks to serve and heal
                    the world by building neighborhoods that live Gospel truths, generations of faithful leaders, and
                    sustainable communities. The parish is guided by its core values: faith, integrity, inclusiveness,
                    compassion, social justice, and stewardship. Members come from the five boroughs of New York City
                    and surrounding areas to form a racially, ethnically, and economically diverse congregation. More
                    than 20 worship services are offered every week at its historic sanctuaries, Trinity Church and St.
                    Paul’s Chapel, the cornerstones of the parish’s community life, worship, and mission, and online at
                    &nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.trinitywallstreet.org/">
                      trinitywallstreet.org
                    </a>
                    &nbsp;. The parish welcomes approximately 2.5 million visitors per year.
                  </p>
                </TextSection>
                <ResponsiveImage srcPath="/static/images/story/3_Trinity/bg-story-trinity-right" imgAlt="" />
              </InnerCol>
            </MainCol>
          </Fade>
          <Spacer id="section-story-norges" />
          <Fade>
            <Heading bold>NORGES BANK REAL ESTATE MANAGEMENT</Heading>
            <SubHeading>
              “The fund owns direct real estate investments totaling nearly 800 assets across 13 countries.”
            </SubHeading>
          </Fade>
          <Fade>
            <MainCol>
              <InnerCol>
                <Spacer height="300px" />
                <TextSection>
                  <h3 className="text-heading">ABOUT NORGES BANK REAL ESTATE MANAGEMENT</h3>
                  <p className="text-body">
                    Norges Bank Real Estate Management manages approximately $27 billion in direct real estate
                    investments on behalf of the Norwegian Government Pension Fund Global, totaling $1,020 billion of
                    assets across equity, fixed income and real estate. The fund’s mission is to safeguard financial
                    wealth for future generations. Norges Bank Real Estate Management continues to invest in three
                    target asset classes – office, retail and logistics. Investments in office and retail are focused
                    across a limited number of global cities in Europe, the US and Asia that have key fundamentals
                    including transparency, liquidity, supply restrictions and the potential for economic growth.
                  </p>
                </TextSection>
                <ResponsiveImage srcPath="/static/images/story/4_Norges/bg-story-norges-left" imgAlt="" />
                <TextSection>
                  <p className="text-body">
                    Investments in logistics are located across Europe and the US with a strategic focus on proximity to
                    large metropolitan markets and key global distribution networks. The fund owns direct real estate
                    investments totaling nearly 800 assets across 13 countries. In the US, the fund owns direct real
                    estate investments across 22 million square feet of office and retail properties in New York City,
                    Boston, Washington DC and San Francisco. Visit&nbsp;
                    <a href="https://www.nbim.no/" target="_blank" rel="noopener noreferrer">
                      https://www.nbim.no/
                    </a>
                    &nbsp;for more information.
                  </p>
                </TextSection>
              </InnerCol>
              <InnerCol>
                <ResponsiveImage srcPath="/static/images/story/4_Norges/bg-story-norges-right" imgAlt="" />
              </InnerCol>
            </MainCol>
          </Fade>
          <Spacer id="section-story-hines" />
          <Fade>
            <Heading bold>HINES</Heading>
            <SubHeading>
              “Hines is one of the largest and most-respected
              <br /> real estate organizations in the world.”
            </SubHeading>
          </Fade>
          <Fade>
            <MainCol>
              <InnerCol>
                <Spacer height="300px" />
                <TextSection>
                  <h3 className="text-heading">ABOUT HINES</h3>
                  <p className="text-body">
                    Hines is a privately owned global real estate investment firm founded in 1957 with a presence in 207
                    cities in 24 countries. Hines has approximately $116.4 billion of assets under management, including
                    $64 billion for which Hines provides fiduciary investment management services, and $52.4 billion for
                    which Hines provides third-party property-level services. The firm has 109 developments currently
                    underway around the world. Historically, Hines has developed, redeveloped or acquired 1,319
                    properties, totaling over 431 million square feet.
                  </p>
                </TextSection>
                <ResponsiveImage srcPath="/static/images/story/5_Hines/bg-story-hines-left" imgAlt="" />
                <TextSection>
                  <p className="text-body">
                    The firm’s current property and asset management portfolio includes 527 properties, representing
                    over 224 million square feet. With extensive experience in investments across the risk spectrum and
                    all property types, and a pioneering commitment to sustainability, Hines is one of the largest and
                    most-respected real estate organizations in the world. Visit&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.hines.com/">
                      www.hines.com
                    </a>
                    &nbsp;for more information.
                  </p>
                </TextSection>
              </InnerCol>
              <InnerCol>
                <ResponsiveImage srcPath="/static/images/story/5_Hines/bg-story-hines-right" imgAlt="" />
              </InnerCol>
            </MainCol>
          </Fade>
          <ScrollUp />
          <CopyrightFooter />
        </div>
      ) : (
        /*MOBILE*/
        <div>
          <Fade>
            <MobileHeading>Story</MobileHeading>
            <Heading>
              Hudson Square Properties is a joint venture of Trinity Church Wall Street and Norges Bank Real Estate
              Management with Hines, the operating partner, of a 12 building portfolio of approximately 6 million
              rentable square feet.
            </Heading>
          </Fade>
          <Fade>
            <BeforeAfter before={beforeAfterOne.before} after={beforeAfterOne.after} />
          </Fade>
          <Fade>
            <MainCol>
              <InnerCol>
                <TextSection>
                  <p className="text-body">
                    Trinity Church Wall Street has played a prominent role in lower Manhattan for more than 300 years.
                    Its history in the Hudson Square neighborhood dates back to the generous land grant given to the
                    church by Queen Anne in 1705. Today, Trinity owns 14 acres in the vibrant and growing neighborhood,
                    property that continues to provide resources for the church’s mission and ministries in New York
                    City and around the world.
                    <br />
                    <br />
                    In December 2015, Trinity and Norges Bank Real Estate Management formed a joint venture partnership
                    comprising 11 office buildings with 4.9 million square feet of commercial space in Hudson Square. In
                    April 2016, the joint venture selected Hines as the operating partner for the portfolio. The office
                    buildings on the properties are being redeveloped into a hub for creative industries and businesses
                    that are drawn by the energy of this vibrant neighborhood and the flexibility of the space.
                  </p>
                </TextSection>
                <ResponsiveImage
                  srcPath="/static/images/story/2_Hudson_Square/bg-story-hudson-square-mobile"
                  imgAlt=""
                />

                <TextSection>
                  <p className="text-body">
                    Over the last decade, the portfolio has invested significantly in energy and sustainability
                    improvements, including switching from using fuel oil as a heating source to cleaner burning natural
                    gas, installing modern HVAC control systems and automatic water and energy meters.
                    <br />
                    <br /> More recently, the portfolio has chosen to respond to the Global Real Estate Sustainability
                    Benchmark (GRESB), which assesses the sustainability performance of leading real estate portfolios
                    and assets worldwide. Assessment participants receive comparative business intelligence on where
                    they stand against their peers, a roadmap with the actions they can take to improve their
                    Environmental Social and Governance performance and a communication platform to engage with
                    investors.
                    <br />
                    <br /> Most recently, the entire portfolio is pursuing LEED Gold certification using the LEED
                    Performance Score program which is expected in mid-2019.
                    <br />
                    <br /> Individual Building Sustainability and Energy Efficiency Accomplishments 75 Varick Street:
                    LEED Silver certified, LEED Gold certification in progress 345&nbsp;Hudson&nbsp;Street: LEED Gold
                    certification
                  </p>
                </TextSection>
              </InnerCol>
            </MainCol>
          </Fade>
          <Fade>
            <BeforeAfter before={beforeAfterTwo.before} after={beforeAfterTwo.after} />
          </Fade>
          <Fade>
            <MainCol id="section-story-trinity">
              <InnerCol>
                <TextSection>
                  <h3 className="text-heading">TRINITY CHURCH WALL STREET</h3>
                  <p className="text-body">
                    “Trinity Church Wall Street has played a prominent role in lower Manhattan for more than 300 years.”
                  </p>
                </TextSection>
                <TextSection>
                  <h3 className="text-heading">ABOUT TRINITY CHURCH WALL STREET</h3>
                  <p className="text-body">
                    Trinity Church Wall Street is a growing and inclusive Episcopal parish that seeks to serve and heal
                    the world by building neighborhoods that live Gospel truths, generations of faithful leaders, and
                    sustainable communities. The parish is guided by its core values: faith, integrity, inclusiveness,
                    compassion, social justice, and stewardship. Members come from the five boroughs of New York City
                    and surrounding areas to form a racially, ethnically, and economically diverse congregation. More
                    than 20 worship services are offered every week at its historic sanctuaries, Trinity Church and St.
                    Paul’s Chapel, the cornerstones of the parish’s community life, worship, and mission, and online at
                    &nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.trinitywallstreet.org/">
                      trinitywallstreet.org
                    </a>
                    . The parish welcomes approximately 2.5 million visitors per year.
                  </p>
                </TextSection>
                <ResponsiveImage srcPath="/static/images/story/3_Trinity/bg-story-trinity-mobile" imgAlt="" />
              </InnerCol>
            </MainCol>
          </Fade>
          <Fade>
            <MainCol id="section-story-norges">
              <InnerCol>
                <TextSection>
                  <h3 className="text-heading">NORGES BANK REAL ESTATE MANAGEMENT</h3>
                  <p className="text-body">
                    “The fund owns direct real estate investments totaling nearly 800 assets across 13 countries.”
                  </p>
                </TextSection>
                <ResponsiveImage srcPath="/static/images/story/4_Norges/story-norges-banner-mobile" imgAlt="" />
                <TextSection>
                  <h3 className="text-heading">ABOUT NORGES BANK REAL ESTATE MANAGEMENT</h3>
                  <p className="text-body">
                    Norges Bank Real Estate Management manages approximately $27 billion in direct real estate
                    investments on behalf of the Norwegian Government Pension Fund Global, totaling $1,020 billion of
                    assets across equity, fixed income and real estate. The fund’s mission is to safeguard financial
                    wealth for future generations. Norges Bank Real Estate Management continues to invest in three
                    target asset classes – office, retail and logistics. Investments in office and retail are focused
                    across a limited number of global cities in Europe, the US and Asia that have key fundamentals
                    including transparency, liquidity, supply restrictions and the potential for economic growth.
                    Investments in logistics are located across Europe and the US with a strategic focus on proximity to
                    large metropolitan markets and key global distribution networks. The fund owns direct real estate
                    investments totaling nearly 800 assets across 13 countries. In the US, the fund owns direct real
                    estate investments across 22 million square feet of office and retail properties in New York City,
                    Boston, Washington DC and San Francisco. Visit&nbsp;
                    <a href="https://www.nbim.no/" target="_blank" rel="noopener noreferrer">
                      https://www.nbim.no/
                    </a>
                    &nbsp;for more information.
                  </p>
                </TextSection>
                <ResponsiveImage srcPath="/static/images/story/4_Norges/bg-story-norges-mobile" imgAlt="" />
              </InnerCol>
            </MainCol>
          </Fade>
          <Fade>
            <MainCol id="section-story-hines">
              <InnerCol>
                <TextSection>
                  <h3 className="text-heading">HINES</h3>
                  <p className="text-body">
                    “Hines is one of the largest and most-respected real estate organizations in the world.”
                  </p>
                </TextSection>
                <ResponsiveImage srcPath="/static/images/story/5_Hines/story-hines-banner-mobile" imgAlt="" />
                <TextSection>
                  <h3 className="text-heading">ABOUT HINES</h3>
                  <p className="text-body">
                    Hines is a privately owned global real estate investment firm founded in 1957 with a presence in 207
                    cities in 24 countries. Hines has approximately $116.4 billion of assets under management, including
                    $64 billion for which Hines provides fiduciary investment management services, and $52.4 billion for
                    which Hines provides third-party property-level services. The firm has 109 developments currently
                    underway around the world. Historically, Hines has developed, redeveloped or acquired 1,319
                    properties, totaling over 431 million square feet. The firm’s current property and asset management
                    portfolio includes 527 properties, representing over 224 million square feet. With extensive
                    experience in investments across the risk spectrum and all property types, and a pioneering
                    commitment to sustainability, Hines is one of the largest and most-respected real estate
                    organizations in the world. Visit&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.hines.com/">
                      www.hines.com
                    </a>
                    &nbsp;for more information.
                  </p>
                </TextSection>
                <ResponsiveImage srcPath="/static/images/story/5_Hines/bg-story-hines-mobile" imgAlt="" />
              </InnerCol>
            </MainCol>
          </Fade>
          <ScrollUp />
          <CopyrightFooter />
        </div>
      )
    }
  </Context.Consumer>
);

export default Story;
