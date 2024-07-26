import { cn } from '@core/lib/utils';
import React from 'react';
import {useStore} from '@nanostores/react'
import { active } from  './context/sidebar-store'

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
    const $active = useStore(active)
    return (
        <div onClick={() => active.set(index)} key={index} className={cn(`${index === $active && "font-bold"} cursor-default`, className)}>
            {children}
        </div>
    );
}

const SidebarComponent = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <SidebarContent className={className}>
            {children}
        </SidebarContent>
    );
};

export const SidebarAstro = Object.assign(SidebarComponent, {
    Items: SidebarItems,
    Item: SidebarItem
});