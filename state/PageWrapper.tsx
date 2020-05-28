import  {  createContext, useContext } from "react";
import { useToggle, ToggleState, useSection, SectionState, useIndex, IndexState } from "../hooks";


interface ReferenceState {

    isaQAopen:boolean;
    toggleQA?: () => void;
    setQA?: React.Dispatch<React.SetStateAction<boolean>>;


    isReferenceOpen: boolean;
    toggleReference?: () => void;
// this is new
    currSection?:string;
    setCurrentSection?: (newSection:string) => void;

    currPageIndex?:number;
    setCurrPageIndex?: (newSection:number) => void;
    
    
    isSafetyInfoOpen: boolean;
    toggleSafetyInfo?: () => void;
    setSafteyInfo?: React.Dispatch<React.SetStateAction<boolean>>;
    
    isInitSafetyInfoOpen: boolean;
    setInitSafteyInfo?: React.Dispatch<React.SetStateAction<boolean>>;

    isPrescribingInfoOpen: boolean;
    togglePrescribingInfo?: () => void;

    currSeq?:string;
    setCurrentSequence?: (newSeq:string) => void;

    isNavOpen: boolean;
    toggleNav?: () => void;
    setNav?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<ReferenceState>({
    currPageIndex:0,

    isaQAopen:false,
    isInitSafetyInfoOpen:true,
    isReferenceOpen: false,
    isSafetyInfoOpen: true,
    isPrescribingInfoOpen: false,
    isNavOpen: false,
    currSeq: "",
});

export const PageWrapper:React.FC = ({ children }) => {
    const sectionState: SectionState = useSection('');
    const refState: ToggleState  = useToggle(false);
    const safetyInfoState: ToggleState  = useToggle(false);
    const initSafetyInfoState: ToggleState  = useToggle(true);
    const prescribingInfoState: ToggleState  = useToggle(false);
    const qaState: ToggleState  = useToggle(false);
   
    const navState: ToggleState  = useToggle(false);
    const pageState: IndexState  = useIndex(0);

    const seqState:SectionState = useSection('');
   

    return (
        <AppContext.Provider
            value={{
                currPageIndex: pageState.index,
                setCurrPageIndex: pageState.setIndex,

                currSection: sectionState.section,
                setCurrentSection: sectionState.setSection,

                currSeq: seqState.section,
                setCurrentSequence: seqState.setSection,


                isReferenceOpen: refState.isToggled,
                toggleReference: refState.toggle,

                isSafetyInfoOpen: safetyInfoState.isToggled,
                toggleSafetyInfo: safetyInfoState.toggle,
                setSafteyInfo:safetyInfoState.setToggle,        

                isPrescribingInfoOpen: prescribingInfoState.isToggled,
                togglePrescribingInfo: prescribingInfoState.toggle,

                isInitSafetyInfoOpen: initSafetyInfoState.isToggled,
                setInitSafteyInfo: initSafetyInfoState.setToggle,

                isNavOpen: navState.isToggled,
                toggleNav: navState.toggle,
                setNav: navState.setToggle,

                isaQAopen: qaState.isToggled,
                toggleQA: qaState.toggle,
                setQA: qaState.setToggle
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppState = () => useContext(AppContext);
