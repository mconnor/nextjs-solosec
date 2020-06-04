import { Dispatch, SetStateAction, useState, useEffect } from "react";
import Cookies from "js-cookie";


type Props = {
    key: string;
}

export const useCookie = ({ key }: Props): [string, Dispatch<SetStateAction<string>>] => {
    //const initial = Cookies.get(key) ?? '';
    const initial = typeof window !== 'undefined' && localStorage.getItem(key) || '';
    const [cookie, setCookie] = useState(initial);

    useEffect(() => {
        //Cookie.set(key, cookie);
        typeof window !== 'undefined' && localStorage.setItem(key, cookie);
    }, [cookie, key]);

    return [cookie, setCookie]
};