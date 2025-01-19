import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import ThemeContextProvider from "@/contexts/theme-context";
import { AppProvider } from "@/contexts/app-context";



export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
        <ThemeContextProvider>
         {children}
        </ThemeContextProvider>
        </AppProvider>
      </body>
    </html>
  );
}
