import React from "react";
import logo from "../img/logo.png";

function Footer() {
  return (
    <footer className="main-footer">
      <img src={logo} alt="notomato" />
      <p>개인의 질환과 일상을 함께 이해하는 안심 식사 관리 서비스</p>
      <small>© 2026 notomato. Prototype main page.</small>
    </footer>
  );
}

export default Footer;
