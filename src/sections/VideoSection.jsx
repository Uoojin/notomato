import React from "react";

function VideoSection() {
  return (
    <section className="video-section section-full" id="video">
      <video className="video-player" muted playsInline autoPlay loop preload="metadata" aria-label="notomato service video" />
      <span>Video</span>
    </section>
  );
}

export default VideoSection;
