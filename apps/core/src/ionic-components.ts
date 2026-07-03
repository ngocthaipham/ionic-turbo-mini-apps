import type { FC, ReactNode } from 'react';
import {
  IonApp as IonAppBase,
  IonIcon as IonIconBase,
  IonLabel as IonLabelBase,
  IonRouterOutlet as IonRouterOutletBase,
  IonTabBar as IonTabBarBase,
  IonTabButton as IonTabButtonBase,
  IonTabs as IonTabsBase,
} from '@ionic/react';
import { IonReactRouter as IonReactRouterBase } from '@ionic/react-router';

type WithChildren = { children?: ReactNode };

function asFc<P>(component: unknown): FC<P> {
  return component as FC<P>;
}

// Stencil-backed Ionic components fail React 18.3+ JSX checks; cast with explicit props.
export const IonApp: FC<WithChildren> = asFc<WithChildren>(IonAppBase);
export const IonReactRouter: FC<WithChildren> = asFc<WithChildren>(IonReactRouterBase);
export const IonTabs: FC<WithChildren> = asFc<WithChildren>(IonTabsBase);
export const IonRouterOutlet: FC<WithChildren> = asFc<WithChildren>(IonRouterOutletBase);
export const IonTabBar: FC<{ slot?: string; children?: ReactNode }> = asFc<{
  slot?: string;
  children?: ReactNode;
}>(IonTabBarBase);
export const IonTabButton: FC<{
  tab: string;
  href: string;
  children?: ReactNode;
}> = asFc<{ tab: string; href: string; children?: ReactNode }>(IonTabButtonBase);
export const IonIcon: FC<{ icon: string }> = asFc<{ icon: string }>(IonIconBase);
export const IonLabel: FC<WithChildren> = asFc<WithChildren>(IonLabelBase);
