import { useEffect, useState } from "react";

const LanguageSelect = () => {
  const [language, setLanguage] = useState("EN");

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,bn,nl,de",
      },
      "google_translate_element"
    );
  };

  const setGoogleTranslateLanguage = (lang) => {
    const combo = document.querySelector(".goog-te-combo");
    
    if (combo) {
      combo.value = lang.toLowerCase();
      const event = new Event("change", { bubbles: true });
      combo.dispatchEvent(event);
    }
  };

  const handleSelectLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);

    window.location.reload(); 

    setTimeout(() => setGoogleTranslateLanguage(lang), 500);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = googleTranslateElementInit;

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLanguage(savedLang);
      setTimeout(() => setGoogleTranslateLanguage(savedLang), 1500);
    }
  }, []);

  return (
    <li className="lang-item">
      <div className="lang-circle">
        🌐
        <span>{language}</span>
      </div>

      <ul className="lang-options">
        <li onClick={() => handleSelectLanguage("EN")}>EN</li>
        <li onClick={() => handleSelectLanguage("BN")}>BN</li>
        <li onClick={() => handleSelectLanguage("NL")}>NL</li>
        <li onClick={() => handleSelectLanguage("DE")}>DE</li>
      </ul>

      <div id="google_translate_element" style={{ display: "none" }}></div>
    </li>
  );
};

export default LanguageSelect;
