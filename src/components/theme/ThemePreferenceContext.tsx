import React from 'react';

export const ThemePreferenceContext = React.createContext({
  themePreference: 'system',
  setThemePreference: (_theme: string) => {},
});