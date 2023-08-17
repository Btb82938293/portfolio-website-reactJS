import React from "react";
import Typewriter from "typewriter-effect";

export default function Type() {
    return (
        <Typewriter
      options={{
        strings: [
          "React Developer",
          "Freelancer",
          "Teacher of English",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    )
}