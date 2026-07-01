import { IonApp, setupIonicReact } from '@ionic/react';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ProductsApp from './ProductsApp';

setupIonicReact();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IonApp>
      <ProductsApp />
    </IonApp>
  </StrictMode>,
);
