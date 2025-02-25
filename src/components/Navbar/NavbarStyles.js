import styled from "styled-components";
import { Container } from "../../Globalstyles";
import { keyframes } from "styled-components";

import { Link } from "react-router-dom";
const rotate = keyframes`
from{    transform: scale3d(0, 0, 0);
},
  to {
    transform: scale3d(0, 0, 0);
  }
`;
export const Nav = styled.nav`
  /* 50% transparent */
  font-size: 10px;

  height: 80px;
  position: absolute;
  top: 0;
  animation: ${rotate} 2s;

  z-index: 50;
  width: 95%;
`;

export const NavbarContainer = styled.div`
  display: flex;

  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  margin-left: 20px;
  margin-top: 10px;
  z-index: 50;
`;

export const NavIcon = styled.img`
  width: 5rem;
  @media screen and (max-width: 960px) {  margin-top: 18px;

    width: 3rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  width: 100%;
  margin-right: 0px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transform: translateY(${({ show }) => (show ? "0" : "-10px")});
    transition: opacity 0.5s ease;
    background-color: #4f4c4c;
  }

  > li:first-child {
    margin-left: auto;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;
export const Li = styled.li`
  display: inline-flex;
  list-style: none;
  margin: 0px auto 0;
  padding: 0;
  float: right;
  z-index: 7;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0px 0;
    padding: 0;
    float: center;
    z-index: 7;
  }
`;

export const NavLinks = styled.span`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 0rem;
  height: 100%;

  &:hover {
    color: #c8c9d8;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;
export const Text = styled.h3`
  font-size: 15px;
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
