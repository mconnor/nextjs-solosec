// import {Dispatch, SetStateAction, useState, useEffect} from "react";
//
// const store = require("./store");
// const fs = require("fs");
//
// type Props = {
//     key: string;
// }
//
// export const useFile = ({key}: Props): [string, Dispatch<SetStateAction<string>>] => {
//     const [cookie, setCookie] = useState();
//     get();
//
//     function get() {
//         fs.readFile("./store", function (err, data) {
//
//             // Check for errors
//             if (err) throw err;
//
//             // Converting to JSON
//             setCookie(JSON.parse(data)[key]);
//         });
//     }
//
//     useEffect(() => {
//         Cookies.set(key, cookie);
//     }, [cookie, key]);
//
//     return [cookie, setCookie]
// };

import {Dispatch, SetStateAction, useState, useEffect} from "react";
import Cookies from "js-cookie";

type Props = {
    key: string;
}

export const useFile = ({key}: Props): [string, Dispatch<SetStateAction<string>>] => {
    const initial = Cookies.get(key) ?? '';
    const [cookie, setCookie] = useState(initial);

    useEffect(() => {
        Cookies.set(key, cookie);
    }, [cookie, key]);

    return [cookie, setCookie]
};