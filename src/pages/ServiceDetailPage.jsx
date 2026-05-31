import React from "react";
import Footer from "../components/Footer";
import bannerLogo from "../img/banner_logo.png";
import serviceHeroPhone from "../img/service/service_hero_phone.png";
import serviceNotomato from "../img/service/notomato.png";
import loginPhone from "../img/service/login_phone.png";
import loginPhone2 from "../img/service/login_phone2.png";
import loading from "../img/service/loading.png";
import mainHome from "../img/service/mainHome.png";
import mainHomeSide from "../img/service/mainHome_side.png";
import aiCameraDiet from "../img/service/AICamera&diet.png";
import diet2 from "../img/service/diet_2.png";
import report1 from "../img/service/report1.png";
import report2 from "../img/service/report2.png";
import feed from "../img/service/feed.png";
import "../styles/appShowingPage.css";
import MainHeader from "../components/MainHeader";

export function ServiceSections({ includeHero = true } = {}) {
  return (
    <>
      {includeHero && (
        <section className="service-hero-detail">
          <div className="service-hero-copy">
            <h1>
              보편적 건강 상식이 소외시킨
              <br />
              이들을 위한 단 하나의 서비스
            </h1>
            <img
              className="service-notomato-word"
              src={serviceNotomato}
              alt="notomato"
            />
          </div>
          <img
            className="service-hero-phone"
            src={serviceHeroPhone}
            alt="notomato service screens"
          />
        </section>
      )}

      <section className="service-onboarding-card" id="app">
        <p>Onboarding</p>
        <h2>멈추지 않는 브랜드 경험</h2>
        <span>
          노토마토는 식단 이미지 분석 로딩 화면을 풀컬러로 채우고, 아이콘이 살아
          움직이는 마이크로 인터랙션을 구현했습니다. 잠깐의 대기 시간 동안
          사용자의 이탈을 막고, 앱이 실시간으로 작동하는 생동감을 전달해 로딩을
          브랜드 경험의 일부로 만들었습니다.
        </span>
        <img src={bannerLogo} alt="" />
      </section>

      <section className="service-login-section">
        <div className="service-section-heading">
          <h2>Login & Sign</h2>
          <p>
            간편 로그인부터 기초 정보 입력, 관리 질환 선택에 이르는 초기 설정
            단계를 체계적으로 연결하여 환자의 진입 장벽을 낮췄습니다. 축적된
            데이터는 투약 및 병원 정보와 연동되어, 첫 순간부터 사용자만을 위한
            개인 맞춤형 정밀 식단을 설계하는 핵심 기반이 됩니다.
          </p>
        </div>
        <div className="service-login-visual">
          <img
            className="service-login-phone"
            src={loginPhone}
            alt="notomato login screen"
          />
          <div className="service-login-flow-wrap">
            <div className="login-step-track" aria-hidden="true">
              <span>기본 정보 입력</span>
              <span>질환 선택</span>
              <span>병원 및 투약 정보 연동</span>
              <span>프로필 설정</span>
            </div>
            <img
              className="service-login-flow"
              src={loginPhone2}
              alt="notomato sign up flow screens"
            />
          </div>
        </div>
      </section>

      <section className="service-loading-section">
        <h2>Loading</h2>
        <img src={loading} alt="notomato loading screens" />
      </section>

      <section className="service-mainhome-section">
        <div className="service-section-heading">
          <h2>Main Home</h2>
          <p>
            노토마토는 소외된 질환자를 위해 사용자의 질환·복약·식단 데이터를
            통합 분석하여 최적화된 식사 환경을 설계합니다. 정보의 장벽을 허물어
            질환자와 보호자 모두가 안심하고 편리하게 식사할 수 있는 일상을
            현실로 만듭니다.
          </p>
        </div>
        <div className="home-visual">
          <img
            className="home-main-img"
            src={mainHome}
            alt="notomato main home screen"
          />
          <img
            className="home-side-img"
            src={mainHomeSide}
            alt="notomato side menu screen"
          />
          <span className="service-note note-home-left">
            <p className="home-note-copy home-note-left-copy">
              사용자 복용 상태에 맞는
              <br />
              알림을 확인할 수 있습니다.
            </p>
          </span>
          <span className="service-note note-home-top">
            <p className="home-note-copy home-note-top-copy">
              사용자가 건강상태를 그래프로
              <br />
              직관적으로 확인할 수 있도록 돕습니다.
            </p>
          </span>
          <span className="service-note note-home-mid">
            <p className="home-note-copy home-note-mid-copy">
              <b>개인 맞춤 식단 추천</b>사용자 정보와 식습관을 기반으로
              <br />
              맞춤형 식단을 제공합니다.
            </p>
          </span>
          <span className="service-note note-home-bottom-a">
            <p className="home-note-copy home-note-bottom-a-copy">
              <b>회원 정보 관리</b>프로필과 계정 정보를 간편하게
              <br />
              수정할 수 있습니다.
            </p>
          </span>
          <span className="service-note note-home-bottom-b">
            <p className="home-note-copy home-note-bottom-b-copy">
              <b>콘텐츠 저장 및 공유</b>유용한 식단 정보를 스크랩하고 커뮤니
              <br />
              티를 통해 경험을 공유할 수 있습니다.
            </p>
          </span>
        </div>
      </section>

      <section className="service-ai-diet-section">
        <div className="service-ai-copy">
          <h2>AI Scan Camera</h2>
          <p>
            노토마토는 소외된 질환자를 위해 사용자의 질환 복약·식단 데이터를
            통합 분석하여 최적화된 식사 환경을 설계합니다. 정보의 장벽을 허물어
            질환자와 보호자 모두가 안심하고 편리하게 식사할 수 있는 일상을
            현실로 만듭니다.
          </p>
        </div>
        <img
          className="service-ai-diet-map"
          src={aiCameraDiet}
          alt="notomato ai scan and diet flow"
        />
        <div className="diet-detail-group">
          <div>
            <h2>Diet</h2>
            <p>
              사용자의 질환·복약·식단 데이터를 통합 분석하여 최적화된 식사
              환경을 설계합니다.
            </p>
          </div>
          <img src={diet2} alt="notomato diet detail screens" />
        </div>
        <span className="diet-caption caption-one">
          복약·식단 데이터를 통합 분석하여
          <br />
          최적화된 식사 환경을 설계
        </span>
        <span className="diet-caption caption-two">
          복약·식단 데이터를 통합 분석하여
          <br />
          최적화된 식사 환경을 설계
        </span>
        <span className="diet-caption caption-three">
          복약·식단 데이터를 통합 분석하여
          <br />
          최적화된 식사 환경을 설계
        </span>
      </section>

      <section className="service-report-section">
        <div className="report-copy">
          <h2>Report</h2>
          <p>
            노토마토는 소외된 질환자를 위해 사용자의 질환·복약·식단 데이터를
            통합 분석하여 최적화된 식사 환경을 설계합니다. 정보의 장벽을 허물어
            질환자와 보호자 모두가 안심하고 편리하게 식사할 수 있는 일상을
            현실로 만듭니다.
          </p>
        </div>
        <img
          className="report-main"
          src={report1}
          alt="notomato report main screen"
        />
        <img
          className="report-side"
          src={report2}
          alt="notomato report detail card"
        />
        <span className="service-note note-report-a">
          사용자 정보 관련 내용 설명 사용자 정보
          <br />
          관련 내용 설명 사용자 정보 관련 내용 설명
        </span>
        <span className="service-note note-report-b">
          사용자 정보 관련 내용 설명 사용자 정보
          <br />
          관련 내용 설명 사용자 정보 관련 내용 설명
        </span>
      </section>

      <section className="service-user-report-section">
        <img
          className="user-report-main"
          src={mainHome}
          alt="notomato user report main"
        />
        <img
          className="user-report-side"
          src={mainHomeSide}
          alt="notomato user report side menu"
        />

        <p className="user-report-note note-user-a">
          사용자 정보 관련 내용 설명 사용자 정보
          <br />
          관련 내용 설명 사용자 정보 관련 내용 설명
        </p>
        <p className="user-report-note note-user-b">
          사용자 정보 관련 내용 설명 사용자 정보
          <br />
          관련 내용 설명 사용자 정보 관련 내용 설명
        </p>
      </section>

      <section className="service-feed-section">
        <div className="service-section-heading">
          <h2>Feed</h2>
          <p>
            노토마토는 소외된 질환자를 위해 사용자의 질환·복약·식단 데이터를
            통합 분석하여 최적화된 식사 환경을 설계합니다. 정보의 장벽을 허물어
            질환자와 보호자 모두가 안심하고 편리하게 식사할 수 있는 일상을
            현실로 만듭니다.
          </p>
        </div>
        <div className="feed-visual">
          <img src={feed} alt="notomato feed screen" />
          <span className="service-note note-feed-a">
            추천 사용자 팔로우 기능
          </span>
          <span className="service-note note-feed-b">
            다양한 카테고리 제공 및 선택
          </span>
          <span className="service-note note-feed-c">기능 간단 설명</span>
        
        </div>
      </section>
    </>
  );
}

function ServiceDetailPage() {
  return (
    <main className="detail-page service-detail">
      <MainHeader active="service" />

      <ServiceSections />

      <Footer />
    </main>
  );
}

export default ServiceDetailPage;
