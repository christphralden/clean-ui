---
title: "Default Sidebar - React"
description: "Simple Low-Level Sidebar using react-ts"
---
import { cn } from '@core/lib/utils';
import React from 'react';
import { SidebarContextProvider, useSidebarContext } from './context/sidebar-context';

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
    return (
        <div className={cn("default styles", className)}>
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
    currentPath
}: {
    children: React.ReactNode;
    className?: string;
    currentPath: string;
}) => {
    return (
        <SidebarContextProvider currentPath={currentPath}>
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