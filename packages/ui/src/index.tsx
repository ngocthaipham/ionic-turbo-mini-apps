import { IonButton } from '@ionic/react';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'tertiary';
}

export function SharedButton({ children, onClick, color = 'primary' }: ButtonProps) {
  return (
    <IonButton color={color} onClick={onClick}>
      {children}
    </IonButton>
  );
}

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <div style={{ padding: '0 4px' }}>
      <h2 style={{ margin: '8px 0 4px', fontSize: '1.25rem' }}>{title}</h2>
      {subtitle && (
        <p style={{ margin: '0 0 16px', color: 'var(--ion-color-medium)' }}>{subtitle}</p>
      )}
      {children}
    </div>
  );
}
