import  {  createContext, useContext } from "react";
import { useToggle, ToggleState } from "../hooks";

interface MenuState {
    isMenuOpen: boolean;
    toggleMenu?: () => void;
}

export const AppContext = createContext<MenuState>({
    isMenuOpen: false,
});


export const PageWrapper:React.FC = ({ children }) => {
    const { isToggled, toggle }: ToggleState = useToggle(false);

    return (
        <AppContext.Provider
            value={{
                isMenuOpen: isToggled,
                toggleMenu: toggle
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppState = () => useContext(AppContext);
