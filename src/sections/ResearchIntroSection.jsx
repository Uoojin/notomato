import React from "react";
import researchPeople from "../img/research_people.png";

function ResearchIntroSection() {
  return (
    <section className="research-intro" id="research">
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
    </section>
  );
}

export default ResearchIntroSection;
