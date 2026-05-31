import React from "react";
import journeyMap from "../img/journeymap.png";
import persona1 from "../img/persona1.png";
import persona2 from "../img/persona2.png";

function PersonaSection() {
  return (
    <section className="persona-section" id="persona">
      <p className="section-kicker">Persona</p>
      <div className="persona-zone">
        <img className="persona-complete" src={persona1} alt="김민수 페르소나" />
        <img className="persona-complete" src={persona2} alt="박지연 페르소나" />
      </div>
      <div className="journey">
        <p className="journey-section-kicker">Journey Map</p>
        <span>식사 전부터 기록까지, 사용자의 행동 흐름</span>
        <img src={journeyMap} alt="notomato journey map" />
      </div>
    </section>
  );
}

export default PersonaSection;
