import React from 'react';
import Particles from 'react-tsparticles';
import { loadBasic } from 'tsparticles-basic';

const Background = () => {
  const particlesInit = async (engine) => {
    await loadBasic(engine); // ✅ Correct engine loading
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#0f172a" }, // 🔵 Dark navy blue background
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 100,
            density: { enable: true, area: 800 },
          },
          color: { value: "#38bdf8" }, // 💙 Light blue particles (sky blue)
          opacity: {
            value: 0.9,
            random: true,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: { default: "bounce" },
          },
          links: { enable: false }, // ❌ No particle connections
        },
        detectRetina: true,
      }}
    />
  );
};

export default Background;
