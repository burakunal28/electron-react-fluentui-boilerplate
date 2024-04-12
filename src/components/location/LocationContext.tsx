import { createContext } from 'react';
import { Location } from 'react-router-dom';

export const LocationContext = createContext<Location | undefined>(undefined);