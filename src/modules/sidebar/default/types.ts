import { ContentRoutes } from "@core/lib/routes";

export type RouteName = typeof ContentRoutes.routes[number]['route'];

export interface Route {
    name: string;
    route: RouteName;
}

export type RouteType = {
    baseUrl: string;
    routes: Route[];
}
