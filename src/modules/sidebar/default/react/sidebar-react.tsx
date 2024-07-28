import { cn } from '@core/lib/utils';
import React from 'react';
import { SidebarContextProvider, useSidebarContext } from './context/sidebar-context';
import type { RouteType } from '@sidebar/default';

function SidebarContent({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn('default styles', className)}>
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
    const { active } = useSidebarContext();
    return (
        <div className={cn("default styles", className)}>
            <p>active: {active}</p> 
            {children}
        </div>
    );
}

function SidebarItem({
    children,
    className,
    route,
    ...other
}: {
    children?: React.ReactNode;
    className?: string;
    route: string;
    [x: string]: any;
}) {
    const { active } = useSidebarContext();
    const isActive = active === route;

    return (
        <div {...other} className={cn(isActive ? "font-bold" : "font-thin", className)}>
            {children}
        </div>
    );
}

const SidebarComponent = ({
    children,
    className,
    currentPath,
    routes
}: {
    children: React.ReactNode;
    className?: string;
    currentPath: string;
    routes: RouteType
}) => {
    return (
        <SidebarContextProvider routes={routes} currentPath={currentPath}>
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