import { useContext } from "react";
import { languageContext } from "../contexts/LanguageContext";

export const useLanguage = ()=>{
    const context = useContext(languageContext)
    if(!context){
        throw new Error('useLanguage debe utilizarse dentro de un LanguageProvider')

    }
    return context
}