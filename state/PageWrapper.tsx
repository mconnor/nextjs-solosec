import  {  createContext, useContext } from "react";
import { useToggle, ToggleState, useSection, SectionState } from "../hooks";


interface ReferenceState {
    isReferenceOpen: boolean;
    toggleReference?: () => void;

    currSection?:string;
    setCurrentSection?: (newSection:string) => void;
    
    isSafetyInfoOpen: boolean;
    toggleSafetyInfo?: () => void;

    isPrescribingInfoOpen: boolean;
    togglePrescribingInfo?: () => void;


    isNavOpen: boolean;
    toggleNav?: () => void;
    setNav?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<ReferenceState>({

    isReferenceOpen: false,
    isSafetyInfoOpen: false,
    isPrescribingInfoOpen: false,
    isNavOpen: false
});

export const PageWrapper:React.FC = ({ children }) => {
    const sectionState: SectionState = useSection('');
    const refState: ToggleState  = useToggle(false);
    const safetyInfoState: ToggleState  = useToggle(false);
    const prescribingInfoState: ToggleState  = useToggle(false);
    const navState: ToggleState  = useToggle(false);

    return (
        <AppContext.Provider
            value={{
                currSection: sectionState.section,
                setCurrentSection: sectionState.setSection,

                isReferenceOpen: refState.isToggled,
                toggleReference: refState.toggle,

                isSafetyInfoOpen: safetyInfoState.isToggled,
                toggleSafetyInfo: safetyInfoState.toggle,

                isPrescribingInfoOpen: prescribingInfoState.isToggled,
                togglePrescribingInfo: prescribingInfoState.toggle,

                isNavOpen: navState.isToggled,
                toggleNav: navState.toggle,
                setNav: navState.setToggle,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppState = () => useContext(AppContext);
