import { createContext, useState, useEffect } from 'react';
import english from './db/english.json';
import turkish from './db/turkish.json';

interface ILanguageData {
  en: typeof english;
  tr: typeof turkish;
  [key: string]: any;
}

export const LanguageContext = createContext({
  language: 'english',
  languageData: {},
  setLanguage: (_language: string) => {},
});

export function useLanguage() {
  const languageData: ILanguageData = {
    en: english,
    tr: turkish,
  };

  const [language, setLanguage] = useState('en');

  const setLanguageSafe = (newLanguage: string) => {
    if (languageData[newLanguage]) {
      setLanguage(newLanguage);
    } else {
      setLanguage('en');
    }
  };

  useEffect(() => {
    const listener = (userPreferences: any) => {
      setLanguageSafe(userPreferences.language);
    };
  
    window.electron.ipcRenderer.on('load-user-preferences', listener);
  
    return () => {
      window.electron.ipcRenderer.removeAllListeners('load-user-preferences');
    };
  }, []);

  return {
    language,
    languageData: languageData[language],
    setLanguage: setLanguageSafe,
  };
}