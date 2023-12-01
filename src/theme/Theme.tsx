/* eslint-disable react-refresh/only-export-components */
import { createDarkTheme, createLightTheme } from '@fluentui/react-components';
import type { BrandVariants, Theme } from '@fluentui/react-components';

const RedFluent: BrandVariants = { 
    10: "#070200",
    20: "#281004",
    30: "#441608",
    40: "#5B190A",
    50: "#741B0B",
    60: "#8D1B0B",
    70: "#A71B09",
    80: "#C21807",
    90: "#DD1204",
    100: "#F90400",
    110: "#FF4425",
    120: "#FF6946",
    130: "#FF8665",
    140: "#FF9E83",
    150: "#FFB59F",
    160: "#FFCBBB"
  };

  export const lightTheme: Theme = {
    ...createLightTheme(RedFluent),
  };
  
  export const darkTheme: Theme = {
    ...createDarkTheme(RedFluent),
    colorBrandForeground1: RedFluent[110],
    colorBrandForeground2: RedFluent[120],
  };
    
  export type { BrandVariants, Theme };