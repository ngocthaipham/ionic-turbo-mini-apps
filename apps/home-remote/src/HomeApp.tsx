import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { PageLayout, SharedButton } from '@repo/ui';

export default function HomeApp() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home MFE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <PageLayout
          title="Welcome"
          subtitle="This remote loads at runtime via Module Federation from port 3001."
        >
          <SharedButton color="primary">Shared UI Button</SharedButton>
        </PageLayout>
      </IonContent>
    </IonPage>
  );
}
