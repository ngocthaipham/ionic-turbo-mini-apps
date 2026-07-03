import type { CSSProperties, ReactNode } from 'react';
import { CoreContext } from './context';
import type { CoreConfig, CoreTheme } from './types';

export interface CoreProviderProps {
  config: CoreConfig;
  theme?: CoreTheme;
  children: ReactNode;
}

function themeToStyle(theme?: CoreTheme): CSSProperties | undefined {
  if (!theme?.primary) {
    return undefined;
  }

  return {
    '--ion-color-primary': theme.primary,
  } as CSSProperties;
}

export function CoreProvider({ config, theme, children }: CoreProviderProps) {
  return (
    <CoreContext.Provider value={{ config, theme }}>
      <div style={themeToStyle(theme)}>{children}</div>
    </CoreContext.Provider>
  );
}
