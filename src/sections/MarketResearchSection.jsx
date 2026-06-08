import React, { useEffect, useRef, useState } from "react";
import market from "../img/market.png";

const marketItems = [
  ["필라이즈", "개인 건강 데이터를 기반으로 한 맞춤형 헬스케어"],
  ["밀리그램", "지속적인 동기부여를 통해 건강한 체중 관리를 지원"],
  ["Cronometer", "정밀 영양 분석을 통한 데이터 기반 건강 관리"],
];

function MarketResearchSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`market-section${visible ? " is-visible" : ""}`} ref={sectionRef}>
      <div className="market-heading">
        <p className="section-kicker">Market Research</p>
        <span>주요 경쟁 서비스의 포지셔닝을 분석하여 노토마토의 차별적 가치와 방향성을 도출했습니다.</span>
      </div>
      <div className="market-layout">
        <img src={market} alt="notomato market research positioning map" />
        <div className="market-list">
          {marketItems.map(([title, text], index) => (
            <article style={{ "--delay": `${index * 220}ms` }} key={title}>
              <span className="market-line" aria-hidden="true" />
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MarketResearchSection;
