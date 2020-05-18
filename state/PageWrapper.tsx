import  {  createContext, useContext } from "react";
import { useToggle, ToggleState } from "../hooks";

interface ReferenceState {
    isReferenceOpen: boolean;
    toggleReference?: () => void;
    isSafetyInfoOpen: boolean;
    toggleSafetyInfo?: () => void;
}

export const AppContext = createContext<ReferenceState>({
    isReferenceOpen: false,
    isSafetyInfoOpen: false
});


export const PageWrapper:React.FC = ({ children }) => {
    const refState: ToggleState  = useToggle(false);
    const safetyInfoState: ToggleState  = useToggle(false);

    return (
        <AppContext.Provider
            value={{
                isReferenceOpen: refState.isToggled,
                toggleReference: refState.toggle,
                isSafetyInfoOpen: safetyInfoState.isToggled,
                toggleSafetyInfo: safetyInfoState.toggle,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppState = () => useContext(AppContext);
