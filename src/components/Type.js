import React from "react";
import Typewriter from "typewriter-effect";

export default function Type() {
    return (
        <Typewriter
      options={{
        strings: [
          "React Developer",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    )
}