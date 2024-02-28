/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const languageContext = createContext()

export default function LanguageProvider({children}) {
    const [language,setLanguage]= useState("Spanish")

    return(
        <languageContext.Provider 
        value={{
            language,
            setLanguage
            }}>
        {children}
        </languageContext.Provider>
    )
}