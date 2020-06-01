import { useState } from "react";


export interface SectionState {
    section:string;
    setSection: React.Dispatch<React.SetStateAction<string>>;
  }


export const useSection = (initial:string): SectionState => {
  const [section, setSection] = useState<string>(initial);
  
  return { section, setSection };
};
