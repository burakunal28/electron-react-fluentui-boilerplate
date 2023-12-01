import { Electron } from 'electron';

declare global {
  interface Window extends Electron {
    electron: {
      ipcRenderer: {
        invoke: (channel: string, ...args: unknown[]) => Promise<unknown>;
        on: (channel: string, listener: (event: unknown, ...args: unknown[]) => void) => void;
        removeAllListeners: (channel: string) => void;
      };
    };
  }
}