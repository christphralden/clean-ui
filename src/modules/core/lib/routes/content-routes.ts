export const ContentRoutes = {
    baseUrl:"/components/",
    routeGroups:[
        {
            group: "getting-started",
            routes:[
                {
                    name:"introduction",
                    route:"introduction"
                },
                {
                    name: "installation",
                    route: "installation"
                },
                {
                    name: "setup",
                    route: "setup"
                },
            ]
        },
        {
            group: "sidebar",
            routes:[
                {
                    name: "default sidebar",
                    route: "default-sidebar"
                },
                // {
                //     name: "snellberg",
                //     route: "snellberg"
                // },
            ]
        },
        // {
        //     group: "navbar",
        //     routes:[
        //         {
        //             name: "default",
        //             route: "default"
        //         },
        //     ]
        // },
        {
            group:"micro-interactions",
            routes:[
                {
                    name: "variable hover",
                    route: "variable-hover"
                }
            ]
        },
        {
            group:"scroll-interactions",
            routes:[
                {
                    name:"text parallax",
                    route:"text-parallax"
                }
            ]
        }
        // {
        //     group:"form",
        //     routes:[
        //         {
        //             name: "Authentication",
        //             route: "authentication"
        //         },
        //         {
        //             name: "Single Input",
        //             route: "single-input"
        //         },
        //         {
        //             name: "Text Area",
        //             route: "text-area"
        //         }
        //     ]
        // },
        // {
        //     group:"layout",
        //     routes:[
        //         {
        //             name: "hero section",
        //             route: "hero-section"
        //         }
        //     ]
        // }
    ]
    
}
