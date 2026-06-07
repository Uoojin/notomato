import React, { useEffect, useRef, useState } from "react";
import icon1 from "../img/icon1.png";
import icon3 from "../img/icon3.png";
import icon4 from "../img/icon4.png";
import solutionBox from "../img/solutionBox.png";


function ProblemSolutionSection() {
  const problemRef = useRef(null);
  const solutionRef = useRef(null);
  const [problemVisible, setProblemVisible] = useState(false);
  const [solutionVisible, setSolutionVisible] = useState(false);

  useEffect(() => {
    const problemNode = problemRef.current;
    const solutionNode = solutionRef.current;
    if (!problemNode || !solutionNode) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === problemNode) setProblemVisible(true);
          if (entry.target === solutionNode) setSolutionVisible(true);
        });
      },
      { threshold: 0.24 }
    );

    observer.observe(problemNode);
    observer.observe(solutionNode);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`problem-section${problemVisible ? " is-visible" : ""}`} id="problem" ref={problemRef}>
      <p className="section-kicker">Problem</p>
      <h2>“매일 반복되는 식단 관리의 어려움”</h2>
      <p className="lead">
        질환 관리는 단순한 식단 조절을 넘어 복약과 건강 상태까지 고려한 정교한 관리가 필요합니다.
        <br />
        하지만 복잡한 정보와 반복되는 관리 과정은 환자와 보호자 모두에게 큰 부담으로 작용하며,
        <br />
        안전한 식사 선택을 어렵게 만듭니다.
      </p>
      <div className={`solution-arc${solutionVisible ? " is-visible" : ""}`} id="solution" ref={solutionRef}>
        <span className="solution-dot" aria-hidden="true" />
        <p className="section-kicker">Solution</p>
        <h2><span>데이터를 통해 불안을 확신으로 바꾸는 안심 식사 솔루션</span></h2>
        <p>
          노토마토는 소외된 질환자를 위해 사용자의 질환·복약·식단 데이터를 통합 분석하여 최적화된 식사 환경을 설계합니다. 정보의 장벽을 허물어 질환자와 보호자 모두가 안심하고 편리하게 식사할 수 있는 일상을 현실로 만듭니다. 우리는 데이터 기반의 정교한 관리를 통해, 일상 속 의료 식이 관리의 새로운 기준을 제시하고 해결합니다.
        </p>
        <div className="solution-cards">
          <div className="solution-box-card">
                <img className="solution-box-bg" src={solutionBox} alt="" />
                
      
              
              </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolutionSection;
