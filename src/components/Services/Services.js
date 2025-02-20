import React, { useEffect } from "react";
import { Button, Heading, TextWrapper } from "../../Globalstyles";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingContainer,
  PricingCardInfo,
  PricingCardPlan,
  PricingCardCost,
  PricingCardFeatures,
  PricingCardText,
  PricingCardFeature,
  PricingCard,
} from "./ServicesStyles";
import { pricingData } from "../../data/PricingData";
import NumberCounter from "number-counter";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
function Services() {
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
    <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
      <PricingSection id="services">
        <PricingWrapper ref={ref}>
          <Heading
            initial={initial}
            transition={{ delay: 0.3, duration: 0.5 }}
            animate={animation}
          >
            Pick Your Needed Services
          </Heading>

          <TextWrapper
            mb="1.4rem"
            weight="600"
            size="1.1rem"
            color="white"
            align="center"
            initial={initial}
            transition={{ delay: 0.5, duration: 0.5 }}
            animate={animation}
          >
            Create, maintain with Elite Grafic.
          </TextWrapper>
          <PricingContainer>
            {pricingData.map((card, index) => (
              <PricingCard
                initial={initial}
                transition={{
                  delay: index - 0.5,
                  duration: 0.5,
                }}
                animate={animation}
                key={index}
              >
                <PricingCardInfo>
                  <PricingCardPlan>{card.title}</PricingCardPlan>
                  <PricingCardCost>{card.description}</PricingCardCost>
                  <PricingCardFeatures>
                    {card.features.map((feature, index) => (
                      <PricingCardFeature key={index}>
                        {feature}
                      </PricingCardFeature>
                    ))}
                  </PricingCardFeatures>
                  <Button>Find More</Button>
                </PricingCardInfo>
              </PricingCard>
            ))}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Services;
