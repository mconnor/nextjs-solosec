import { createContext, useContext } from "react";
import { useToggle, ToggleState, useSection, SectionState, useIndex, IndexState } from "../hooks";

// Add to global state as needed... carefully!
// use the hooks!
// simple global state module. Relies on custom hooks
// add the elements of your new state to each of the four components below


interface ReferenceState {

    isaQAopen: boolean;
    toggleQA?: () => void;
    setQA?: React.Dispatch<React.SetStateAction<boolean>>;


    isReferenceOpen: boolean;
    toggleReference?: () => void;

    currSection?: string;
    setCurrentSection?: (newSection: string) => void;

    currPIanchor?: string;
    setCurrentPIanchor?: (anchor: string) => void;

    currPageIndex?: number;
    setCurrPageIndex?: (newSection: number) => void;


    isSafetyInfoOpen: boolean;
    toggleSafetyInfo?: () => void;
    setSafteyInfo?: React.Dispatch<React.SetStateAction<boolean>>;


    isInitSafetyInfoOpen: boolean;
    setInitSafteyInfo?: React.Dispatch<React.SetStateAction<boolean>>;
    toggleInitSafetyInfo?: () => void;

    isPrescribingInfoOpen: boolean;
    setPrescribingInfo?: React.Dispatch<React.SetStateAction<boolean>>;
    togglePrescribingInfo?: () => void;

    currSeq?: string;
    setCurrentSequence?: (newSeq: string) => void;

    isNavOpen: boolean;
    toggleNav?: () => void;
    setNav?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<ReferenceState>({
    currPIanchor: '',
    currPageIndex: 0,
    isaQAopen: false,
    isInitSafetyInfoOpen: true,
    isReferenceOpen: false,
    isSafetyInfoOpen: true,
    isPrescribingInfoOpen: false,
    isNavOpen: false,
    currSeq: ""
});

export const PageWrapper: React.FC = ({ children }) => {
   

    // what section is user in
    const sectionState: SectionState = useSection('');
    // is ref modal open?
    const refState: ToggleState = useToggle(false);
    // is isi modal open?
    const safetyInfoState: ToggleState = useToggle(false);
    // is start screen isi modal open?
    const initSafetyInfoState: ToggleState = useToggle(true);

     // lastest pi user anchor link clicked in pi modal
     const piAnchorState: SectionState = useSection('');
    // is pi modal open?
    const prescribingInfoState: ToggleState = useToggle(false);


    const qaState: ToggleState = useToggle(false);
    // is nav modal open?
    const navState: ToggleState = useToggle(false);
    // page number
    const pageState: IndexState = useIndex(0);
    // section state... each page is assigned a section
    const seqState: SectionState = useSection('');

    // all this available anyhwere in the app
    // import { useAppState } from '[path]state';

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
                setSafteyInfo: safetyInfoState.setToggle,

                isPrescribingInfoOpen: prescribingInfoState.isToggled,
                togglePrescribingInfo: prescribingInfoState.toggle,
                setPrescribingInfo: prescribingInfoState.setToggle,

                currPIanchor: piAnchorState.section,
                setCurrentPIanchor: piAnchorState.setSection,

                isInitSafetyInfoOpen: initSafetyInfoState.isToggled,
                setInitSafteyInfo: initSafetyInfoState.setToggle,
                toggleInitSafetyInfo: initSafetyInfoState.toggle,

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
