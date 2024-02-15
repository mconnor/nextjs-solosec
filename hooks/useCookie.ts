import {Dispatch, SetStateAction, useState, useEffect} from "react";
import Cookies from "js-cookie";

type Props = {
    key: string;
}

export const useCookie = ({key}: Props): [string, Dispatch<SetStateAction<string>>] => {
    const initial = Cookies.get(key) ?? '';
    const [cookie, setCookie] = useState(initial);

    useEffect(() => {
        Cookies.set(key, cookie, {
            sameSite: 'strict'
        });
    }, [cookie, key]);

    return [cookie, setCookie]
};