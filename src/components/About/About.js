import React, { useEffect } from "react";
import { About, Aboutimg, Container, Desc, Head, Hint } from "./Aboutstyles";
import i from "../../assets/Group 31341 (1).png";
import { Row } from "../Coonter/Counterstyles";
import { Button } from "../../Globalstyles";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
function Aboutus() {
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
    <Container ref={ref} id="about">
      <About>
        <Aboutimg
          initial={initial}
          transition={{ delay: 0.3, duration: 0.5 }}
          animate={animation}
          src={i}
        />
      </About>
      <About>
        <Hint
          initial={initial}
          transition={{ delay: 0.5, duration: 0.5 }}
          animate={animation}
        >
          ABOUT US
        </Hint>
        <Head
          initial={initial}
          transition={{ delay: 0.7, duration: 0.5 }}
          animate={animation}
        >
          Media, Graphic design, Web design and below the line communication
        </Head>
        <Desc
          initial={initial}
          transition={{ delay: 0.9, duration: 0.5 }}
          animate={animation}
        >
          {" "}
          Throughout the years we specialized in the development of web and app
          applications beside to all graphic design services . We service
          customers throughout Europe and Middle East , etc.
        </Desc>
        <Button
          initial={initial}
          transition={{ delay: 1.2, duration: 0.5 }}
          animate={animation}
          back="a"
        >
          Find More
        </Button>
      </About>
    </Container>
  );
}

export default Aboutus;
