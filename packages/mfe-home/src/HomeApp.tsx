import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { PageLayout, SharedButton } from '@your-org/ui';

export interface HomeMfeConfig {
  headerTitle?: string;
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  onAction?: () => void;
}

export function HomeApp({
  headerTitle = 'Home',
  title = 'Welcome',
  subtitle = 'Installed from @your-org/mfe-home npm package.',
  buttonLabel = 'Shared UI Button',
  onAction,
}: HomeMfeConfig = {}) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{headerTitle}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <PageLayout title={title} subtitle={subtitle}>
          <SharedButton color="primary" onClick={onAction}>
            {buttonLabel}
          </SharedButton>
        </PageLayout>
      </IonContent>
    </IonPage>
  );
}
