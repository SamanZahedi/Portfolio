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
            <a href="#">PORTFOLIO</a>
          </li>
          <li>
            <a href="#">MY OFFER</a>
          </li>
          <li>
            <a href="#">CONTACT ME</a>
          </li>
          <li>
            <a href="#">MY CV</a>
          </li>
          <li>
            <a href="#">MY TECH TALKS</a>
          </li>

          <li>
            <a href="#">PERSONAL BLOG</a>
          </li>
        </ul>
      </div>
      <footer>
        <p>GET IN TOUCH</p>
        <a href="">
          <i class="fa-solid fa-envelope"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-github-square"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-facebook-square"></i>
        </a>
      </footer>
    </sidebar>
  );
};

export default Sidebar;
