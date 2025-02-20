import React from "react";
import {
  Colored,
  Head,
  Head2,
  Head3,
  Heroimg,
  Herosection,
  Image,
  Imagediv,
  Textdiv,
  Underline,
  Underlinev,
} from "./Herostyles";
import img from "../../assets/Projects.jpg";
import img1 from "../../assets/icons8-mesh-100.png";
import { Button, Button2, Row } from "../../Globalstyles";
import { useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import NumberCounter from "number-counter";
import '../../App.css'

import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
export default function Hero() {
  const initial = { opacity: 0, y: -20 };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (!inView) {
      console.log("sss");
      animation.start({
        opacity: 1,
        y: 1,
      });
    }
  }, [inView, animation]);
  return (
    <Herosection ref={ref}>
      <Heroimg src={img} />
      <Textdiv style={{marginTop:'200px'}}>
<Head2><p>Designs That Speak: </p></Head2>
<br></br>
<Underline style={{marginTop:'10px'}}></Underline>
<br></br>
<Head3 > <p style={{}}>Our Featured Works </p>
</Head3>
     </Textdiv>     <Textdiv><Row>

        <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
        {({ isVisible }) => (
                  <div>
                    {isVisible ? (
                      <NumberCounter
                        end={10}
                        delay={1.5}
                        className="increment"
                        // preFix="Up revenue:"
                        postFix=""
                      />
                    ) : null}{" "}
                    <p style={{fontFamily:'inter ',marginTop:'20px',fontSize:'30px'}}> Years Of Experience
                    </p>
                  </div>
                )}
        </VisibilitySensor><Underlinev></Underlinev>
        <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
        {({ isVisible }) => (
                  <div>
                    {isVisible ? (
                      <NumberCounter
                        end={100}
                        delay={2.2}
                        className="increment"
                        // preFix="Up revenue:"
                        postFix="%"
                      />
                    ) : null}{" "}
                    <p style={{fontFamily:'inter ',marginTop:'20px',fontSize:'30px'}}> Quality</p>
                  </div>
                )}
        </VisibilitySensor>

        <Underlinev></Underlinev>
     <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
        {({ isVisible }) => (
                  <div>
                    {isVisible ? (
                      <NumberCounter
                        end={200}
                        delay={3}
                        className="increment"
                        // preFix="Up revenue:"
                        postFix=""
                      />
                    ) : null}{" "}
                    <p style={{ fontWeight: '1000',
  fontFamily: "Inter ExtraLight",marginTop:'20px',fontSize:'30px'}}> Happy Clients
                    </p>
                  </div>
                )}
        </VisibilitySensor>
     </Row>
     </Textdiv>
    </Herosection>
  );
}
