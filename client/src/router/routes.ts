export interface IAppRoute {
    path : string,
    component : React.LazyExoticComponent<React.ComponentType<any>>
    name : string
}

export const publicRoutes : IAppRoute[] = [];

export const privateRoutes : IAppRoute[] = [];