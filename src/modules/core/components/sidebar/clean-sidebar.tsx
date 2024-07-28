import { ContentRoutes } from '@core/lib/routes';
import { SidebarReact } from '@sidebar/default';

export const CleanSidebar = ({
    currentPath
}: {
    currentPath: string
}) => {
    return (
        <SidebarReact currentPath={currentPath} >
            <SidebarReact.Items className='gap-8'>
                {ContentRoutes.routeGroups.map((routeGroup, groupIndex) => (
                    <SidebarReact.Items>
                        <SidebarReact.Item group key={`group-${groupIndex}`} className='uppercase font-normal mb-1'>
                            <h3>{routeGroup.group}</h3>
                        </SidebarReact.Item>

                        <SidebarReact.Items>
                            {routeGroup.routes.map((route) => (
                                <SidebarReact.Item 
                                    key={route.route} 
                                    route={`${ContentRoutes.baseUrl}${routeGroup.group}/${route.route}`} 
                                    className="capitalize "
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