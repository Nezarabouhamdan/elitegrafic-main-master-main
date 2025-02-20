// ServiceOfferings.js
import React from "react";
import {
  SectionWrapper,
  Subtitle,
  Title,
  GridOffer,
} from "./Styles";
import CardItem from "./CardItem";

// Example card data – you can expand or pass as props
const cards = [
  {
    id: 1,
    title: "uI/uX creative design",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    contentPadding: { pr: "13rem" },
    circleBgImage:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop",
    circleClipPath: "circle(calc(6.25rem + 7.5vw) at 100% 100%)",
  },
  {
    id: 2,
    title: "visual graphic design",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    contentPadding: { pl: "12rem" },
    circleBgImage:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop",
    circleClipPath: "circle(calc(6.25rem + 7.5vw) at 0% 100%)",
  },
  {
    id: 3,
    title: "strategy & digital marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    contentPadding: { pr: "11rem" },
    circleBgImage:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
    circleClipPath: "circle(calc(6.25rem + 7.5vw) at 100% 0%)",
  },
  {
    id: 4,
    title: "effective business growth",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    contentPadding: { pl: "12rem" },
    circleBgImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    circleClipPath: "circle(calc(6.25rem + 7.5vw) at 0% 0%)",
  },
];

const ServiceOfferings = () => {
  return (
    <SectionWrapper>
      <Subtitle>
        what we're offering{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          style={{ color: "#6366f1", marginLeft: "0.75rem", width: "1.5rem", height: "1.5rem" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Subtitle>
      <Title>
        Services Built Specifically for your Business
      </Title>
      <GridOffer>
        {cards.map((card) => (
          <CardItem key={card.id} {...card} />
        ))}
      </GridOffer>
    </SectionWrapper>
  );
};

export default ServiceOfferings;
