'use client';

import { ThemeContext, useThemeContext } from "@/contexts/theme-context"
import { useContext } from "react"

export default function Logo(){
    const {theme, setTheme} = useThemeContext()

    return (
        <h1 className="text-white font-semibold text-xl">SpotterFlights</h1>
    )
}