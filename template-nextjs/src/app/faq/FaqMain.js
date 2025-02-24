"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import SectionTitle from "@/components/SectionTitle";

import FaqImg from "../../../public/images/faq-img.png";

export default function FaqMain() {
  return (
    <>
      <section className="faq-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Faq"
                title="How Can We Help You?"
                description=" All the lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet."
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-7 col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <div className="faq-inner">
                <div className="faq-content">
                  <Accordion className="panel-group" preExpanded={"a"}>
                    {/* Single Faq */}
                    <AccordionItem className="panel panel-default" uuid="a">
                      <AccordionItemHeading className="faq-heading">
                        <AccordionItemButton className="faq-title">
                          <span>1</span> How do i get finance support for my
                          business?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="faq-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vel neque tincidunt ut eget id nunc, ipsum.
                          Velit vitae amet, non vestibulum, pulvinar dictum
                          turpis malesuada. Ullamcorper tempor porta felis
                          etiam. Nulla feugiat et feugiat etiam. Nulla massa
                          nulla amet lacus. Sed sit risus quis faucibus dictum.
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>

                    {/* Single Faq */}
                    <AccordionItem className="panel panel-default" uuid="b">
                      <AccordionItemHeading className="faq-heading">
                        <AccordionItemButton className="faq-title">
                          <span>2</span> How do i knew about any better
                          opportunity?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="faq-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vel neque tincidunt ut eget id nunc, ipsum.
                          Velit vitae amet, non vestibulum, pulvinar dictum
                          turpis malesuada. Ullamcorper tempor porta felis
                          etiam. Nulla feugiat et feugiat etiam. Nulla massa
                          nulla amet lacus. Sed sit risus quis faucibus dictum.
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>

                    {/* Single Faq */}
                    <AccordionItem className="panel panel-default" uuid="c">
                      <AccordionItemHeading className="faq-heading">
                        <AccordionItemButton className="faq-title">
                          <span>3</span> How to invite people in any active
                          project?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="faq-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vel neque tincidunt ut eget id nunc, ipsum.
                          Velit vitae amet, non vestibulum, pulvinar dictum
                          turpis malesuada. Ullamcorper tempor porta felis
                          etiam. Nulla feugiat et feugiat etiam. Nulla massa
                          nulla amet lacus. Sed sit risus quis faucibus dictum.
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>

                    {/* Single Faq */}
                    <AccordionItem className="panel panel-default" uuid="d">
                      <AccordionItemHeading className="faq-heading">
                        <AccordionItemButton className="faq-title">
                          <span>4</span> What is the average cost for team
                          project yearly?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="faq-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vel neque tincidunt ut eget id nunc, ipsum.
                          Velit vitae amet, non vestibulum, pulvinar dictum
                          turpis malesuada. Ullamcorper tempor porta felis
                          etiam. Nulla feugiat et feugiat etiam. Nulla massa
                          nulla amet lacus. Sed sit risus quis faucibus dictum.
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-12 wow animate__fadeInRight"
              data-wow-duration="1.2s"
            >
              {/* <!-- Faq-Image -->	 */}
              <div className="faq-image">
                <Image src={FaqImg} alt="#" width={445} height={510} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
