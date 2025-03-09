"use client";

import { useState } from "react";
import CountUp from "react-countup";

export default function Counter() {
  const [Counter, setCounter] = useState([
    {
      id: "counter1",
      cardClass: "single-count",
      iconClass: "fa fa-globe",
      title: "Countries",
      number: "50",
    },
    {
      id: "counter2",
      cardClass: "single-count",
      iconClass: "fa fa-user-circle",
      title: "Clients",
      number: "110",
    },
    {
      id: "counter3",
      cardClass: "single-count",
      iconClass: "fa fa-briefcase",
      title: "Projects",
      number: "260",
    },
    {
      id: "counter4",
      cardClass: "single-count last",
      iconClass: "fa fa-headphones",
      title: "Team members",
      number: "20",
    },
  ]);

  return (
    <>
      {Counter.map((singleCounter) => (
        <div className="col-lg-3 col-md-3 col-12" key={singleCounter.id}>
          <div className={singleCounter.cardClass}>
            <i className={singleCounter.iconClass}></i>
            <div className="main-count">
              <h3>{singleCounter.title}</h3>
              <h6>
                <span className="counter">
                  <CountUp
                    end={singleCounter.number}
                    delay={1}
                    enableScrollSpy
                  />
                </span>
                +
              </h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
