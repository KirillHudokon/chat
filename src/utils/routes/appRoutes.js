import UserInfo from "../../containers/Auth/UserInfo"
import UserImageForm from "../../containers/Auth/UserImageForm"
import ChatApp from "../../components/ChatApp/"
import { Sp } from '../../components/Sp'
export const appRoutes = [
    {
        name:'main',
        path:'/',
        component: ChatApp,
        exact: true
    },
    {
        name:'contacts',
        path:'/contacts',
        component: Sp,
        exact: true
    },
    {
        name:'settings',
        path:'/settings',
        component: Sp,
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