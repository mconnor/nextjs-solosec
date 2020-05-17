import { useState } from "react";



export interface ToggleState {
    isToggled: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
    toggle: ()=> void;
  }


export const useToggle = (initial:boolean): ToggleState => {
  const [isToggled, setToggle] = useState<boolean>(initial);
  const toggle = () => setToggle(prevState => !prevState);
  // Rename output, multiple uses of hook
  // return [isToggled, setToggle, toggle];

  // Named properties, no order in return
  return { isToggled, setToggle, toggle };
};
