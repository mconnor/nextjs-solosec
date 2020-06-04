import React from "react";

export function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(defaultValue);

    React.useEffect(() => {
        const stickyValue = window.localStorage.getItem(key);

        if (stickyValue !== null) {
            setValue(JSON.parse(stickyValue));
        }
    }, [key]);

    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}