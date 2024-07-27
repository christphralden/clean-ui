import { ContentRoutes } from '@core/lib/routes';
import type { RouteName } from '@sidebar/default';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface SidebarContextProps {
    active: RouteName | undefined;
    handleChange: (routeName: RouteName) => any;
}

const SidebarContext = createContext<SidebarContextProps | null>(null);

export function SidebarContextProvider({
    children,
    currentPath
}: {
    children: React.ReactNode;
    currentPath: string;
}) {
    const [active, setActive] = useState<RouteName | undefined>();

    useEffect(() => {
        const currentRoute = currentPath.replace(ContentRoutes.baseUrl, '');
        const activeRoute = ContentRoutes.routes.find(route => route.route === currentRoute)?.route as RouteName;
        setActive(activeRoute);
    }, [currentPath]);

    function handleChange(routeName: RouteName) {
        setActive(routeName);
    }

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
}