import React, { useEffect, useRef } from "react";
import videoSrc from "../img/Video.mp4";

function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    video.muted = false;
    video.volume = 1;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = false;
          video.play().catch(() => {
            video.muted = true;
            video.play().catch(() => {});
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="video-section section-full" id="video">
      <video
        ref={videoRef}
        className="video-player"
        autoPlay
        controls
        playsInline
        loop
        preload="metadata"
        aria-label="notomato service video"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </section>
  );
}

export default VideoSection;
