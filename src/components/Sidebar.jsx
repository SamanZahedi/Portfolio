import React from "react";
import profilePic from "../assets/images/profile.png";
import Offer from "./Offer";
import Portfolio from "./Portfolio";
import Cv from "./Cv";
// import Portfolio from "./Portfolio";

// const displayPortfolio = () => {
//   return (
//   <Portfolio />
//   )
// }
const Sidebar = ({ handleClick }) => {
  return (
    <sidebar>
      <div className="profile">
        <img src={profilePic} alt="" />
        <h3>SAMAN ZAHEDI</h3>
        <p>FULL STACK DEVELOPER</p>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#portfolio" onClick={() => handleClick(<Portfolio />)}>
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#offer" onClick={() => handleClick(<Offer />)}>
              MY OFFER
            </a>
          </li>
          <li>
            <a href="#contact">CONTACT ME</a>
          </li>
          <li>
            <a href="#cv" onClick={() => handleClick(<Cv />)}>
              MY CV
            </a>
          </li>
          <li>
            <a href="#techtalks">MY TECH TALKS</a>
          </li>

          <li>
            <a href="#blog">PERSONAL BLOG</a>
          </li>
        </ul>
      </div>
      <footer>
        <p>GET IN TOUCH</p>
        <a
          href="mailto:saman.zahedi10@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-solid fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/saman-zahedi-967384a9/"
          target="new window"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/SamanZahedi" target="new window">
          <i class="fa-brands fa-github-square"></i>
        </a>
        <a href="https://www.facebook.com/saman.zahedi.58" target="new window">
          <i class="fa-brands fa-facebook-square"></i>
        </a>
        <a href="https://mobile.twitter.com/Saman7479" target="new window">
          <i class="fa-brands fa-twitter-square"></i>
        </a>
      </footer>
    </sidebar>
  );
};

export default Sidebar;
