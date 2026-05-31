import React, { useEffect, useRef, useState } from "react";

const diseaseData = [
  {
    name: "고혈압",
    color: "#ff5aa0",
    percent: "19.7%",
    active: 20,
    description:
      "복합 만성질환의 출발점이 되는 고혈압은 식단 속 나트륨과 열량 관리가 일상적으로 필요합니다.",
  },
  {
    name: "당뇨",
    color: "#f4ce3f",
    percent: "14.8%",
    active: 15,
    description:
      "혈당 변동을 줄이기 위해 탄수화물과 당 함량을 빠르게 판단할 수 있는 기준이 필요합니다.",
  },
  {
    name: "선천성 대사질환",
    color: "#67d9cf",
    percent: "0.02%",
    active: 1,
    description:
      "0.02%의 확률, 5,000명 중 단 한 명. 희귀질환자에게 식단은 선택이 아닙니다.",
  },
  {
    name: "기타",
    color: "#b579f5",
    percent: "8.6%",
    active: 9,
    description:
      "복약, 알레르기, 소화 기능처럼 개인마다 다른 조건도 식사 판단에 함께 반영되어야 합니다.",
  },
];

function DiseasePanel({ item, index, active }) {
  const dots = Array.from({ length: 100 }, (_, dotIndex) => dotIndex < item.active);

  return (
    <article className={active ? "disease-panel active" : "disease-panel"} style={{ "--accent": item.color }}>
      <div className="disease-copy">
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <strong>{item.percent}</strong>
      </div>
      <div className="dot-graph" aria-label={`${item.name} 비율 그래프`}>
        {dots.map((isActive, dotIndex) => (
          <span className={isActive ? "active" : ""} key={`${index}-${dotIndex}`} />
        ))}
      </div>
    </article>
  );
}

function DiseaseScroller() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const updateActivePanel = () => {
      const node = scrollerRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const scrollable = Math.max(rect.height - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 0.999);
      setActiveIndex(Math.floor(progress * diseaseData.length));
    };

    updateActivePanel();
    window.addEventListener("scroll", updateActivePanel, { passive: true });
    window.addEventListener("resize", updateActivePanel);
    return () => {
      window.removeEventListener("scroll", updateActivePanel);
      window.removeEventListener("resize", updateActivePanel);
    };
  }, []);

  return (
    <section className="disease-scroll" aria-label="질환별 세부 그래프" ref={scrollerRef}>
      <div className="disease-sticky">
        {diseaseData.map((item, index) => (
          <DiseasePanel item={item} index={index} key={item.name} active={activeIndex === index} />
        ))}
      </div>
    </section>
  );
}

export default DiseaseScroller;
