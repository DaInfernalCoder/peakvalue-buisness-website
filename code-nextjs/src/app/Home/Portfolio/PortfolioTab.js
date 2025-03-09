"use client";

import SinglePortfolio from "@/components/SinglePortfolio";

import PortfolioImg1 from "../../../../public/images/portfolio/work-1.jpg";
import PortfolioImg2 from "../../../../public/images/portfolio/work-2.jpg";
import PortfolioImg3 from "../../../../public/images/portfolio/work-3.jpg";
import PortfolioImg4 from "../../../../public/images/portfolio/work-4.jpg";
import PortfolioImg5 from "../../../../public/images/portfolio/work-5.jpg";
import PortfolioImg6 from "../../../../public/images/portfolio/work-6.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function PortfolioTab() {
  return (
    <>
      <Tabs>
        <div className="row">
          <div className="col-12">
            <TabList
              id="portfolio-nav"
              className="project-nav tr-list list-inline cbp-l-filters-work"
            >
              <Tab>All</Tab>
              <Tab>Development</Tab>
              <Tab>UI/UX</Tab>
              <Tab>Branding</Tab>
              <Tab>SEO</Tab>
              <Tab>wordpress</Tab>
            </TabList>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="portfolio-main">
              <TabPanel>
                <div id="portfolio-item" className="portfolio-item-active">
                  <SinglePortfolio
                    image={PortfolioImg1}
                    title="Art & Studio"
                    category="UI/UX, Branding"
                  />
                  <SinglePortfolio
                    image={PortfolioImg2}
                    title="Digital Media"
                    category="Development, Seo"
                  />
                  <SinglePortfolio
                    image={PortfolioImg3}
                    title="Latest Bootstrap"
                    category="Development, Seo"
                  />
                  <SinglePortfolio
                    image={PortfolioImg4}
                    title="Fully Responsive"
                    category="Seo, Wordpress"
                  />
                  <SinglePortfolio
                    image={PortfolioImg5}
                    title="Quality Coding"
                    category="Development, Wordpress"
                  />
                  <SinglePortfolio
                    image={PortfolioImg6}
                    title="Easy to Customize"
                    category="UI/UX, Development"
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div id="portfolio-item" className="portfolio-item-active">
                  <SinglePortfolio
                    image={PortfolioImg2}
                    title="Digital Media"
                    category="Development, Seo"
                  />
                  <SinglePortfolio
                    image={PortfolioImg3}
                    title="Latest Bootstrap"
                    category="Development, Seo"
                  />
                  <SinglePortfolio
                    image={PortfolioImg5}
                    title="Quality Coding"
                    category="Development, Wordpress"
                  />
                  <SinglePortfolio
                    image={PortfolioImg6}
                    title="Easy to Customize"
                    category="UI/UX, Development"
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div id="portfolio-item" className="portfolio-item-active">
                  <SinglePortfolio
                    image={PortfolioImg1}
                    title="Art & Studio"
                    category="UI/UX, Branding"
                  />
                  <SinglePortfolio
                    image={PortfolioImg6}
                    title="Easy to Customize"
                    category="UI/UX, Development"
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div id="portfolio-item" className="portfolio-item-active">
                  <SinglePortfolio
                    image={PortfolioImg1}
                    title="Art & Studio"
                    category="UI/UX, Branding"
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div id="portfolio-item" className="portfolio-item-active">
                  <SinglePortfolio
                    image={PortfolioImg2}
                    title="Digital Media"
                    category="Development, Seo"
                  />
                  <SinglePortfolio
                    image={PortfolioImg3}
                    title="Latest Bootstrap"
                    category="Development, Seo"
                  />
                  <SinglePortfolio
                    image={PortfolioImg4}
                    title="Fully Responsive"
                    category="Seo, Wordpress"
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div id="portfolio-item" className="portfolio-item-active">
                  <SinglePortfolio
                    image={PortfolioImg4}
                    title="Fully Responsive"
                    category="Seo, Wordpress"
                  />
                  <SinglePortfolio
                    image={PortfolioImg5}
                    title="Quality Coding"
                    category="Development, Wordpress"
                  />
                </div>
              </TabPanel>
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
}
