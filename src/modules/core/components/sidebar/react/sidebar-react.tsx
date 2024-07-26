import { cn } from '@core/lib/utils';
import React from 'react';
import { SidebarContextProvider, useSidebarContext } from './context/sidebar-context';

function SidebarContent({
    children,
    className
}:{
    children: React.ReactNode,
    className?: string
}){
    return (
        <div className={cn('default styles', className)}>
            {children}
        </div>
    );
}

function SidebarItems({
    children,
    className
}:{
    children?: React.ReactNode,
    className?: string
}){
    return (
        <div className={cn("default styles", className)}>
            {children}
        </div>
    );
}

function SidebarItem({
    children,
    className,
    index
}:{
    children?: React.ReactNode,
    className?: string,
    index: number
}){
    const { handleItemClick, active } = useSidebarContext();
    return (
        <div onClick={() => handleItemClick({ index })} key={index} className={cn(index === active ? "font-bold" : "", className)}>
            {children}
        </div>
    );
}

const SidebarComponent = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <SidebarContextProvider>
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