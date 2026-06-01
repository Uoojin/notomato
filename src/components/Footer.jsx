import React from "react";
import footerLogo from "../img/footerLogo.png";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={footerLogo} alt="notomato" />
            <p>식이 관리의 기준이 필요한 당신을 위한 초개인화 플랫폼, 노토마토</p>
          </div>
          <div className="footer-team">
            <div>
              <strong>Planner</strong>
              <span>
                Yumin Jung
                <br />
                @imyuminj
              </span>
            </div>
            <div>
              <strong>Designer</strong>
              <span>
                Daeun Jung
                <br />
                @b0nebaki
              </span>
            </div>
            <div>
              <strong>Programmer</strong>
              <span>
                Yujin Jung
                <br />
                @y.__.oou.u
              </span>
            </div>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p>
            Kaywon Design &amp; Art School
            <br />
            Digital Contents Production
          </p>
          <p>
            Copyright © 2026 NOTOMATO. All rights reserved.
            <br />
            Terms of Use Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
