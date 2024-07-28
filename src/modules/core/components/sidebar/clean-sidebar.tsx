import { ContentRoutes } from '@core/lib/routes';
import { SidebarReact } from '@sidebar/default';

export const CleanSidebar = ({
    currentPath
}: {
    currentPath: string
}) => {
    return (
        <SidebarReact currentPath={currentPath} >
            <SidebarReact.Items className='gap-6 text-base'>
                {ContentRoutes.routeGroups.map((routeGroup) => (
                    <SidebarReact.Items key={routeGroup.group}>
                        <SidebarReact.Item group className='uppercase font-normal mb-2'>
                            <h3>{routeGroup.group}</h3>
                        </SidebarReact.Item>

                        <SidebarReact.Items className='gap-2'>
                            {routeGroup.routes.map((route) => (
                                <SidebarReact.Item 
                                    key={route.route} 
                                    route={`${ContentRoutes.baseUrl}${routeGroup.group}/${route.route}/`} 
                                    className="capitalize"
                                >
                                    {route.name}
                                </SidebarReact.Item>
                            ))}
                        </SidebarReact.Items>
                    </SidebarReact.Items>
                ))}
            </SidebarReact.Items> 
        </SidebarReact>
    );
};