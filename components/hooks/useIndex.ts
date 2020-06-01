import { useState } from "react";


export interface IndexState {
    index:number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
  }


export const useIndex = (initial:number): IndexState => {
  const [index, setIndex] = useState<number>(initial);
  
  return { index, setIndex };
};
