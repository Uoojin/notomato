import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import flowChartComponent from "../img/process/flowChartComponent.png";
import loginFlow from "../img/process/loginFlow.png";
import serviceFlow from "../img/process/serviceFlow.png";
import wireframe from "../img/process/wireframe.png";
import "../styles/IAPage.css";
import MainHeader from "../components/MainHeader";

const iaItems = ["홈", "식단기록", "AI 분석 카메라", "마이케어", "피드"];

export function ProcessSections() {
  const heroRef = useRef(null);
  const iaRef = useRef(null);
  const flowRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [iaVisible, setIaVisible] = useState(false);
  const [flowVisible, setFlowVisible] = useState(false);

  useEffect(() => {
    const heroNode = heroRef.current;
    const iaNode = iaRef.current;
    const flowNode = flowRef.current;
    if (!heroNode || !iaNode || !flowNode) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === heroNode) setHeroVisible(true);
          if (entry.target === iaNode) setIaVisible(true);
          if (entry.target === flowNode) setFlowVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(heroNode);
    observer.observe(iaNode);
    observer.observe(flowNode);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className={`detail-hero process-hero${heroVisible ? " is-visible" : ""}`} id="system" ref={heroRef}>
        <div className="detail-hero-copy">
          <p>Information Architecture</p>
          <h1>복잡한 건강 관리를<br />직관적인 흐름으로 연결하다</h1>
        </div>
        <p className="detail-hero-desc">
          노토마토의 정보 구조는 사용자가 식단, 건강 정보, 복약 관리까지의 과정을 자연스럽게 이해하고 이용할 수 있게 체계적으로 설계되었습니다. 질환 관리 과정에서 발생하는 복잡한 정보 흐름을 정리하고, 데이터가 유기적으로 연결되도록 구성하여 사용 경험의 연속성과 효율성을 높였습니다. 또한 식품 선택부터 건강 기록, 복약 관리까지의 기능을 논리적인 위계 구조로 배치해 사용자가 현재 필요한 정보를 빠르게 인지할 수 있도록 최적화했습니다.
        </p>
      </section>

      <section className={`detail-ia-section${iaVisible ? " is-visible" : ""}`} ref={iaRef}>
        <div className="detail-ia-copy">
          <h2>Information Architecture<br />& WireFrame</h2>
          <p>
            질환별 맞춤 식이 가이드를 제공받기 위한 최적화된 사용자 여정을 설계했습니다. 또한 불필요한 단계를 덜어내고 핵심 관리 기능으로 빠르게 연결되는 효율적인 흐름을 완성했습니다.
          </p>
          <div className="detail-chip-row">
            {iaItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="detail-flow-component">
          <h2>Flow Chart Component</h2>
          <img src={flowChartComponent} alt="flow chart component" />
        </div>
      </section>

      <section className={`detail-app-flow-section${flowVisible ? " is-visible" : ""}`} ref={flowRef}>
        <div className="detail-flow-block detail-login-flow">
          <h2>Login & Sign-Up Flow</h2>
          <img src={loginFlow} alt="login and sign-up flow" />
        </div>
        <div className="detail-flow-block detail-service-flow">
          <h2>Service Flow</h2>
          <img src={serviceFlow} alt="service flow" />
        </div>
      </section>

      <section className="wireframe-section">
        <img src={wireframe} alt="notomato wireframe" />
      </section>
    </>
  );
}

function ProcessDetailPage() {
  return (
    <main className="detail-page process-detail">
      <MainHeader active="process" />

      <ProcessSections />

      <Footer />
    </main>
  );
}

export default ProcessDetailPage;
