import React from "react";
import journeyMap from "../img/journeymap_final.png";
import personaFinal from "../img/persona_final.png";

function PersonaSection() {
  return (
    <section className="persona-section" id="persona">
      
      <div className="persona-zone">
        <p className="section-kicker-p">Persona</p>
        <img className="persona-complete" src={personaFinal} alt="notomato persona" />
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
