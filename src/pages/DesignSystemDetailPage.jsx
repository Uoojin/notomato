import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import bannerLogo from "../img/banner_logo.png";
import designMain from "../img/desigin_system/designPage_mainImg.png";
import designSystem from "../img/desigin_system/designSystem.png";
import iconSet from "../img/desigin_system/icons.png";
import "../styles/designPage.css";
import MainHeader from "../components/MainHeader";

export function DesignSystemSections() {
  const signalRef = useRef(null);
  const [signalVisible, setSignalVisible] = useState(false);

  useEffect(() => {
    const signalNode = signalRef.current;
    if (!signalNode) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSignalVisible(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(signalNode);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="design-hero" id="design">
        <img src={designMain} alt="notomato design system application preview" />
      </section>

      {/* <section className="logo-system-section">
        <p className="detail-section-title">Logo</p>
        <div className="logo-system-grid">
          <div className="logo-construction">
            <img src={logoIcon} alt="notomato app logo grid" />
          </div>
          <img className="logo-wordmark" src={logo} alt="notomato" />
        </div>
      </section> */}

      <section className="design-solution-card">
        <p>Visual Identity</p>
        <h2>편안함과 직관성을 담은<br />노토마토만의 안심 UI 시스템</h2>
        <span>
          직관적인 아이콘과 질환별 특징을 담은 비비드 컬러로 노토마토만의 친근한 UI 시스템을 만들었습니다. 의료 서비스의 차가운 인상을 지우고, 사용자가 화면을 마주하는 순간에 편안함과 신뢰를 느낄 수 있도록 설계했습니다.
        </span>
        <img src={bannerLogo} alt="" />
      </section>

      <section className={`main-icon-section design-system-final${signalVisible ? " is-visible" : ""}`} ref={signalRef}>
        <p className="disease-icons-title">당신의 건강 상태를 나타내는 4가지 신호등</p>
        <span className="disease-icons-desc">
          질환별 특성을 반영한 그래픽과 컬러를 통해, 의료 서비스의 차가운 이미지를 친근하고 따뜻한 경험으로 재해석했습니다.
        </span>
        <img className="main-icon-set design-icons-final" src={iconSet} alt="notomato disease icon system" />
        <img className="design-system-board" src={designSystem} alt="notomato design system components colors and typography" />
      </section>
    </>
  );
}

function DesignSystemDetailPage() {
  return (
    <main className="detail-page design-detail">
      <MainHeader active="design" />

      <DesignSystemSections />

      <Footer />
    </main>
  );
}

export default DesignSystemDetailPage;
