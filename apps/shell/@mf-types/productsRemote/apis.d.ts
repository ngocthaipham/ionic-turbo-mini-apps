
    export type RemoteKeys = 'productsRemote/ProductsApp';
    type PackageType<T> = T extends 'productsRemote/ProductsApp' ? typeof import('productsRemote/ProductsApp') :any;