import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import serviceHeroPhone from "../img/service/service_hero_phone.png";
import serviceNotomato from "../img/service/notomato.png";
import serviceOverview from "../img/serviceOverview.png";
import loginVideo from "../img/service/login.mov";
import loginPhone2 from "../img/service/login_phone2.png";
import loading from "../img/service/loading.png";
import mainHomeSub from "../img/service/mainHome&sub.png";
import camera from "../img/service/camera.png";
import aiScanCameraVideo from "../img/service/AIscancamera.mov";
import diet1 from "../img/service/diet_1.png";
import dietVideo from "../img/service/diet.mov";
import diet2 from "../img/service/diet_2.png";
import report from "../img/service/report.png";
import reportVideo from "../img/service/report.mp4";
import feeds from "../img/service/feeds.png";
import last from "../img/last.png";
import "../styles/appShowingPage.css";
import MainHeader from "../components/MainHeader";

export function ServiceSections({ includeHero = true } = {}) {
  const loginRef = useRef(null);
  const loadingRef = useRef(null);
  const mainHomeRef = useRef(null);
  const aiDietRef = useRef(null);
  const dietRevealRef = useRef(null);
  const reportRef = useRef(null);
  const feedRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState({
    login: false,
    loading: false,
    mainHome: false,
    aiScan: false,
    diet: false,
    report: false,
    feed: false,
  });

  useEffect(() => {
    const targets = [
      [loginRef.current, "login"],
      [loadingRef.current, "loading"],
      [mainHomeRef.current, "mainHome"],
      [aiDietRef.current, "aiScan"],
      [dietRevealRef.current, "diet"],
      [reportRef.current, "report"],
      [feedRef.current, "feed"],
    ].filter(([node]) => node);

    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = targets.find(([node]) => node === entry.target);
          if (!target) return;
          setVisibleSections((current) => ({
            ...current,
            [target[1]]: true,
          }));
        });
      },
      { threshold: 0.2 },
    );

    targets.forEach(([node]) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

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
        <div className="service-overview-copy">
          <p>Service Overview</p>
          <h2>
            노토마토는 멈추지 않는
            <br />
            브랜드 경험을 제공합니다.
          </h2>
          <span>
            마이크로 인터랙션, 풀컬러 이미지, 체계화된 그래픽들을
            <br />
            통해 사용자에게 더 나은 경험을 제공하고자 합니다.
          </span>
        </div>
        <img className="service-overview-image" src={serviceOverview} alt="notomato service overview" />
      </section>

      <section
        className={`service-login-section${visibleSections.login ? " is-visible" : ""}`}
        ref={loginRef}
      >
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
          <video
            className="service-login-phone"
            src={loginVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="notomato login screen"
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

      <section
        className={`service-loading-section${visibleSections.loading ? " is-visible" : ""}`}
        ref={loadingRef}
      >
        <h2>Loading</h2>
        <img src={loading} alt="notomato loading screens" />
      </section>

      <section
        className={`service-mainhome-section${visibleSections.mainHome ? " is-visible" : ""}`}
        ref={mainHomeRef}
      >
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
            className="home-combined-img"
            src={mainHomeSub}
            alt="notomato main home and side menu screens"
          />
          <span className="service-note note-home-left">
            <p className="home-note-copy home-note-left-copy">
              사용자 복용 상태에 맞는
              <br />
              알림을 확인할 수 있습니다.
            </p>
            <p className="home-note-copy home-note-left-copy-bottom">
              <b>개인화 콘텐츠 제공</b>
              사용자 건강 상태에 맞는 식단 및
              <br />
              건강 정보를 바탕으로 추천합니다.
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
              <b>개인 맞춤 식단 추천</b>
              사용자 정보와 식습관을 기반으로
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

      <section
        className={`service-ai-diet-section${visibleSections.aiScan ? " is-ai-visible" : ""}${visibleSections.diet ? " is-diet-visible" : ""}`}
        ref={aiDietRef}
      >
        <div className="service-ai-copy">
          <h2>AI Scan Camera</h2>
          <p>
            카메라로 찍기만 해도 음식을 스스로 구별하여 칼로리와 주의 성분을
            화면 위에 바로 띄워줍니다. 상단의 한 줄 요약을 통해 지금 먹는 식단이
            안전한지 바로 확인해 보세요.
          </p>
        </div>
        <div
          className="service-ai-diet-map"
          aria-label="notomato ai scan and diet flow"
        >
          <img
            className="service-ai-overlay service-camera-overlay"
            src={camera}
            alt="notomato ai scan camera screens"
          />
          <video
            className="service-ai-camera-video"
            src={aiScanCameraVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="AI scan camera screen preview"
          />
          <img
            className="service-ai-overlay service-diet-one-overlay"
            src={diet1}
            alt="notomato diet calendar screen"
          />
          <video
            className="service-diet-one-video"
            src={dietVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Diet calendar screen preview"
          />
          <img
            className="service-ai-overlay service-diet-two-overlay"
            src={diet2}
            alt="notomato diet schedule and meal screens"
          />
        </div>
        <div className="diet-detail-group" ref={dietRevealRef}>
          <div className="diet-txt-group">
            <h2>Diet</h2>
            <p>
              달력 한 장으로 복약 알림부터 맞춤형 식단 추천까지, 매일의 건강을
              똑똑하게 기록하고 관리합니다.
            </p>
          </div>
        </div>
        <span className="diet-caption caption-one">
          잊지 않게 관리하는
          <br />
          맞춤형 복약 및 식사 스케줄
        </span>
        <span className="diet-caption caption-two">
          내 몸에 꼭 맞춰
          <br />
          알아서 제안하는 하루 추천 식단
        </span>
        <span className="diet-caption caption-three">
          재료부터 조리 순서까지
          <br />
          꼼꼼하게 알려주는 맞춤 레시피
        </span>
      </section>

      <section
        className={`service-report-section${visibleSections.report ? " is-visible" : ""}`}
        ref={reportRef}
      >
        <div className="report-copy">
          <h2>Report</h2>
          <p>
            매일 기록되는 사용자 정보를 자동으로 분석하여 주간·월간 건강
            리포트를 발행합니다. 복잡한 숫자와 데이터 대신 한눈에 들어오는
            직관적인 요약 피드백을 통해, 건강의 긍정적인 변화를 확인하고 안심할
            수 있는 일상을 만듭니다.
          </p>
        </div>
        <div className="report-media">
          <img
            className="report-combined"
            src={report}
            alt="notomato report screens"
          />
          <video
            className="report-video-overlay"
            src={reportVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Report screen preview"
          />
        </div>
        <span className="service-note note-report-a">
          <b>클릭 한 번으로 연결되는 상세 건강 리포트</b>
          메인 화면의 알림 카드를 누르면, 그동안 쌓인 나의
          <br />
          영양 성분 섭취 추이와 혈압 변화를 정밀한 그래프와
          <br />
          AI 맞춤 피드백으로 자세하게 확인할 수 있습니다.
        </span>
        <span className="service-note note-report-b">
          <b>나만을 위한 맞춤형 건강 정보 대시보드</b>
          최근 진료 기록과 다음 병원 예약일은 물론, 핵심 검사
          <br />
          수치와 나에게 꼭 맞춘 식이제한 가이드라인 등 중요한
          <br />
          '내 정보'를 한눈에 모아보고 관리합니다.
        </span>
      </section>

      {/* <section className="service-user-report-section">
        <img
          className="user-report-main"
          src={mainHomeSub}
          alt="notomato user report main and side menu"
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
      </section> */}

      <section
        className={`service-feed-section${visibleSections.feed ? " is-visible" : ""}`}
        ref={feedRef}
      >
        <div className="service-section-heading">
          <h2>Feed</h2>
          <p>
            나와 같은 고민을 가진 메이트들과 소통하며, 지치지 않는 건강한 식단
            관리 일상을 만들어갑니다.
            <br />
            이웃들이 직접 검증한 식단 레시피부터 복약 노하우까지, 유용한 건강
            팁을 자유롭게 공유하고 응원을 나눕니다.
          </p>
        </div>
        <div className="feed-visual">
          <img className="feed-final-img" src={feeds} alt="notomato feed service screens" />
          <span className="service-note note-feed-a">
            <b>맞춤형 건강 메이트 추천</b>
            나랑 비슷한 건강 상태를 가진 유저들
            <br />
            을 팔로우하고, 그들의 식단 노하우와
            <br />
            복약 일상을 피드로 받아보세요.
          </span>
          <span className="service-note note-feed-b">
            <b>내 관심사에 딱 맞는 카테고리별 피드 탐색</b>
            식단, 관리, 식품 추천, 비포&amp;애프터 등 내
            <br />
            가 지금 필요한 정보만 카테고리별로 골라
            <br />
            빠르게 모아볼 수 있습니다.
          </span>
          <span className="service-note note-feed-c">
            <b>이웃 메이트들이 직접 검증한 생생한 건강 레시피</b>
            맛과 건강을 모두 잡은 메이트들의 실제 식단 사진
            <br />
            과 꿀팁 가득한 조리법을 확인하고, 좋아요와 북마
            <br />
            크로 저장합니다.
          </span>
        </div>
      </section>
    </>
  );
}

export function LastVisualSection() {
  return (
    <section className="last-visual-section">
      <img src={last} alt="notomato app screens" />
    </section>
  );
}

function ServiceDetailPage() {
  return (
    <main className="detail-page service-detail">
      <MainHeader active="service" />

      <ServiceSections />

      <LastVisualSection />

      <Footer />
    </main>
  );
}

export default ServiceDetailPage;
