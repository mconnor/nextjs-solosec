import {Dispatch, SetStateAction, useState, useEffect} from "react";
import Cookies from "js-cookie";
//const MemoryStorage = require('memorystorage');
// here, the MemoryStorage function is available
//const store = new MemoryStorage();

type Props = {
    key: string;
}

export const useCookie = ({key}: Props): [string, Dispatch<SetStateAction<string>>] => {
    const initial = Cookies.get(key) ?? '';
    //const initial = useLocalStorage(key) ?? '';
    //const initial = store.getItem(key) || ''
    const [cookie, setCookie] = useState(initial);

    useEffect(() => {
        Cookies.set(key, cookie, {
            sameSite: 'strict'
        });
        //writeStorage.set(key, cookie);
        //store.setItem(key, cookie);
    }, [cookie, key]);

    return [cookie, setCookie]
};