"use client";
import * as React from "react";
import styled from "styled-components";

export const CallToAction = () => {
  return (
    <Button
      role="button"
      aria-label="Book now"
      onClick={() => {
        /* Add booking functionality */
      }}
    >
      BOOK NOW
    </Button>
  );
};

const Button = styled.button`
  border-radius: 6px;
  background-color: rgba(102, 161, 9, 1);
  margin-top: 43px;
  padding: 12px 36px;
  gap: 10px;
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(92, 145, 8, 1);
  }

  &:focus {
    outline: 2px solid rgba(102, 161, 9, 0.5);
    outline-offset: 2px;
  }

  @media (max-width: 991px) {
    padding: 12px 20px;
    margin-top: 40px;
  }
`;
