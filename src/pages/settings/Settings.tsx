import React, { useContext, useState, useEffect } from 'react';
import { 
  Field, 
  Radio, 
  RadioGroup, 
  Text,
  Subtitle2Stronger,
  Button,
} from "@fluentui/react-components";
import {
  ArrowClockwiseFilled,
  Settings20Filled,
} from "@fluentui/react-icons";
import { useTheme } from "../../theme/ThemeContext";
import { lightTheme, darkTheme } from "../../theme/Theme";
import './Settings.css';
import { LanguageContext } from '../../language/Language';

function Settings() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useContext(LanguageContext);
  const { languageData } = useContext(LanguageContext) as { languageData: { [key: string]: string } };
  const [ hasChanges, setHasChanges ] = useState(false);
  const [ selectedLanguage, setSelectedLanguage ] = useState(language);
  const [ selectedTheme, setSelectedTheme ] = useState(theme === darkTheme ? 'dark' : 'light');

  useEffect(() => {
    window.electron.ipcRenderer.invoke('get-user-settings')
      .then((settings: any) => {
        if (settings) {
          setSelectedTheme(settings.theme);
        }
      });
  }, []);

  const handleLanguageChange = (_ev: React.FormEvent<HTMLDivElement>, data: any) => {
    setSelectedLanguage(data.value);
    setHasChanges(true); 
  };

  const handleThemeChange = (_ev: React.FormEvent<HTMLDivElement>, data: any) => {
    setSelectedTheme(data.value);
    setHasChanges(true); 
  };

  const handleSaveSettings = () => {
    const settings = {
      language: selectedLanguage,
      theme: selectedTheme,
    };
  
    setLanguage(selectedLanguage);
    
    switch (selectedTheme) {
      case "light":
        setTheme(lightTheme);
        window.electron.ipcRenderer.invoke('theme-change', 'light');
        break;
      case "dark":
        setTheme(darkTheme);
        window.electron.ipcRenderer.invoke('theme-change', 'dark');
        break;
      default:
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const systemTheme = mediaQuery.matches ? darkTheme : lightTheme;
        setTheme(systemTheme);
        window.electron.ipcRenderer.invoke('theme-change', mediaQuery.matches ? 'dark' : 'light');
    }
    window.electron.ipcRenderer.invoke('save-settings', settings);
    setHasChanges(false);
  };

  return (
    <>  
      <div className="settings-title-container">
        <div className="settings-title">
          <Settings20Filled />
          <Subtitle2Stronger>
            {languageData.settingsTitle}
          </Subtitle2Stronger>
        </div>
        <div className="settings-button-container">
          <Button
            shape="circular"
            icon={<ArrowClockwiseFilled />}
            appearance="primary"
          />
        </div>
      </div>

      <div className="settings-option-container">
        <div className="settings-option-title">
          <Text>{languageData.language}</Text>
        </div>
        <Field>
        <RadioGroup defaultValue={language} onChange={handleLanguageChange}>
          <Radio
            value="en"
            label={languageData.en}
          />
          <Radio
            value="tr"
            label={languageData.tr}
          />
          </RadioGroup>
        </Field>
      </div>
      
      <div className="settings-option-container">
        <div className="settings-option-title">
          <Text>{languageData.theme}</Text>
        </div>
        <Field>
        <RadioGroup value={selectedTheme} onChange={handleThemeChange}>
          <Radio value="dark" label={languageData.dark} />
          <Radio value="light" label={languageData.light} />
        </RadioGroup>
        </Field>
      </div>

      <div className="settings-option-container">
        <Button
          disabled={!hasChanges}
          className="settings-save-button"
          appearance="primary"
          onClick={handleSaveSettings}
        >
          {languageData.saveSettingsButton}
        </Button>
      </div>
    </>
  );
}

export default Settings;