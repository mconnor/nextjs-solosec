import { useState, useEffect } from "react";

type Hook = (key:string, initial:string) => [string, Function]


export const useLocalStorage: Hook = (key, initial) => {
    const item = window.localStorage.getItem(key);
    const [value, setValue] = useState<string>(item || initial);

    useEffect(() => {
        window.localStorage.setItem(key, value)
    }, [value, key]);

    return [value, setValue];
};
