import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "DevOps Engineer",
          "Site Reliability Engineer",
          "IT Enthusiast",
          "Moto-Vlogger",
          "Explorer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 45,
      }}
    />
  );
}

export default Type;
