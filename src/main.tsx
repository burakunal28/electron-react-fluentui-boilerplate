import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeContext } from './theme/ThemeContext';
import { FluentProvider } from '@fluentui/react-components';
import { lightTheme, darkTheme } from './theme/Theme';
import { LanguageContext } from './language/Language';
import { useLanguage } from './language/Language';

const Main = () => {
  const { language, languageData, setLanguage } = useLanguage();
  const [theme, setTheme] = useState(lightTheme);

  // Fetch user settings from electron and update language and theme
  useEffect(() => {
    window.electron.ipcRenderer.invoke('get-user-settings').then((settings: any) => {
      if (settings) {
        setLanguage(settings.language);
        setTheme(settings.theme === 'dark' ? darkTheme : lightTheme);
      }
    });
  }, []);

  // Update body class based on theme change
  useEffect(() => {
    if (theme === darkTheme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <LanguageContext.Provider value={{ language, languageData, setLanguage }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <FluentProvider theme={theme}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </FluentProvider>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};

// Render the Main component to the root element
ReactDOM.createRoot(document.getElementById('root')!).render(<Main />);

export default Main;