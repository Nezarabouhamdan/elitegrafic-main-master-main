// CardItem.js
import React from "react";
import {
  Card,
  Circle,
  CardContentWrapper,
  CardTitle,
  CardParagraph,
} from "./Styles";

const CardItem = ({
  title,
  description,
  circleBgImage,
  circleClipPath,
  contentPadding, // object like { pl: "12rem" } or { pr: "13rem" }
}) => {
  return (
    <Card>
      {/* Background circle element */}
      <Circle bgImage={circleBgImage} clipPath={circleClipPath} />
      {/* Content inside card */}
      <CardContentWrapper {...contentPadding}>
        <CardTitle>{title}</CardTitle>
        <CardParagraph>{description}</CardParagraph>
      </CardContentWrapper>
      {/* Optionally, you can add an Icon component here */}
    </Card>
  );
};

export default CardItem;
