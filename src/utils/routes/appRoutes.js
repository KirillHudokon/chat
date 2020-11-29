import UserInfo from "../../components/Auth/UserInfo"
import UserImageForm from "../../components/Auth/UserImageForm"
import ChatApp from "../../components/ChatApp/"
export const appRoutes = [
    {
        name:'main',
        path:'/',
        component: ChatApp,
        exact: true
    },
    {
        name:'step1',
        path:'/user-info/1',
        component: UserInfo,
        exact: true
    },
    {
        name:'step2',
        path:'/user-info/2',
        component: UserImageForm,
        exact: true
    },
]