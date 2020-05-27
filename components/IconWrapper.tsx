import { IconContext } from "react-icons";
import { ReactNode }  from 'react';

interface ChildrenProps  {
    children: ReactNode;
    kolor: string;
    size: string | undefined;
 
}


const IconWrapper: React.FC<ChildrenProps> = ({ children, kolor, size }) => {
    return (
        <IconContext.Provider value={{ color: kolor, size: size, className: "global-class-name" }}>
        <div>
           {children}
        </div>
    </IconContext.Provider>
    )
}

export default IconWrapper
