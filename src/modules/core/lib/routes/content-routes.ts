const ContentRoutes = {
    baseUrl:"/components/",
    routeGroups:[
        {
            group: "sidebar",
            routes:[
                {
                    name: "default",
                    route: "default"
                },
                {
                    name: "snellberg",
                    route: "snellberg"
                },
            ]
        },
        {
            group: "navbar",
            routes:[
                {
                    name: "default",
                    route: "default"
                },
            ]
        }
    ]
    
}

export default ContentRoutes