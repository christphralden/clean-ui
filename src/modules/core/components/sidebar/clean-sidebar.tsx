import { ContentRoutes } from '@core/lib/routes';
import { Sidebar } from '@sidebar/default';

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