import Auth from "../../pages/Auth"
import ChatApp from "../../pages/ChatApp"
export const mainPages = {
    auth:[
        {
            name:'auth',
            path:'/:auth?/',
            component: Auth,
            exact: true
        },
    ],
    app:[
        {
            name:'app',
            path:'/:app?/:id?',
            component: ChatApp,
            exact: true
        }
        //{
          //  name:'404',
           // path:'**',
           // component: ChatApp,
           // exact: true
       // } 
    ]
}