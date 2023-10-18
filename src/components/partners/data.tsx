import React from "react";
import { FiUsers, FiHeart, FiCheckCircle, FiTrendingUp } from "react-icons/fi";

import image1 from "../../assets/images/partners/AdditiveManufacturing/1.jpg";
import image2 from "../../assets/images/partners/AdditiveManufacturing/2.jpg";

import imgs1 from "../../assets/images/partners/Electrical/1.jpg";
// import imgs2 from "../../assets/images/partners/Electrical/2.jpg";
import imgs3 from "../../assets/images/partners/Electrical/3.jpg";
import imgs4 from "../../assets/images/partners/Electrical/4.jpg";
import imgs5 from "../../assets/images/partners/Electrical/5.jpg";
import imgs6 from "../../assets/images/partners/Electrical/6.jpg";
import imgs7 from "../../assets/images/partners/Electrical/7.jpg";
import imgs8 from "../../assets/images/partners/Electrical/8.jpg";
import imgs9 from "../../assets/images/partners/Electrical/9.jpg";
import imgs10 from "../../assets/images/partners/Electrical/10.jpg";
import imgs11 from "../../assets/images/partners/Electrical/11.jpg";

import im1 from "../../assets/images/partners/Enclosures/1.jpg";
import im2 from "../../assets/images/partners/Enclosures/2.jpg";
import im3 from "../../assets/images/partners/Enclosures/3.jpg";
import im4 from "../../assets/images/partners/Enclosures/4.jpg";
import im5 from "../../assets/images/partners/Enclosures/5.jpg";
import im6 from "../../assets/images/partners/Enclosures/6.jpg";
import im7 from "../../assets/images/partners/Enclosures/7.jpg";
import im8 from "../../assets/images/partners/Enclosures/8.jpg";
import im9 from "../../assets/images/partners/Enclosures/9.jpg";
import im10 from "../../assets/images/partners/Enclosures/10.jpg";
import im11 from "../../assets/images/partners/Enclosures/12.jpg";
import im12 from "../../assets/images/partners/Enclosures/13.jpg";
import im13 from "../../assets/images/partners/Enclosures/14.jpg";
import im14 from "../../assets/images/partners/Enclosures/15.jpg";
import im15 from "../../assets/images/partners/Enclosures/16.jpg";
import im16 from "../../assets/images/partners/Enclosures/17.jpg";
import im17 from "../../assets/images/partners/Enclosures/11.jpg";

import img1 from "../../assets/images/partners/PipesandValves/1.jpg";
import img2 from "../../assets/images/partners/PipesandValves/2.jpg";
import img3 from "../../assets/images/partners/PipesandValves/3.jpg";
import img4 from "../../assets/images/partners/PipesandValves/4.jpg";
import img5 from "../../assets/images/partners/PipesandValves/5.jpg";
import img6 from "../../assets/images/partners/PipesandValves/6.jpg";
import img7 from "../../assets/images/partners/PipesandValves/7.png";
import img8 from "../../assets/images/partners/PipesandValves/8.jpg";
import img9 from "../../assets/images/partners/PipesandValves/9.jpg";
import img10 from "../../assets/images/partners/PipesandValves/10.jpg";
import img11 from "../../assets/images/partners/PipesandValves/11.jpg";
import img12 from "../../assets/images/partners/PipesandValves/12.jpg";
import img13 from "../../assets/images/partners/PipesandValves/13.jpg";
import img14 from "../../assets/images/partners/PipesandValves/14.png";
import img15 from "../../assets/images/partners/PipesandValves/15.png";
import img16 from "../../assets/images/partners/PipesandValves/16.jpg";
import img17 from "../../assets/images/partners/PipesandValves/17.png";
import img18 from "../../assets/images/partners/PipesandValves/18.jpg";
import img19 from "../../assets/images/partners/PipesandValves/19.jpg";
import img20 from "../../assets/images/partners/PipesandValves/20.png";
import img21 from "../../assets/images/partners/PipesandValves/21.jpg";
import img22 from "../../assets/images/partners/PipesandValves/22.jpg";
import img23 from "../../assets/images/partners/PipesandValves/23.jpg";
import img24 from "../../assets/images/partners/PipesandValves/24.jpg";
import img25 from "../../assets/images/partners/PipesandValves/25.jpg";
import img26 from "../../assets/images/partners/PipesandValves/26.png";
import img27 from "../../assets/images/partners/PipesandValves/27.png";
import img28 from "../../assets/images/partners/PipesandValves/28.jpg";
import img29 from "../../assets/images/partners/PipesandValves/29.jpg";
import img30 from "../../assets/images/partners/PipesandValves/30.jpg";
import img31 from "../../assets/images/partners/PipesandValves/31.png";
import img32 from "../../assets/images/partners/PipesandValves/32.png";
import img33 from "../../assets/images/partners/PipesandValves/33.jpg";
import img34 from "../../assets/images/partners/PipesandValves/34.jpg";
import img35 from "../../assets/images/partners/PipesandValves/35.png";
import img36 from "../../assets/images/partners/PipesandValves/36.jpg";
import img37 from "../../assets/images/partners/PipesandValves/37.png";
import img38 from "../../assets/images/partners/PipesandValves/38.jpg";
import img39 from "../../assets/images/partners/PipesandValves/39.jpg";
import img40 from "../../assets/images/partners/PipesandValves/40.jpg";
import img41 from "../../assets/images/partners/PipesandValves/41.jpg";
import img42 from "../../assets/images/partners/PipesandValves/42.png";
import img43 from "../../assets/images/partners/PipesandValves/43.png";
import img44 from "../../assets/images/partners/PipesandValves/44.png";
import img45 from "../../assets/images/partners/PipesandValves/45.jpg";
import img46 from "../../assets/images/partners/PipesandValves/46.jpg";
import img47 from "../../assets/images/partners/PipesandValves/47.jpg";
import img48 from "../../assets/images/partners/PipesandValves/48.jpg";

export const data = [
  {
    id: 1,
    icon: <FiUsers />,
    title: "Mission Statement",
    text: "Constantly adopting efficiency dynamics in empowering people to deliver excellence with innovation in the pursuit of perfection.",
  },
  {
    id: 2,
    icon: <FiHeart />,
    title: "Our Vision",
    text: "To be the dominant EPCI service provider from Africa, delivering capital projects globally.",
  },
  {
    id: 3,
    icon: <FiCheckCircle />,
    title: "Core Values",
    text: "People First, Integrity, Innovation, and Efficiency serve as the guiding compass that directs every facet of our operations.",
  },
  {
    id: 4,
    icon: <FiTrendingUp />,
    title: "Strategy",
    text: "Our Strategy seeks to maintain us as one of the global leaders in the oil and gas industry with a focus.",
  },
];

export const additive = [
  image1,
  image2,
]
export const electrical = [
  img1,
  imgs1,
  // imgs2,
  imgs3,
  imgs4,
  imgs5,
  imgs6,
  imgs7,
  imgs8,
  imgs9,
  imgs10,
  imgs11,
]
export const enclosures = [
  im1,
  im2,
  im3,
  im4,
  im5,
  im6,
  im7,
  im8,
  im9,
  im10,
  im11,
  im12,
  im13,
  im14,
  im15,
  im16,
  im17,
]
export const pipeandValves = [
  
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
];
