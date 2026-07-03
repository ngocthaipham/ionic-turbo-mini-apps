import { cart, home } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import { useOptionalCoreContext } from './context';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonReactRouter,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from './ionic-components';
import type { CoreConfig, CoreMiniApp } from './types';
import { DEFAULT_CORE_APPS } from './types';
import { HomeApp } from '@your-org/home';
import { ProductsApp } from '@your-org/products';

export interface CoreAppProps {
  config?: CoreConfig;
}

function resolveApps(config: CoreConfig): CoreMiniApp[] {
  const apps = config.apps?.length ? config.apps : DEFAULT_CORE_APPS;
  return apps;
}

export function CoreApp({ config: configProp }: CoreAppProps = {}) {
  const context = useOptionalCoreContext();
  const config = configProp ?? context?.config ?? {};
  const enabledApps = resolveApps(config);

  const homeConfig = config.home ?? {};
  const productsConfig = config.products ?? {};
  const tabLabels = config.tabs ?? {};
  const defaultPath = `/${enabledApps[0]}`;

  // Single mini app: Ionic non-tabs pattern (Route under IonReactRouter, no IonTabs/outlet).
  if (enabledApps.length === 1) {
    const path = `/${enabledApps[0]}`;

    return (
      <IonApp>
        <IonReactRouter>
          <Route exact path={path}>
            {enabledApps[0] === 'home' ? (
              <HomeApp {...homeConfig} />
            ) : (
              <ProductsApp {...productsConfig} />
            )}
          </Route>
          <Route exact path="/">
            <Redirect to={path} />
          </Route>
        </IonReactRouter>
      </IonApp>
    );
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {enabledApps.includes('home') && (
              <Route exact path="/home">
                <HomeApp {...homeConfig} />
              </Route>
            )}
            {enabledApps.includes('products') && (
              <Route exact path="/products">
                <ProductsApp {...productsConfig} />
              </Route>
            )}
            <Route exact path="/">
              <Redirect to={defaultPath} />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            {enabledApps.includes('home') && (
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={home} />
                <IonLabel>{tabLabels.home ?? 'Home'}</IonLabel>
              </IonTabButton>
            )}
            {enabledApps.includes('products') && (
              <IonTabButton tab="products" href="/products">
                <IonIcon icon={cart} />
                <IonLabel>{tabLabels.products ?? 'Products'}</IonLabel>
              </IonTabButton>
            )}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}
