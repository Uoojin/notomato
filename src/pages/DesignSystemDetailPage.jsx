import React from "react";
import Footer from "../components/Footer";
import logo from "../img/logo.png";
import bannerLogo from "../img/banner_logo.png";
import designMain from "../img/desigin_system/designPage_mainImg.png";
import logoIcon from "../img/desigin_system/logo_icon.png";
import systemIcon from "../img/desigin_system/system_icon.png";
import uiComponent from "../img/desigin_system/uiComponent.png";
import iconSet from "../img/desigin_system/icon.png";
import "../styles/designPage.css";
import MainHeader from "../components/MainHeader";

export function DesignSystemSections() {
  return (
    <>
      <section className="design-hero" id="design">
        <img src={designMain} alt="notomato design system application preview" />
      </section>

      <section className="logo-system-section">
        <p className="detail-section-title">Logo</p>
        <div className="logo-system-grid">
          <div className="logo-construction">
            <img src={logoIcon} alt="notomato app logo grid" />
          </div>
          <img className="logo-wordmark" src={logo} alt="notomato" />
        </div>
      </section>

      <section className="design-solution-card">
        <p>Visual Identity</p>
        <h2>편안한 서체와 비비드 컬러를 통해 완성한 노토마토만의 안심 UI 시스템</h2>
        <span>
          눈이 편안한 서체와 직관적인 아이콘, 그리고 질환별 특징을 담은 비비드 컬러로 노토마토만의 친근한 UI 시스템을 만들었습니다. 또한 의료 서비스의 차가운 인상을 지우고, 사용자가 화면을 마주하는 모든 순간에 편안함과 신뢰를 느낄 수 있도록 정성껏 설계했습니다. 이어지는 페이지에서 노토마토의 정체성을 담은 독창적인 디자인 가이드를 확인해보세요.
        </span>
        <img src={bannerLogo} alt="" />
      </section>

      <section className="type-icon-section">
        <div className="typeface-block">
          <p className="detail-section-title">Typeface</p>
          <h2>Pretendard</h2>
          <span>Regular · Medium · Bold</span>
          <strong>가 나 다 / Aa Bb Cc</strong>
        </div>
        <div className="system-icon-block">
          <p className="detail-section-title">System Icons</p>
          <img src={systemIcon} alt="notomato system icons" />
        </div>
      </section>

      <section className="color-system-section">
        <p className="detail-section-title">Color</p>
        <div className="brand-colors">
          <span>#FF5AA0</span>
          <span>#FFF652</span>
          <span>#71FEDE</span>
          <span>#A687F4</span>
        </div>
        <div className="black-system">
          <div>
            <strong>ECO Black</strong>
            <b>#070707</b>
          </div>
          <div className="gray-scale">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="ui-components-section">
        <p className="detail-section-title">UI Components</p>
        <img className="ui-components-image" src={uiComponent} alt="notomato UI components" />
      </section>

      <section className="main-icon-section">
        <p>Disease Signal System</p>
        <h2>당신의 건강 상태를 나타내는 4가지 신호등</h2>
        <span>
          노토마토는 고혈압과 당뇨, 선천성 대사질환 등 각 질환의 특징을 독창적인 그래픽과 컬러로 해석했습니다. 기하학적인 형태와 비비드한 컬러 조합은 의료 서비스 특유의 차가운 이미지를 따뜻하고 편안하게 완화해 줍니다. 사용자가 복잡한 글자를 읽기 전, 비주얼만으로도 직관적인 안심과 친근함을 느끼게 하는 것이 노토마토만의 특별한 브랜드 경험입니다.
        </span>
        <img className="main-icon-set" src={iconSet} alt="notomato four health signal icons" />
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
