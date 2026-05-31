import React, { useEffect, useState } from "react";

function TopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".hero");
      const triggerPoint = hero ? hero.offsetHeight : window.innerHeight;
      setVisible(window.scrollY > triggerPoint - 1);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`top-button${visible ? " is-visible" : ""}`}
      type="button"
      aria-label="상단으로 이동"
      onClick={scrollToTop}
    >
      TOP
    </button>
  );
}

export default TopButton;
