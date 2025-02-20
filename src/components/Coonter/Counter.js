import React from "react";
import { Desc, Item, Number, Row } from "./Counterstyles";
import { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import NumberCounter from "number-counter";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import "../../App.css";

function Counter() {
  const initial = { opacity: 0, y: 10 };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      console.log("sss");
      animation.start({
        opacity: 1,
        y: 1,
      });
    }
  }, [inView, animation]);

  return (
    <div ref={ref}>
      <Row
        initial={initial}
        transition={{ delay: 0.3, duration: 0.5 }}
        animate={animation}
        id="statics"
      >
        <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
          {({ isVisible }) => (
            <Item>
              {isVisible ? (
                <NumberCounter
                  end={85}
                  delay={2.5}
                  className="increment"
                  // preFix="Up revenue:"
                  postFix="+"
                />
              ) : null}{" "}
              <Desc> Projects</Desc>
            </Item>
          )}
        </VisibilitySensor>
        <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
          {({ isVisible }) => (
            <Item>
              {isVisible ? (
                <NumberCounter
                  end={60}
                  delay={2.5}
                  className="increment"
                  // preFix="Up revenue:"
                  postFix="+"
                />
              ) : null}{" "}
              <Desc> Customers</Desc>
            </Item>
          )}
        </VisibilitySensor>
        <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
          {({ isVisible }) => (
            <Item>
              {isVisible ? (
                <NumberCounter
                  end={40}
                  delay={2.5}
                  className="increment"
                  // preFix="Up revenue:"
                  postFix="+"
                />
              ) : null}{" "}
              <Desc> Employees</Desc>
            </Item>
          )}
        </VisibilitySensor>
        <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
          {({ isVisible }) => (
            <Item>
              {isVisible ? (
                <NumberCounter
                  end={90}
                  delay={2.5}
                  className="increment"
                  // preFix="Up revenue:"
                  postFix="+"
                />
              ) : null}{" "}
              <Desc> Country</Desc>
            </Item>
          )}
        </VisibilitySensor>
      </Row>
    </div>
  );
}

export default Counter;
