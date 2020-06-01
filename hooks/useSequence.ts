import { useState } from "react";


export interface SequenceState {
    sequence:string;
    setSequence: React.Dispatch<React.SetStateAction<string>>;
  }


export const useSequence = (initial:string): SequenceState => {
  const [sequence, setSequence] = useState<string>(initial);
  
  return { sequence, setSequence };
};
