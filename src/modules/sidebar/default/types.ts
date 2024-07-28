import { ContentRoutes } from "@core/lib/routes";

export type RouteName = typeof ContentRoutes.routeGroup[number]['routes'][number]['route'];


export interface Route {
    name: string;
    route: RouteName;
}
export interface RouteGroup{
    group:string,
    routes: Route[]
}
export type RouteMap = {
    baseUrl: string;
    routeGroup: RouteGroup[];
}
