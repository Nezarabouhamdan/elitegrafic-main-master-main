import styled from "styled-components";
import { Container } from "../../Globalstyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0); /* 50% transparent */
  margin-bottom: -80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  z-index: 50;
  width: 100%;

  transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
justify-content: space-around;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;
  display: flex;
  width: 500px;
  align-items: center;
  z-index: 50;
  @media screen and (max-width: 968px) {
    font-size: 0.8rem;
  } ;
`;

export const NavIcon = styled.img`
  margin-left: 0rem;
  margin-right: 0rem;
  margin-top: 0rem;

  width: 4.5rem;
  height: 2rem;
  @media screen and (max-width: 968px) {
    margin-left: 0rem;
    margin-right: 0rem;
    margin-top: 0rem;

    width: 3rem;
    height: 3rem;
  }
`;
export const NavName = styled.img`
  margin-left: -2rem;
  margin-right: 1rem;
  margin-top: 0rem;

  width: 8rem;
  height: 5rem;
  @media screen and (max-width: 968px) {
    margin-left: 0rem;
    margin-right: 1rem;
    margin-top: 0rem;

    width: 3rem;
    height: 3rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;

  @media screen and (max-width: 968px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: black;
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
  width: 80%;
    margin-left: -2800px;

  @media screen and (max-width: 968px) {
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
    background-color: black;
  }

  > li:first-child {
    margin-left: auto;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;

  @media screen and (max-width: 968px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled.span`
  color: white;
  display: flex;
  align-items: center;
  font-family: "Inter";
  text-decoration: none;
  padding: 0.5rem 1rem;font-size:14px;
  font-weight:400;
  height: 100%;

  z-index: 1;
  &:after {
    background-color: #fff;
    color: #c8c9d8;
  }
  &:active {
    background-color: #fff;
    color: #c8c9d8;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 968px) {
    text-align: center;
    padding: 2rem;border-width: thin;
    border-style: solid ;
    background-color: black;
border-color: white;

    width: 100%;
    display: table;
color:#66a109;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
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
