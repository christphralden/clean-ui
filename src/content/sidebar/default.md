---
title: "Default Sidebar"
description: "A simple, modular sidebar for easy customization. Build your own sidebar by defining styles and routes."
lang: "react-ts"
creator: "christphralden"
content: 
  - type: "header"
    value: "Implementation - Astro."
  - type: "description"
    value: "How to use this component in Astro."
  - type: "code"
    filename: "custom-sidebar.tsx"
    lang: "typescript"
    value: |
        import { ContentRoutes } from '@core/lib/routes'; // adjust import
        import { Sidebar } from '@sidebar/default'; // adjust import

        export const CleanSidebar = ({
            currentPath
        }: {
            currentPath: string
        }) => {
            return (
                <Sidebar currentPath={currentPath} >
                    <Sidebar.Items className='gap-6'>
                        {ContentRoutes.routeGroups.map((routeGroup) => (
                            <Sidebar.Items key={routeGroup.group}>
                                <Sidebar.Item group className='uppercase font-normal mb-2'>
                                    <h3>{routeGroup.group}</h3>
                                </Sidebar.Item>

                                <Sidebar.Items className='gap-1'>
                                    {routeGroup.routes.map((route) => (
                                        <Sidebar.Item 
                                            key={route.route} 
                                            route={`${ContentRoutes.baseUrl}${routeGroup.group}/${route.route}/`} 
                                            className="capitalize"
                                        >
                                            {route.name}
                                        </Sidebar.Item>
                                    ))}
                                </Sidebar.Items>
                            </Sidebar.Items>
                        ))}
                    </Sidebar.Items> 
                </Sidebar>
            );
        };

  - type: "header"
    value: "Copy and paste the following code into your project."
  - type: "description"
    value: "Component for the sidebar."
  - type: "code"
    filename: "sidebar.tsx"
    lang: "typescript"
    value: |
        import { cn } from '@core/lib/utils'; // adjust import
        import React from 'react';
        import { SidebarContextProvider, useSidebarContext } from '@sidebar/default'; // adjust import

        function SidebarContent({
            children,
            className
        }: {
            children: React.ReactNode;
            className?: string;
        }) {
            return (
                <div className={cn('min-w-fit min-h-fit h-full w-52 xl:w-80 flex flex-col justify-between select-none', className)}>
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
                <div className={cn("flex flex-col cursor-pointer", className)}>
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
                <a {...other} href={route} className={cn(isActive ? "font-normal text-black" : "font-thin text-gray-600", "flex cursor-pointer" ,className)}>
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

        export const Sidebar = Object.assign(SidebarComponent, {
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


  - type: "header"
    value: "Copy and paste the following code into your project."
  - type: "description"
    value: "Use this sidebar context to share states or customize a render function to dynamically replace content within the content div for a single-page experience."
  - type: "code"
    filename: "context/sidebar-context.tsx"
    lang: "typescript"
    value: |
        import React, { createContext, useContext, useState } from 'react';
        import type { RouteName } from '@sidebar/default'; // adjust import

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


  - type: "header"
    value: "Define and map routes for your sidebar."
  - type: "description"
    value: "You can route with a slug or without, this just helps you map your existing route to the sidebar. Customize your own structure by changing the way you map your sidebar. But heres a general layout you can use."
  - type: "code"
    filename: "routes/sidebar-routes.ts"
    lang: "typescript"
    value: |
        export const ContentRoutes = {
            baseUrl:"/components/", // this is the base url for your routes, feel free to disregard
            routeGroups:[ // here you can define groups
                {
                    group: "group1", // name of the group
                    routes:[
                        {
                            name: "route1", // here is the text you want to display to users
                            route: "route-1" // here is the route
                        },
                        {
                            name: "very long route",
                            route: "very-long-route" // you can change naming conventions for spaces
                        },
                    ]
                },
                {
                    group:"group2",
                    routes:[
                        {
                            name: "route3",
                            route: "route-3"
                        }
                    ]
                }
            ]
        }


  - type: "header"
    value: "Update imports."
  - type: "description"
    value: "Change the import paths to match your project."

  - type: "header"
    value: "Additional tips."
  - type: "description"
    value: "Define index.ts as an entry point for your imports."
  - type: "code"
    filename: "index.ts"
    lang: "typescript"
    value: |
        export { Sidebar } from './react/sidebar' // adjust path
        export type { RouteName, RouteGroup, RouteMap } from './react/sidebar' // adjust path
        export { SidebarContextProvider, useSidebarContext } from './react/context/sidebar-context' // adjust path
        

  

---