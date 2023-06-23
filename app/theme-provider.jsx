"use client";

import { createContext } from "react";

export const ThemeContext = createContext("");

export default function ThemeProvider({ children }) {
    return (
        <ThemeContext.Provider attribute='class'>
            {children}
        </ThemeContext.Provider>
    );
}