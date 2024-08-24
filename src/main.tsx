import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
import { FluentProvider, createDarkTheme, createLightTheme, type BrandVariants, type Theme } from '@fluentui/react-components';
import { ThemePreferenceContext } from './components/theme/ThemePreferenceContext';

const baseTheme: BrandVariants = { 
  10: "#09000C",
  20: "#280045",
  30: "#36006E",
  40: "#3C0098",
  50: "#3500CD",
  60: "#2119F4",
  70: "#2735FF",
  80: "#3C4CFF",
  90: "#4E5FFF",
  100: "#5E72FF",
  110: "#6E83FF",
  120: "#7F94FF",
  130: "#90A5FF",
  140: "#A1B6FF",
  150: "#B3C6FF",
  160: "#C7D6FF"
};
  
const lightTheme: Theme = createLightTheme(baseTheme);
const darkTheme: Theme = createDarkTheme(baseTheme);

darkTheme.colorBrandForeground1 = baseTheme[110]; 
darkTheme.colorBrandForeground2 = baseTheme[120];

const Main = () => {
  const [themePreference, setThemePreference] = useState('system');
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    const setTheme = (theme: Theme) => {
      const bodyClassList = document.body.classList;
      bodyClassList.remove('light', 'dark');
      bodyClassList.add(theme === lightTheme ? 'light' : 'dark');
      setCurrentTheme(theme);
    };

    const updateThemeBasedOnPreference = () => {
      switch (themePreference) {
        case 'light':
          setTheme(lightTheme);
          break;
        case 'dark':
          setTheme(darkTheme);
          break;
        default: {
          const mq = window.matchMedia('(prefers-color-scheme: dark)');
          setTheme(mq.matches ? darkTheme : lightTheme);
          break;
        }
      }
    };

    updateThemeBasedOnPreference();

    if (themePreference === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        setTheme(e.matches ? darkTheme : lightTheme);
      };

      mq.addEventListener('change', handleChange);
      return () => mq.removeEventListener('change', handleChange);
    }
  }, [themePreference]);

  const themeContextValue = React.useMemo(() => ({
    themePreference,
    setThemePreference
  }), [themePreference]);

  return (
    <ThemePreferenceContext.Provider value={themeContextValue}>
      <FluentProvider theme={currentTheme}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </FluentProvider>
    </ThemePreferenceContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);