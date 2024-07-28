import React, { createContext, useContext, useState } from 'react';
import type { RouteName } from '@sidebar/default';

interface SidebarContextProps {
    active: RouteName | undefined;
    handleChange: (routeName: RouteName) => void;
}

const SidebarContext = createContext<SidebarContextProps | null>(null);

export function SidebarContextProvider({
    children,
    currentPath,
}: {
    children: React.ReactNode;
    currentPath: string;
}) {

    const [active, setActive] = useState<RouteName | undefined>(currentPath);

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