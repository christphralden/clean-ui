import { ContentRoutes } from '@core/lib/routes';
import { SidebarReact} from '@sidebar/default';

const CleanSidebar = ({
	currentPath
}:{
	currentPath: string
}) => {
	return (
        <SidebarReact routes={ContentRoutes} currentPath={currentPath}>
            <SidebarReact.Items>
                {ContentRoutes.routes.map((route, index) => (
                    <SidebarReact.Item key={index} route={route.route} className="uppercase">
                        <a href={`${ContentRoutes.baseUrl}${route.route}`}>{route.name}</a>
                    </SidebarReact.Item>
                ))}
            </SidebarReact.Items>
        </SidebarReact>
    );
};

export {CleanSidebar}