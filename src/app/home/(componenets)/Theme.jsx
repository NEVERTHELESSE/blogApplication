"use client";

import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Theme() {
  const [islight, setIslight] = useState(true);
  const changetheme = () => {
    setIslight(!islight);
    if (islight) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  };
  return (
    <div>
      {islight ? (
        <FaMoon onClick={changetheme} className="cursor-pointer" />
      ) : (
        <FaSun onClick={changetheme} className="cursor-pointer" />
      )}
    </div>
  );
}

export default Theme;
