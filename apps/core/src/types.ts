import type { HomeMfeConfig } from '@your-org/home';
import type { ProductsMfeConfig } from '@your-org/products';

export type CoreMiniApp = 'home' | 'products';

export const DEFAULT_CORE_APPS: CoreMiniApp[] = ['home', 'products'];

export interface CoreTabLabels {
  home?: string;
  products?: string;
}

export interface CoreConfig {
  /** Mini apps to mount. Default: both `home` and `products`. */
  apps?: CoreMiniApp[];
  home?: HomeMfeConfig;
  products?: ProductsMfeConfig;
  tabs?: CoreTabLabels;
}

export interface CoreTheme {
  primary?: string;
}
