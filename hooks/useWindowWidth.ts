import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1366);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") setWidth(window.innerWidth);
    };
    if (typeof window !== "undefined") window.addEventListener("resize", handleResize);
    return () => {
      if (typeof window !== "undefined") window.removeEventListener("resize", handleResize);
    };
  });

  return width;
};
