import {Dispatch, SetStateAction, useState, useEffect} from "react";

const store = require("./store");
const fs = require("fs");

type Props = {
    key: string;
}

export const useFile = ({key}: Props): [string, Dispatch<SetStateAction<string>>] => {
    let initial;
    get();

    function get() {
        fs.readFile("./store", function (err, data) {

            // Check for errors
            if (err) throw err;

            // Converting to JSON
            initial = JSON.parse(data)[key];
        });
    }


    const [cookie, setCookie] = useState(initial);


    useEffect(() => {
        Cookies.set(key, cookie);
    }, [cookie, key]);

    return [cookie, setCookie]
};