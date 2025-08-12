import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "DevOps Engineer",
          "Android App Developer",
          "Software Developer",
          "Automation Tester",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 45,
      }}
    />
  );
}

export default Type;
