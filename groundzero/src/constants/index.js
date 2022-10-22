/* This file contains list of static texts that will be displayed in the web page. */

import { groundzero, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "timeline",
    title: "Timeline",
  },
  {
    id: "problems",
    title: "Problems",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const timeline = [
  {
    id: "timeline-1",
    icon: registration,
    title: "Registration",
    content:
      "January - March 2023",
  },
  {
    id: "timeline-2",
    icon: problemStatement,
    title: "Problem Statements Released",
    content:
      "March 2023",
  },
  {
    id: "timeline-3",
    icon: pitchDay,
    title: "Pitch Day",
    content:
      "April 2023",
  },
];

export const problems = [
  {
    id: "problem-1",
    content:
      "How can we reduce carbonization through tax?",
    category: "Environment",
    title: "Green Money",
    img: environment,
  },
  {
    id: "problem-2",
    content:
      "Something cool that tech cannot do.",
    category: "Education",
    title: "New Education",
    img: education,
  },
  {
    id: "problem-3",
    content:
      "Elevate the poor using tech. Any idea?",
    category: "Technology",
    title: "Disruptive Income Equality",
    img: technology,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Participants",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Supported by Companies",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Prizes to be Won",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Contact Us",
    links: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/groundzero/",
      },
      {
        name: "Telegram",
        link: "https://www.telegram.com/groundzero/",
      },
      {
        name: "TikTok",
        link: "https://www.tiktok.com/groundzero/",
      },
      {
        name: "YouTube",
        link: "https://www.youtube.com/groundzero/",
      },
      {
        name: "Website",
        link: "https://www.groundzero.com/about/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.groundzero.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.groundzero.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.groundzero.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.groundzero.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.groundzero.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.groundzero.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.groundzero.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const companies = [
  {
    id: "companies-1",
    logo: airbnb,
  },
  {
    id: "companies-2",
    logo: binance,
  },
  {
    id: "companies-3",
    logo: coinbase,
  },
  {
    id: "companies-4",
    logo: dropbox,
  },
];