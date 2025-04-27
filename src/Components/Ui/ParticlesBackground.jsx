import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';


const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "#ffffff" } },
        particles: {
          number: { value: 80 },
          color: { value: "#4328c7" },
          links: {
            enable: true,
            color: "#4328c7",
            distance: 150,
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            outModes: { default: "bounce" }
          },
          size: { value: { min: 1, max: 5 } },
          opacity: { value: 0.5 }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 }
          }
        }
      }}
      style={{
        position: "absolute",
        zIndex: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default ParticlesBackground;
