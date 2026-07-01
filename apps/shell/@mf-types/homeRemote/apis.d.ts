
    export type RemoteKeys = 'homeRemote/HomeApp';
    type PackageType<T> = T extends 'homeRemote/HomeApp' ? typeof import('homeRemote/HomeApp') :any;