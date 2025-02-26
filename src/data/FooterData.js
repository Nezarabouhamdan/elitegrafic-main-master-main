import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
  {
    name: "Facebook",
    icon: iconStyle(FaFacebook),
    link: "https://www.facebook.com/Khales.ae/",

  },
  {
    name: "Instagram",
    icon: iconStyle(FaInstagram),
    link: "https://www.instagram.com/khales.ae/",
  },
  {
    name: "Pinterest",
    icon: iconStyle(FaPinterest),
    link: "https://www.pinterest.com/khalesae/",

  },
  {
    name: "Twitter",
    icon: iconStyle(FaTwitter),
    link: "https://www.linkedin.com/company/khales-ae/posts/?feedView=all",

  },
  {
    name: "LinkedIn",
    icon: iconStyle(FaLinkedin),
    link: "https://www.linkedin.com/company/khales-ae/posts/?feedView=all",

  },
];

export const footerData = [
  {
    title: "Main",
    links: ["Blog", "FAQs", "Support", "About us"],
  },
  {
    title: "Product",
    links: ["Login", "Personal", "Business", "Team"],
  },
  {
    title: "Press",
    links: ["Logos", "Events", "Stories", "Office"],
  },
  {
    title: "Legal",
    links: ["GDPR", "Privacy Policy", "Terms of Service", "Disclaimer"],
  },
];
