import React, { useEffect, useRef, useState } from "react";
import researchPeople from "../img/research_people.png";

const diseaseData = [
  { name: "고혈압", color: "#ff5aa0", percent: "22.2%", active: 23 },
  { name: "당뇨", color: "#ffec3d", percent: "10.6%", active: 5 },
  { name: "선천성 대사질환", color: "#71fede", percent: "0.02%", active: 1 },
];

function ResearchIntroSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.24 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`research-intro${visible ? " is-visible" : ""}`} id="research" ref={sectionRef}>
      <div className="research-grid">
        <img src={researchPeople} alt="" />
        <div className="research-copy">
          <p className="section-kicker">Research</p>
          <h2>환자들은 ‘안전하게 먹을 수 있는 기준’을 원합니다</h2>
          <blockquote>“성인 5명 중 1명은 만성 질환 2개 이상 앓는다...12년간 1.7배 늘어...”</blockquote>
          <p>
            성인 19.7%가 복합 만성질환을 앓고 있으며, 이는 12년 전보다 1.7배 급증한 수치입니다. 전체 사망의 80%가 만성질환에 기인하는 만큼, 정교한 통합 식단 관리가 시급합니다.
          </p>
        </div>
      </div>
      <div className="research-disease-row" aria-label="질환별 비율 그래프">
        {diseaseData.map((item, index) => (
          <article className="research-disease-card" style={{ "--accent": item.color, "--card-delay": `${index * 420}ms` }} key={item.name}>
            <div className="research-dot-graph">
              {Array.from({ length: 50 }, (_, dotIndex) => (
                <span
                  className={dotIndex < item.active ? "active" : undefined}
                  style={{ "--dot-delay": `${index * 420 + dotIndex * 28}ms` }}
                  key={`${item.name}-${dotIndex}`}
                />
              ))}
            </div>
            <strong>{item.percent}</strong>
            <p>{item.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ResearchIntroSection;
