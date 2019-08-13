import React, { Component } from "react";
import "./Header.css";
import logo from "../assets/face-logo.png";
import Avatar from "../assets/avatar.svg";

class Header extends Component {
  render() {
    return (
      <nav id="header">
        <img src={logo} alt="Logo Facebook" />
        <div id="divAvatar">
          <span>Meu Perfil</span>
          <Avatar width={24} height={24} fill="#fff" />
        </div>
      </nav>
    );
  }
}

export default Header;
