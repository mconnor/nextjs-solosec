import { useState, useMemo } from "react";


interface  bindInterface {
    onMouseOver: () => void;
    onMouseLeave: () => void;
}

export const useHover = ():[boolean, bindInterface]=> {
  const [isHovered, setIsHovered] = useState(false);
//
  const bind = useMemo(() => {
    return {
      onMouseOver: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    };
  }, []);

  return [isHovered, bind];
};
