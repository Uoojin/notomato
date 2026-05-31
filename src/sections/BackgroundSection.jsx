import React from "react";
import bannerLogo from "../img/banner_logo.png";

function BackgroundSection() {
  return (
    <section className="background-wrap" id="background">
      <div className="background-card">
        <p className="section-kicker light">Background</p>
        <h2>모든 사람들의 식탁에는<br />저마다의 기준이 필요합니다.</h2>
        <p>
          만성질환자는 질환과 복약 상태에 따라 매 끼니 식사를 직접 판단해야 하지만, 기존 식이 관리 서비스는 개인별 조건을 충분히 반영하지 못한다는 한계가 있습니다. 이에 본 프로젝트는 질환 정보와 복약 데이터를 통합 분석해 음식 사진만으로 안전한 식사 여부를 판단할 수 있는 초기 안심 식이 관리 플랫폼 ‘노토마토’를 제작하였습니다.
        </p>
        <img src={bannerLogo} alt="" />
      </div>
    </section>
  );
}

export default BackgroundSection;
