import React, { useEffect, useState } from "react";
import logo from "../img/headerLogo.png";

const navLinks = [
  { target: "problem", label: "Process" },
  { target: "design", label: "Design System" },
  { target: "app", label: "Service" },
];

function MainHeader() {
  const [activeTarget, setActiveTarget] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("notomato-scroll-top") === "true") {
      sessionStorage.removeItem("notomato-scroll-top");
      window.scrollTo(0, 0);
    }
  }, []);

  const handleNavClick = (event, target) => {
    event.preventDefault();
    setActiveTarget(target);
    const targetElement = document.getElementById(target);
    if (!targetElement) return;

    window.scrollTo({
      top: targetElement.getBoundingClientRect().top + window.scrollY,
      behavior: "smooth",
    });
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    sessionStorage.setItem("notomato-scroll-top", "true");
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.location.reload();
  };

  return (
    <header className="site-header" aria-label="Page navigation">
      <a className="logo-pill" href="#top" aria-label="notomato top" onClick={handleLogoClick}>
        <img src={logo} alt="notomato" />
      </a>
      <nav className="header-pill">
        {navLinks.map((link) => (
          <a
            className={activeTarget === link.target ? "active" : undefined}
            href={`#${link.target}`}
            key={link.target}
            onClick={(event) => handleNavClick(event, link.target)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}


export default MainHeader;
