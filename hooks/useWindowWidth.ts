// import { useState, useEffect } from "react";
import * as React from "react";
export const useWindowWidth = () => {
    const [width, setWidth] = React.useState(1366);

    React.useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window && window.addEventListener("resize", handleResize);
        return () => {
            window && window.removeEventListener("resize", handleResize);
        };
    });

    return width;
};
