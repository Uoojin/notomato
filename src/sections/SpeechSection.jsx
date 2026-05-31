import React, { useEffect, useRef, useState } from "react";
import speechBubble from "../img/speechbubble.png";

function SpeechSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const bubbles = [
    ["당 함량은 얼마지?", "bubble-a"],
    ["성분표를 봐도 너무 복잡해...", "bubble-b"],
    ["지금 먹는 약이 음식이랑 같이 먹어도 되나?", "bubble-c"],
    ["한 입 먹인건데.. 응급실 가야하나..?", "bubble-d"],
    ["", "bubble-e"],
    ["", "bubble-f"],
    ["", "bubble-g"],
  ];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.36 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={isVisible ? "speech-section is-visible" : "speech-section"} ref={sectionRef}>
      {bubbles.map(([text, className]) => (
        <div className={`speech ${className}`} key={className} style={{ backgroundImage: `url(${speechBubble})` }}>
          {text}
        </div>
      ))}
      <h2><span>식이관리의 기준이 필요한</span> 당신을 위해</h2>
    </section>
  );
}

export default SpeechSection;
