import { useState, useEffect } from "react";
import { CssVariables } from "../types/variables";

const useCssVariables = (): CssVariables => {
    const [variables, setVariables] = useState<CssVariables>({
        background: "",
        backgroundCards: "",
        gradientText: "",
        gradientColorText: "",
        whiteColor: "",
        blackColor: "",
        colorShadow: "",
        backgroundCardsShadow: "",
    });

    useEffect(() => {
        const getCssVariables = (): CssVariables => {
            const root = document.documentElement;
            return {
                background: getComputedStyle(root).getPropertyValue("--background").trim(),
                backgroundCards: getComputedStyle(root).getPropertyValue("--background-cards").trim(),
                gradientText: getComputedStyle(root).getPropertyValue("--gradient-text").trim(),
                gradientColorText: getComputedStyle(root).getPropertyValue("--gradient-color-text").trim(),
                whiteColor: getComputedStyle(root).getPropertyValue("--white-color").trim(),
                blackColor: getComputedStyle(root).getPropertyValue("--black-color").trim(),
                colorShadow: getComputedStyle(root).getPropertyValue("--color-shadow").trim(),
                backgroundCardsShadow: getComputedStyle(root).getPropertyValue("--background-cards-shadow").trim(),
            };
        };

        setVariables(getCssVariables());
    }, []);

    return variables;
};

export default useCssVariables;
