import { cn } from '@core/lib/utils';
import React from 'react';
import { SidebarContextProvider, useSidebarContext } from '@sidebar/default';

function SidebarContent({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn('min-w-fit min-h-fit h-full w-64 lg:w-80 flex flex-col justify-between select-none', className)}>
            {children}
        </div>
    );
}

function SidebarItems({
    children,
    className
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("flex flex-col", className)}>
            {children}
        </div>
    );
}

function SidebarItem({
    children,
    className,
    route,
    group = false,
    ...other
}: {
    children?: React.ReactNode;
    className?: string;
    route?: string;
    group?: boolean;
    [x: string]: any;
}) {
    const { active } = useSidebarContext();
    const isActive = route ? active == route : group ? true : false
    return (
        <a {...other} href={route} className={cn(isActive ? "font-normal text-black" : "font-thin text-gray-600", "flex" ,className)}>
            {children}
        </a>
    );
}


const SidebarComponent = ({
    children,
    className,
    currentPath,
}: {
    children: React.ReactNode;
    className?: string;
    currentPath: string;
}) => {
    return (
        <SidebarContextProvider currentPath={currentPath} >
            <SidebarContent className={className}>
                {children}
            </SidebarContent>
        </SidebarContextProvider>
    );
};

export const SidebarReact = Object.assign(SidebarComponent, {
    Items: SidebarItems,
    Item: SidebarItem
});

export type RouteName = string

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

