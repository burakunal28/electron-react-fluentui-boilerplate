import { createContext } from 'react';
import type { Location } from 'react-router-dom';

export const LocationContext = createContext<Location | undefined>(undefined);