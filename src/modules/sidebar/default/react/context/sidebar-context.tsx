import React, { createContext, useContext, useState } from 'react';
import type { RouteName, RouteType } from '@sidebar/default';

interface SidebarContextProps {
    active: RouteName | undefined;
    handleChange: (routeName: RouteName) => void;
}

const SidebarContext = createContext<SidebarContextProps | null>(null);

export function SidebarContextProvider({
    children,
    currentPath,
    routes
}: {
    children: React.ReactNode;
    currentPath: string;
    routes: RouteType;
}) {
    const baseUrl = routes.baseUrl || '';
    const currentRoute = currentPath.replace(baseUrl, '');
    const initialActiveRoute = routes.routes.find(route => currentRoute.startsWith(route.route))?.route as RouteName;

    const [active, setActive] = useState<RouteName | undefined>(initialActiveRoute);

    const handleChange = (routeName: RouteName) => {
        setActive(routeName);
    };

    return (
        <SidebarContext.Provider value={{ active, handleChange }}>
            {children}
        </SidebarContext.Provider>
    );
}

export const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebarContext must be used within a SidebarContextProvider");
    }
    return context;
};