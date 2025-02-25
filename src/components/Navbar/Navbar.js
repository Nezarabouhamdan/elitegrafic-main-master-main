

import React, { useState, useEffect } from "react";
import {  FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { NavLink, Link } from "react-router-dom";
import "./Nav.css";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  Text,
} from "./NavbarStyles.js";

import { useLocation, useHistory } from "react-router-dom";
import logo from '../../assets/logo-light.png';
const Navbar = () => {
  var x = "s";
  const [lang, setlang] = useState();
  var tabE = [
    "Home",
    "Services",
    "Project Management",
    "Development Planning",
    "Architecture",
    'Building Contracting',
    'Engineering Consultancy',
    "Interior Design",
    "Landscaping",
    "Real Estate",
    "Fit-Out",
    "Projects",
    "Contact us",
    "About us",   
     "FAQ",
    "Language",
    "Arabic",
    "English",
  ];
  var tabA = [
    "الرئيسية",
    "الخدمات",
    "إدارة مشاريع",
    "مخطط تطوير",
    'المعمارية',
    "عقود بناء",
    "استشارات هندسية",
    " تصميم داخلي",
    " المناظر الطبيعية",
    "حلول عقارية",
    "التجهيز الداخلي",
    "المشاريع",
    " معناالتواصل",
    "نبذة عنا"
    ,'الاسئلة الشائعه',
    "اللغة",
    "العربية",
    "الانجليزية",
  ];
  const [show, setShow] = useState(false);
  const [tabs, setTabs] = useState(tabE);

  let history = useHistory();
  let location = useLocation();

  const handleClick = () => {
    setShow(!show);
  };
  const [lng, setlng] = useState(localStorage.getItem("lng"));
  const checklng = () => {
    if (lng == "ar") {
      console.log("sssssss");
      setTabs(tabA);
    } else {
    }
  };
  const chgange_arb = () => {
    localStorage.setItem("lng", "ar");
    window.location.reload();
  };
  const change_eng = () => {
    localStorage.setItem("lng", "eng");
    window.location.reload();
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeMobileMenu = (to, id) => {
    if (id && location.pathname === "/") {
      scrollTo(id);
    }

    history.push(to);
    setShow(false);
  };
  useEffect(() => {
    checklng();
  }, []);

  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setShow(false);
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
  const toggleSubmenu2 = () => {
    setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
  };
  let boxClassSubMenu2 = ["sub__menus"];
  if (isMenuSubMenu2) {
    boxClassSubMenu2.push("sub__menus__Active");
  } else {
    boxClassSubMenu2.push("");
  }

  const [isMenuSubMenu3, setMenuSubMenu3] = useState(false);
  const toggleSubmenu3 = () => {
    setMenuSubMenu3(isMenuSubMenu3 === false ? true : false);
  };
  let boxClassSubMenu3 = ["sub__menus"];
  if (isMenuSubMenu3) {
    boxClassSubMenu3.push("sub__menus__Active");
  } else {
    boxClassSubMenu3.push("");
  }
  const [isMenuSubMenu4, setMenuSubMenu4] = useState(false);
  const toggleSubmenu4 = () => {
    setMenuSubMenu4(isMenuSubMenu4 === false ? true : false);
  };
  let boxClassSubMenu4 = ["sub__menus"];
  if (isMenuSubMenu4) {
    boxClassSubMenu4.push("sub__menus__Active");
  } else {
    boxClassSubMenu4.push("");
  }
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon src={logo} />
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {show ? <FaTimes /> : <CgMenuRight />}
        </MobileIcon>
        <NavMenu show={show}>
          <NavItem>
            <ul className={boxClass.join(" ")}>
              <li className="menu-item">
                <NavLink
                  exact
                  activeClassName="is-active"
                  onClick={toggleClass}
                  to={`/`}
                >
                  {" "}
                  <Text> {tabs[0]} </Text>
                </NavLink>
              </li>
              <li
                onClick={toggleSubmenu}
                className="menu-item sub__menus__arrows"
              >
                {" "}
                <Link to="/service">
                  {" "}
                  <Text>{tabs[1]}</Text>{" "}
                </Link>
                <ul className={boxClassSubMenu.join(" ")}>
                  <li>
                    {" "}
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/ProjectManagement`}
                    >
                      {" "}
                      <Text> {tabs[2]} </Text>{" "}
                    </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/Developmentplaning`}
                    >
                      {" "}
                      <Text> {tabs[3]} </Text>{" "}
                    </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/Architecture`}
                    >
                      {" "}
                      <Text> {tabs[4]} </Text>
                    </NavLink>{" "}
                  </li>    <li>
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/Bulidingcontracting`}
                    >
                      {" "}
                      <Text> {tabs[5]} </Text>
                    </NavLink>{" "}
                  </li>    <li>
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/EngineeringConsultancy`}
                    >
                      {" "}
                      <Text> {tabs[6]} </Text>
                    </NavLink>{" "}
                  </li>    <li>
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/InteriorDesign`}
                    >
                      {" "}
                      <Text> {tabs[7]} </Text>
                    </NavLink>{" "}
                  </li>    <li>
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/Landscaping`}
                    >
                      {" "}
                      <Text> {tabs[8]} </Text>
                    </NavLink>{" "}
                  </li>    <li>
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/realestate`}
                    >
                      {" "}
                      <Text> {tabs[9]} </Text>
                    </NavLink>{" "}
                  </li>  
                  
                    <li>
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/fit-out`}
                    >
                      {" "}
                      <Text> {tabs[10]} </Text>
                    </NavLink>{" "}
                  </li>
                </ul>
              </li>{" "}
              <li className="menu-item">
                <NavLink
                  exact
                  activeClassName="is-active"
                  onClick={toggleClass}
                  to={`/PROJECTS`}
                >
                  {" "}
                  <Text> {tabs[11]} </Text>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  exact
                  activeClassName="is-active"
                  onClick={toggleClass}
                  to={`/Contact`}
                >
                  {" "}
                  <Text> {tabs[12]} </Text>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  exact
                  activeClassName="is-active"
                  onClick={toggleClass}
                  to={`/ABOUTUS`}
                >
                  {" "}
                  <Text> {tabs[13]} </Text>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  exact
                  activeClassName="is-active"
                  onClick={toggleClass}
                  to={`/FAQ`}
                >
                  {" "}
                  <Text> {tabs[14]} </Text>
                </NavLink>
              </li>
             
              <li
                onClick={toggleSubmenu4}
                className="menu-item sub__menus__arrows"
              >
                {" "}
                <Link to="#">
                  {" "}
                  <Text> {tabs[15]} </Text>{" "}
                </Link>
                <ul className={boxClassSubMenu4.join(" ")}>
                  <li>
                    {" "}
                    <NavLink
                      onClick={chgange_arb}
                      activeClassName="is-active"
                      to={"/"}
                    >
                      {" "}
                      <Text>{tabs[16]} </Text>
                    </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink
                      onClick={change_eng}
                      activeClassName="is-active"
                      to={`/`}
                    >
                      {" "}
                      <Text>{tabs[17]} </Text>
                    </NavLink>{" "}
                  </li>
                </ul>
              </li>
            </ul>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
