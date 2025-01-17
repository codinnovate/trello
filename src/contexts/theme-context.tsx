'use client';

import { createContext, useContext, useState } from "react";



type Theme = 'dark' | 'light';

type ThemeContextType = {
    theme: Theme
    toggleTheme:() => void;
    
}

export const ThemeContext = createContext<ThemeContextType | null>(null);



export default function ThemeContextProvider({children}:{children:React.ReactNode}){
    const [theme, setTheme] = useState<Theme>('light');
    
    function toggleTheme(){
        setTheme(theme === 'dark' ? 'dark' : 'light');
    }
    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
                }}
                >
            {children}
        </ThemeContext.Provider>
    
    )
}


export  function useThemeContext(){
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error('ThemeContextProvider must be used within a ThemeContextProvider');
    }
    return context;
}