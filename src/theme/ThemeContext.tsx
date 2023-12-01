import { createContext, useContext } from 'react';
import { Theme } from '@fluentui/react-components';

interface ThemeContextProps {
theme: Theme;
setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}