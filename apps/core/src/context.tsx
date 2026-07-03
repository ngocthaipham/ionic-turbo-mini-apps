import { createContext, useContext } from 'react';
import type { CoreConfig, CoreTheme } from './types';

export interface CoreContextValue {
  config: CoreConfig;
  theme?: CoreTheme;
}

const CoreContext = createContext<CoreContextValue | null>(null);

export function useCoreContext(): CoreContextValue {
  const value = useContext(CoreContext);
  if (!value) {
    throw new Error('useCoreContext must be used within CoreProvider');
  }
  return value;
}

export function useOptionalCoreContext(): CoreContextValue | null {
  return useContext(CoreContext);
}

export { CoreContext };
