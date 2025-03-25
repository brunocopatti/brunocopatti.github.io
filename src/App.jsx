import { useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
 const { t, i18n: {changeLanguage, language} } = useTranslation();
 const [currentLanguage, setCurrentLanguage] = useState(language)
 const handleChangeLanguage = () => {
   const newLanguage = currentLanguage === "en" ? "pt" : "en";
   setCurrentLanguage(newLanguage);
   changeLanguage(newLanguage);
 }
 
 return (     
    <div>
      <p>{t("key")}</p> 
      <p>Current Language: {currentLanguage}</p>     
      <button 
        type="button" 
        onClick={handleChangeLanguage}
      >
        Change Language
      </button>
    </div>
 );
}

export default App;