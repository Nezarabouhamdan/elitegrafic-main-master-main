// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Import fonts */
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&display=swap");

  :root {
    --primary-text-very-dark: hsl(238, 29%, 16%);
    --primary-text-soft-red: hsl(14, 88%, 65%);
    --primary-bg-violet: hsl(273, 75%, 66%);
    --primary-bg-blue: hsl(240, 73%, 65%);
    --neutral-text-dark: hsl(240, 6%, 50%);
    --divider-light: hsl(240, 5%, 91%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Playfair Display', serif;
    font-size: 12px;
    width: 100%;
    height: 100vh;
  }
`;
