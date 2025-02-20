// OfferingsStyles.js
import styled, { css } from "styled-components";

// Helper for media queries (mimics the SCSS mixin mQ)
export const mq = (minWidth) => `@media screen and (min-width: ${minWidth})`;

// SECTION WRAPPER (equivalent to <section> with Tailwind classes)
export const SectionWrapper = styled.section`
  min-height: 100vh;
  background-color: #111827; /* Tailwind bg-gray-900 */
  text-align: center;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mq("1280px")} {
    padding-left: 0;
    padding-right: 0;
  }
`;

// Subtitle (the span on top)
export const Subtitle = styled.span`
  color: #9ca3af; /* text-gray-400 */
  font-size: 1.125rem; /* text-lg */
  max-width: 32rem; /* max-w-lg */
  margin: 0 auto 0.5rem auto; /* mx-auto, mb-2 */
  text-transform: capitalize;
  display: flex;
  align-items: center;
`;

// Title (the h1)
export const Title = styled.h1`
  color: #fff;
  font-size: 2.25rem; /* text-4xl */
  font-weight: 600; /* font-semibold */
  max-width: 48rem; /* max-w-3xl */
  margin: 0 auto 4rem;
  line-height: 1.375; /* leading-snug */

  @media (min-width: 768px) {
    font-size: 3rem; /* md:text-5xl */
  }
  @media (min-width: 1280px) {
    font-size: 3.75rem; /* xl:text-6xl */
  }
`;

// Grid container for the cards
export const GridOffer = styled.div`
  display: grid;
  text-align: left;
  gap: 1.25rem; /* gap-5 */
  max-width: 64rem; /* max-w-5xl */
  margin: 0 auto;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

/* REUSABLE CARD COMPONENT */
export const Card = styled.div`
  position: relative;
  background-color: #1f2937; /* Tailwind bg-gray-800 */
  padding: 2.5rem; /* p-10 */
  overflow: hidden;
  cursor: pointer;

  /* Pseudo-element overlay */
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    transition: 0.6s;
    z-index: 0;
    background-color: #4f46e5;
  }

  /* Hover effect on card */
  &:hover {
    box-shadow: 0.063rem 0.063rem 1.25rem 0.375rem rgba(0, 0, 0, 0.53);
  }
  &:hover::before {
    clip-path: circle(110vw at 100% 100%);
  }
  &:hover p {
    color: #fff;
  }

  /* Optional: transition for text inside */
  p {
    transition: 0.8s;
    color: #9ca3af; /* text-gray-400 */
  }
`;

/* The Circle background element within each card.
   Instead of relying on nth-child selectors, we pass bgImage and clipPath as props.
*/
export const Circle = styled.div`
  ${mq("62.5rem")} {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  background: url(${(props) => props.bgImage}) no-repeat center/cover;
  clip-path: ${(props) => props.clipPath};
`;

/* Content wrapper inside the card. Accepts padding props (on large screens) */
export const CardContentWrapper = styled.div`
  position: relative;
  /* On large screens, use provided padding */
  @media (min-width: 1024px) {
    padding-right: ${(props) => props.pr || "0"};
    padding-left: ${(props) => props.pl || "0"};
  }
`;

/* Card Title styled as an h2 */
export const CardTitle = styled.h2`
  text-transform: capitalize;
  color: #fff;
  margin-bottom: 1rem; /* mb-4 */
  font-size: 1.5rem; /* text-2xl */
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  @media (min-width: 1280px) {
    font-size: 1.875rem; /* xl:text-3xl */
  }
`;

/* Card Paragraph */
export const CardParagraph = styled.p`
  color: #9ca3af; /* text-gray-400 */
`;
