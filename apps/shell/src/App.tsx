import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonSpinner,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cart, home } from 'ionicons/icons';
import { Component, lazy, Suspense, type ReactNode } from 'react';
import { Redirect, Route } from 'react-router-dom';

const HomeApp = lazy(() => import('homeRemote/HomeApp'));
const ProductsApp = lazy(() => import('productsRemote/ProductsApp'));

function RemoteFallback() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 32 }}>
      <IonSpinner name="crescent" />
    </div>
  );
}

class RemoteErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="ion-padding">
          <p>Remote failed to load. Ensure all apps are running via <code>pnpm dev</code>.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <RemoteErrorBoundary>
                <Suspense fallback={<RemoteFallback />}>
                  <HomeApp />
                </Suspense>
              </RemoteErrorBoundary>
            </Route>
            <Route exact path="/products">
              <RemoteErrorBoundary>
                <Suspense fallback={<RemoteFallback />}>
                  <ProductsApp />
                </Suspense>
              </RemoteErrorBoundary>
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="products" href="/products">
              <IonIcon icon={cart} />
              <IonLabel>Products</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}
