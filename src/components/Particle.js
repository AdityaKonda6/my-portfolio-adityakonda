import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 80, // Moderate amount for visibility and performance
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.3,
          },
          move: {
            direction: "none",
            speed: 1.2, // Smooth, continuous movement
            random: true,
            straight: false,
            out_mode: "out",
          },
          size: {
            value: 2, // Slightly larger for visibility
          },
          opacity: {
            value: 0.7, // More visible particles
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
