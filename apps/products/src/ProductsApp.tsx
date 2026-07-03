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
import type { Product } from '@your-org/types';
import { PageLayout, SharedButton } from '@your-org/ui';

const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Ionic React',
    price: 0,
    description: 'Cross-platform UI components',
  },
  {
    id: '2',
    name: 'NPM Packages',
    price: 0,
    description: 'Installable micro-frontend libraries',
  },
  {
    id: '3',
    name: 'Turborepo',
    price: 0,
    description: 'Monorepo build orchestration',
  },
];

export interface ProductsMfeConfig {
  headerTitle?: string;
  title?: string;
  subtitle?: string;
  products?: Product[];
  currency?: string;
  onProductSelect?: (product: Product) => void;
}

export function ProductsApp({
  headerTitle = 'Products',
  title = 'Product Catalog',
  subtitle = 'Installed from @your-org/products npm package.',
  products = defaultProducts,
  currency = 'USD',
  onProductSelect,
}: ProductsMfeConfig = {}) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{headerTitle}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <PageLayout title={title} subtitle={subtitle}>
          {products.map((product) => (
            <IonCard key={product.id}>
              <IonCardHeader>
                <IonCardTitle>{product.name}</IonCardTitle>
                <IonCardSubtitle>
                  {product.description}
                  {product.price > 0 && ` — ${product.price} ${currency}`}
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <SharedButton
                  color="secondary"
                  onClick={() => onProductSelect?.(product)}
                >
                  View {product.name}
                </SharedButton>
              </IonCardContent>
            </IonCard>
          ))}
        </PageLayout>
      </IonContent>
    </IonPage>
  );
}
