import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import type { Product } from '@repo/types';
import { PageLayout, SharedButton } from '@repo/ui';

const demoProducts: Product[] = [
  {
    id: '1',
    name: 'Ionic React',
    price: 0,
    description: 'Cross-platform UI components',
  },
  {
    id: '2',
    name: 'Module Federation',
    price: 0,
    description: 'Runtime micro-frontend loading',
  },
  {
    id: '3',
    name: 'Turborepo',
    price: 0,
    description: 'Monorepo build orchestration',
  },
];

export default function ProductsApp() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products MFE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <PageLayout
          title="Product Catalog"
          subtitle="Independent remote on port 3002 — deployable separately."
        >
          {demoProducts.map((product) => (
            <IonCard key={product.id}>
              <IonCardHeader>
                <IonCardTitle>{product.name}</IonCardTitle>
                <IonCardSubtitle>{product.description}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <SharedButton color="secondary">View {product.name}</SharedButton>
              </IonCardContent>
            </IonCard>
          ))}
        </PageLayout>
      </IonContent>
    </IonPage>
  );
}
