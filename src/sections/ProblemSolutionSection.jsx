import React from "react";
import icon1 from "../img/icon1.png";
import icon3 from "../img/icon3.png";
import icon4 from "../img/icon4.png";

const problemItems = [
  {
    title: "식품 선택의 불확실성",
    text: <>복잡한 영양 성분표와 질환별로 <span>상이한 제한 수치</span> 때문에 매번 선택의 기로에서 불안감을 느낍니다. 단순한 칼로리 계산을 넘어선 매디컬 기준의 <span>명확한 가이드</span>가 부재합니다.</>,
  },
  {
    title: "복약과 식단의 위험한 상호작용",
    text: <>약과 음식이 만나면 때로는 독이 될 수 있습니다. 하지만 일반인은 어떤 약에 특정 음식과 충돌하는지 알기 어렵고, 기존 서비스들은 복약과 식단을 <span>통합하여 분석</span>해주지 못하고 있습니다.</>,
  },
  {
    title: "관리의 높은 심리적 허들",
    text: <>식이 관리는 '평생' 지속되어야 하지만, 매 끼니 기록하고 계산하는 과정은 큰 피로감을 줍니다. 보호자의 <span>관리 부담이 가중</span>되면서 시간이 흐를수록 관리가 느슨해지거나 포기하게 되는 <span>구조적 한계가 존재</span>합니다.</>,
  },
];

const solutionItems = [
  {
    title: "질환 맞춤 식품 분석",
    text: "바코드 스캔으로 질환 기준에 맞는 식품인지 확인할 수 있습니다.",
    icon: icon3,
  },
  {
    title: "AI 기반 식사 피드백",
    text: "촬영된 식단을 분석해 건강 상태에 맞는 맞춤형 피드백을 제공합니다.",
    icon: icon1,
  },
  {
    title: "복약·식단 통합 관리",
    text: "복용 중인 약과 음식 간 상호작용을 분석해 안전한 식사를 돕습니다.",
    icon: icon4,
  },
];

function ProblemSolutionSection() {
  return (
    <section className="problem-section" id="problem">
      <p className="section-kicker">Problem</p>
      <h2>매끼 반복되는 선택의 기로, 지쳐가는 환자와 보호자의 일상</h2>
      <p className="lead">
        단순한 식단 관리를 넘어 의학적 수준의 정교한 관리가 필요하지만, 현실은 정보의 불균형과 심리적 부담이라는 높은 장벽에 가로막혀 있습니다.
      </p>
      <div className="problem-cards">
        {problemItems.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      <div className="solution-arc" id="solution">
        <span className="solution-dot" aria-hidden="true" />
        <p className="section-kicker">Solution</p>
        <h2>데이터를 통해 불안을 확신으로 바꾸는 안심 식사 솔루션</h2>
        <p>
          노토마토는 소외된 질환자를 위해 사용자의 질환·복약·식단 데이터를 통합 분석하여 최적화된 식사 환경을 설계합니다. 정보의 장벽을 허물어 질환자와 보호자 모두가 안심하고 편리하게 식사할 수 있는 일상을 현실로 만듭니다. 우리는 데이터 기반의 정교한 관리를 통해, 일상 속 의료 식이 관리의 새로운 기준을 제시하고 해결합니다.
        </p>
        <div className="solution-cards">
          {solutionItems.map((item) => (
            <article key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <img src={item.icon} alt="" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSolutionSection;
