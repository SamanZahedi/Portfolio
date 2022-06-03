import React from "react";
import Logo from "../assets/images/profile.png";

const Sidebar = () => {
  return (
    <sidebar>
      <div className="profile">
        <img src={Logo} alt="" />
        <h3>SAMAN ZAHEDI</h3>
        <p>FULL STACK DEVELOPER</p>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#offer">MY OFFER</a>
          </li>
          <li>
            <a href="#contact">CONTACT ME</a>
          </li>
          <li>
            <a href="#cv">MY CV</a>
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
        <a href="saman.zahedi10@gmail.com">
          <i class="fa-solid fa-envelope"></i>
        </a>
        <a href="linkedin.com">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/SamanZahedi">
          <i class="fa-brands fa-github-square"></i>
        </a>
        <a href="www.facebook.com">
          <i class="fa-brands fa-facebook-square"></i>
        </a>
      </footer>
    </sidebar>
  );
};

export default Sidebar;
